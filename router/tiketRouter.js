const express = require("express");
const router = express.Router();
const { viewTicket, createTicket } = require("../controller/tiketController");

router.get("/", viewTicket);
router.post("/", createTicket);

module.exports = router;
