const express = require("express");
const {
  viewOrder,
  createOrder,
  payOrder,
} = require("../controller/orderController");
const router = express.Router();

router.get("/", viewOrder);
router.post("/", createOrder);
router.patch("/:id", payOrder);

module.exports = router;
