const Purchases = require("../models/purchases");

const purchaseRepository = {
  async findLastPurchaseByClientId(clientUuId) {
    return await Purchases.findOne({
      where: { clientUuId },
      order: [["timestamp", "DESC"]],
    });
  },

  async createPurchase(clientUuId, quantity) {
    return await Purchases.create({
      clientUuId,
      quantity,
      timestamp: new Date(),
    });
  }
};

module.exports = purchaseRepository;