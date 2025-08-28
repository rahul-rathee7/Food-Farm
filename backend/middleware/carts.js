const express = require('express');
const router = express.Router();
const CartModel = require('../models/CartModel');

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      return res.status(200).json([]);
    }

    res.status(200).json(cart.products);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ success: false, message: 'Error fetching cart' });
  }
});

router.post('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { products } = req.body;

    if (!Array.isArray(products)) {
      return res.status(400).json({ success: false, message: 'Products array required' });
    }

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({ userId, products });
    } else {
      cart.products = products;
    }

    await cart.save();
    res.status(200).json({ success: true, message: 'Cart saved successfully' });
  } catch (error) {
    console.error('Error saving cart:', error);
    res.status(500).json({ success: false, message: 'Error saving cart' });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    await CartModel.findOneAndUpdate({ userId }, { products: [] });
    res.status(200).json({ success: true, message: 'Cart cleared' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ success: false, message: 'Error clearing cart' });
  }
});

module.exports = router;