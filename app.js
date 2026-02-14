require("dotenv").config();//1

const express =require("express"); //2

const app =express();//3


const mongoose =require("mongoose");//4
const { use } = require("react");
  const PORT=process.env.PORT||3003;

  app.use(express.json());
    const bcrypt =require("bcrypt");
  async function connectoinDB() {
      try {
          await mongoose.connect(process.env.DB_URL)
           console.log("conction scssful DB")
      } catch (error) {
            console.log("conction falid")
      }
          
      }
  
  connectoinDB();


  const User =require("./models/User");

  app.post("/register",async (req, res)=>{
    try {
        //  get data

        const { username,email, password, role}=req.body;

        // vaildate data
        if( !username||!email|| !password|| !role) return resizeBy.status(400).json({msg:"not filed"});
            const existUser= await User.findOne({email});
         if(existUser)return res .status(400),express.json({msg:"account already exist"});

        //create new User
        const hashpassword = await bcrypt.hash(password,10);
        const user =await User.create({
            username,
            email,
            password:hashpassword,
            role
        })
        // responser
        res .status(201).json({
            mas:"don ",
            data:user,
        });


    } catch (error) {
        console.log("error", error.message)
        app.post('/route', (req, res) => {
    const message = req.body.message; // تأكد من تعريف المتغير هنا
    console.log(message);
    res.send(message);
});
    }
  })
  
    app.post("/login", async(req ,res )=>{
        try {
            const {email , password}=req.body;
            if( !email|| !password) return resizeBy.status(400).json({msg:"not filed"});

            const euser= await User.findOne({email});
            if (!user)return res.status(404).json({mas:"lihhflkhff"})

                const matchpassword = await bcrypt.compare(password , user.password);
                if(!matchpassword)return res.status(400).json({mas:"invalid password"});

                res.status(200).json({
                    mas:"success login",
                });

        } catch (error) {
            console.log(error);
        }
    })

  app.listen(PORT,()=>{
    console.log("srver rinning un port 3003")
  });