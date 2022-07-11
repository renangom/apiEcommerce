const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
//UTILIZANDO O .ENV QUE EU CRIEI
dotenv.config();

//CONEXÃO COM BANCO
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connection was nice"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
//INICIANDO O SERVIDOR
app.listen(process.env.PORT, () => {
  console.log("Server is working");
});
