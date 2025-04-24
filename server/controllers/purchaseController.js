const purchaseService = require("../services/purchaseService");

const purchaseController = {
  async purchase(req, res) {
    const buyedCorn = req.body.quantity;
    const clientUuId = req.body.clientUuId;

    const result = await purchaseService.processPurchase(clientUuId, buyedCorn);

    return res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      statusCode: result.statusCode,
      totalQuantity: result.totalQuantity,
    });
  },

  async getQuantityCornBoughtByClient(req, res) {
    const { clientUuId } = req.params;

    if (!clientUuId) {
      return res.status(400).json({
        success: false,
        message: "Client UUID is required",
      });
    }

    try {
      const lastPurchase = await purchaseService.findLastPurchase(clientUuId);

      if (!lastPurchase) {
        return res.status(200).json({
          success: true,
          totalQuantity: 0,
          message: "No purchases found for this client",
        });
      }

      const timeValidation = purchaseService.validatePurchaseTime(
        new Date(lastPurchase.timestamp)
      );

      return res.status(200).json({
        success: true,
        message: timeValidation.message,
        totalQuantity: lastPurchase.quantity,
      });
    } catch (error) {
      console.error("Error fetching client purchase status:", error);
      return res.status(500).json({
        success: false,
        message: "Error fetching purchase status",
      });
    }
  },
};

module.exports = purchaseController;
