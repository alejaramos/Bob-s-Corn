// server/services/purchaseService.js
const purchaseRepository = require("../repositories/purchasesRepository");

const purchaseService = {

  async findLastPurchase(clientUuId) {
    return await purchaseRepository.findLastPurchaseByClientId(clientUuId);
  },


  validatePurchaseTime(lastPurchaseTime) {
    const currentTime = new Date();
    const timeDifference = currentTime - lastPurchaseTime;
    const timeDifferenceInMinutes = Math.floor(timeDifference / 1000 / 60);
    const secondsRemaining = 60 - Math.floor((timeDifference / 1000) % 60);

    return {
      canPurchase: timeDifferenceInMinutes >= 1,
      timeDifferenceInMinutes,
      secondsRemaining: secondsRemaining > 0 ? secondsRemaining : 0,
    };
  },


  async processPurchase(clientUuId, quantity) {
    if (!clientUuId) {
      return {
        success: false,
        statusCode: 400,
        message: "Failed to make purchase, clientUuId is required",
      };
    }

    try {
      const lastPurchase = await this.findLastPurchase(clientUuId);

      if (!lastPurchase) {
        const purchase = await purchaseRepository.createPurchase(clientUuId, quantity);

        return {
          success: true,
          statusCode: 200,
          message: "You just made your first purchase!!!!!",
          quantity: purchase.quantity,
        };
      }

      const timeValidation = this.validatePurchaseTime(
        new Date(lastPurchase.timestamp)
      );

      if (!timeValidation.canPurchase) {
        return {
          success: false,
          statusCode: 429,
          message: `Too Many Requests`,
          secondsRemaining: timeValidation.secondsRemaining
        };
      }

      const newTotalQuantity = lastPurchase.quantity + quantity;
      await purchaseRepository.createPurchase(clientUuId, newTotalQuantity);

      return {
        success: true,
        statusCode: 200,
        message: "You just made a purchase!!",
        totalQuantity: newTotalQuantity,
      };
    } catch (error) {
      console.error("Error:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Error processing purchase",
        error: error.message,
      };
    }
  }
};

module.exports = purchaseService;