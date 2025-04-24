const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

/**
 * @swagger
 * /api/purchases:
 *   post:
 *     summary: Make a new purchase of only one corn per client
 *     description: Create a new corn purchase for a client
 *     tags: [Purchases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientUuId
 *               - quantity
 *             properties:
 *               clientUuId:
 *                 type: string
 *                 description: Unique identifier for the client
 *               quantity:
 *                 type: number
 *                 description: Amount of corn to purchase
 *     responses:
 *       200:
 *         description: Purchase successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 quantity:
 *                   type: number
 *                 totalQuantity:
 *                   type: number
 *       400:
 *         description: Bad request - missing required fields
 *       429:
 *         description: Too many requests - time limit not met
 *       500:
 *         description: Server error
 */
router.post('/purchases', purchaseController.purchase);

/**
 * @swagger
 * /api/purchases/client/{clientUuId}:
 *   get:
 *     summary: Get quantity of corn bought by client
 *     description: Retrieve the total quantity of corn purchased by a specific client
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: clientUuId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique identifier for the client
 *     responses:
 *       200:
 *         description: Client purchase information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 totalQuantity:
 *                   type: number
 *                 canPurchase:
 *                   type: boolean
 *                 secondsRemaining:
 *                   type: number
 *                 lastPurchaseTime:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Bad request - missing client UUID
 *       500:
 *         description: Server error
 */
router.get('/purchases/client/:clientUuId', purchaseController.getQuantityCornBoughtByClient);

module.exports = router;