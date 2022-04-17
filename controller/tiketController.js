const { tiket } = require("../models");

async function viewTicket(req, res) {
  try {
    let data = await tiket.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

async function createTicket(req, res) {
  try {
    const { name, price } = req.body;
    let data = await tiket.create({ name, price });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { viewTicket, createTicket };
