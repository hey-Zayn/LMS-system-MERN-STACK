
const express = require("express");
const connectionDB = require("./DataBase/connectionDB");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.route");
const courseRouter = require("./routes/course.route");
const mediaRouter = require("./routes/media.route");
const purchaseRouter = require("./routes/PurchaseCourse.router");
const cookieparser = require("cookie-parser");
require("dotenv").config();


const port = process.env.PORT;

// MongoDB 
connectionDB();

// Default Middelwares
app.use(cookieparser());
app.use(cors({
    origin: "http://localhost:5173", // Match the exact origin
    credentials: true 
}));

app.use(express.json());
app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/media',mediaRouter);
app.use('/api/v1/purchase',purchaseRouter);

app.use("/",(req,res)=>{
    res.send("Hello");
});

app.listen(port,()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})
