const express = require("express")
const app = express()
const {connectdb} = require('./config/db')
const cors = require('cors')
const authroutes = require('./routes/authRoutes')

app.use(cors())
app.use(express.json());
const port = 5000;

connectdb();

app.use('/api/auth',authroutes)


app.listen(port,()=>{
   console.log("app is running on 5000")
})




