const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const productroute = require('./API/product.js')
const shipmentroute = require('./API/shipment.js')


dotenv.config({ path: './.env' });

app.use(cors());
app.use(express.json());

app.use('/api/products', productroute);
app.use('/api/shipments', shipmentroute);
//app.use("/api/users", usersRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port : ${process.env.PORT}`)
);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});
  console.log(`mongo connected host : ${conn.connection.host}`);
};

connectDB();