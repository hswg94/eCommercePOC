import User from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Register user
// @route   POST /api/users/
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc    Auth user & get Token
// @route   POST /api/users/login
// @access  Public
const userLogin = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const userLogout = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const userProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const userUpdate = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

//Admin

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUser = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});
// @desc    Get All Users
// @route   GET /api/users
// @access  Private/Admin
const getUserAll = asyncHandler(async (req, res) => {
  res.send("Get All Users");
});

// @desc    Delete Users
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete Users");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

export {
  userLogin,
  userRegister,
  userLogout,
  userProfile,
  userUpdate,
  getUser,
  getUserAll,
  deleteUser,
  updateUser,
};
