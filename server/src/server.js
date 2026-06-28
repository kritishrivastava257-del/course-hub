require("dotenv").config();



const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoute");
const courseRoutes = require("./routes/courseRoute");
const cartRoutes=require("./routes/cartRoute")
const enrollmentRoutes=require("./routes/enrollmentRoute")
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/courses", courseRoutes);
app.use("/cart",cartRoutes);
app.use("/enrollments",enrollmentRoutes)
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is Running at Port ${PORT}`);
});