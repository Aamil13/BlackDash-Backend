const express = require('express');
const cors = require('cors')
require("dotenv").config()
const connectdb = require("./Utils/ConnectDB")
const DashRoute = require("./Routes/DashRoute")

//init express app instanse
const app = express()
app.use(cors())
app.use(express.json())
//database
    connectdb()

    //Route mount
    app.use("/api/v1/all",DashRoute)

app.listen(5000,()=> console.log("Connected to 5000"))