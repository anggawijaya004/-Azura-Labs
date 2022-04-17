const { user } = require("../models");

async function createUser(req, res) {
  try {
    const { name } = req.body;
    let data = await user.create({ name });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createUser };
