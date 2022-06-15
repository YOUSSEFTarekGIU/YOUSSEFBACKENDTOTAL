const Shipment = require ('../models/Shipment.js');
const express = require("express");

const router = express.Router();




router.get("/", async(req, res) =>{
  try {
    const allShipments = await Shipment.find();
    res.status(201).json({shipments: allShipments});
  } catch (error) {
    res.status(400).send(error.message);
  }
})

router.post('/', async (req, res) => {
  const newShipment = new Shipment(req.body);

  try {
    const savedShipment = await newShipment.save();
    res.status(200).json(savedShipment);
  } catch (err) {
    res.status(500).json(err);
  }
});





router.patch("/update/:id" , async (req, res)=>{
  try {
    const updatedShipmentStatus = await Shipment.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send("Successfully updated shipment");
  } catch (error) {
    res.status(400).send(error.message);
  }
})





module.exports = router;

















//! security routes middlewares
// const express = require('express');
// const shipmentRoute = require('./routes/shipmentRoutes');
// const app = express();
// //! 1)security
// //CORS handler
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
//   });
  

// //! 2) middlewares
// //? body paser, for reading data from the body
// app.use(express.json());
// //? to pass data coming from URL encoded form
// app.use(express.urlencoded({extended: true}));

// //! 3) routes
// app.use("/api/v1/shipments", shipmentRoute);

// module.exports = app;