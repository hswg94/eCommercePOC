import asyncHandler from 'express-async-handler'
import Order from "../models/orderModel.js";

//@desc Create order
//@route POST /api/orders
//@access Private

const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x)=> ({
        ...x,
        product: x._id,
        _id: undefined
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//@desc Get Orders
//@route GET /api/orders/myorders
//@access Private
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id});
  res.status(200).json(orders);
});

//@desc Get Order by ID
//@route GET /api/orders/:id
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email')
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('order not found');
  }
});

//@desc Update order to paid
//@route GET /api/orders/:id/pay
//@access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

//@desc Update order to delivered
//@route GET /api/orders/:id/deliver
//@access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to delivered");
});

//@desc Get all orders
//@route GET /api/orders/
//@access Private/admin
const getAllOrders = asyncHandler(async (req, res) => {
  res.send("Get All Orders");
});

export {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
