const { order } = require("../models");

async function viewOrder(req, res) {
  try {
    let data = await order.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

async function createOrder(req, res) {
  try {
    const { userId, tiketId, amount } = req.body;
    let data = await order.create({
      userId,
      tiketId,
      amount,
      status: "pending",
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

async function payOrder(req, res) {
  try {
    const { id } = req.params;
    let data = await order.update({ status: "paid" }, { where: { id } });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { viewOrder, createOrder, payOrder };
