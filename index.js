require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();
const userRouter = require("./router/userController");
const ticketRouter = require("./router/tiketRouter");
const orderRouter = require("./router/orderRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/tickets", ticketRouter);
app.use("/orders", orderRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(port, () => {
  console.log("server running");
});
