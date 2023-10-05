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

  const router = express.Router();

  router.route("/")
  .post(userRegister)
  .get(getUserAll);

  router.route("/login")
  .post(userLogin);

  router.route("/logout")
  .post(userLogout);

  router.route("/profile")
  .get(userProfile)
  .put(userUpdate);

  router.route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

  export default router;
