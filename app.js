require("dotenv").config();//1

const express =require("express"); //2

const app =express();//3


const mongoose =require("mongoose");//4
const { use } = require("react");
  const PORT=process.env.PORT||3003;

  app.use(express.json());

  async function connectoinDB() {
      try {
          await mongoose.connect(process.env.DB_URL)
           console.log("conction scssful DB")
      } catch (error) {
            console.log("conction falid")
      }
          
      }
  
  connectoinDB();
  


  app.listen(PORT,()=>{
    console.log("srver rinning un port 3003")
  });