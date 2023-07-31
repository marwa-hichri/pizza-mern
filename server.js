const express=require('express');
require('dotenv').config();
const connectdb = require('./config/db');
// const userroute= require("./router/contact")
const pizza =require('./models/pizzaModel');
const pizzaRoute=require('./routes/pizzasRoute');
const app = express();
const PORT = process.env.PORT || 4000;
connectdb();
app.use(express.json());
// app.use("/api/user",userroute);
app.get("/",(req,res)=>{res.status(200).send("hello from server")})
app.use('/api/pizzas/',pizzaRoute)
app.post('/', (req, res) => {
    const {  } = req.body;
    const { authorization } = req.headers;
    res.send({
        name,
        varients,
        prices,
        category,
        image,
        description

        
      
    });
  });
   

app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log("server is run on port",PORT)
})