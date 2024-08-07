import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";

// router object
const router = express.Router();

// routing

// REGISTER  || METHOD POST
router.post("/register", registerController);

// LOGIN  || METHOD POST
router.post("/login", loginController);

// FORGOT PASSWORD  || METHOD POST
router.post("/forgot-password", forgotPasswordController);

//test rout
router.get("/test", requireSignIn, isAdmin, testController);

// PROTECTED  || METHOD GET
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// PROTECTED ROUTE FOR ADMIN || METHOD GET
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update user profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
