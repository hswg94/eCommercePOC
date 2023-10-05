import express from "express";
import {
    userRegister,
    userLogin,
    userLogout,
    userProfile,
    userUpdate,
    getUser,
    getUserAll,
    deleteUser,
    updateUser,
  } from '../controllers/userController.js';
import { userAuth, adminAuth } from '../middleware/authMiddleware.js'

  const router = express.Router();

  router.route("/")
  .post(userRegister)
  .get(userAuth, adminAuth, getUserAll);

  router.route("/login")
  .post(userLogin);

  router.route("/logout")
  .post(userAuth, userLogout);

  router.route("/profile")
  .get(userAuth, userProfile)
  .put(userAuth, userUpdate);

  router.route("/:id")
  .get(userAuth, adminAuth, getUser)
  .delete(userAuth, adminAuth, deleteUser)
  .put(userAuth, adminAuth, updateUser);

  export default router;
