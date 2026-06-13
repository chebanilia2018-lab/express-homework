import express from "express";
import {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = express.Router();


router.route("/users")
  .get(getAllUsers)
  .post(addUser);


router.route("/users/:userId")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;