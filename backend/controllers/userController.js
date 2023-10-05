import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from '../utils/generateToken.js';

// @desc    Register user
// @route   POST /api/users/
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  } else {
    const user = await User.create({
      name,
      email,
      password,
    });
    generateToken(user._id, res);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
});

// @desc    Auth user & get Token
// @route   POST /api/users/login
// @access  Public

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const isValidPassword = await user.matchPassword(password);
  if (user && isValidPassword) {
    generateToken(user._id, res);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const userLogout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  }),
    res.status(200).json({ message: "Logged Out Successfully" });
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
