const userModel =require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerUser(req, res){
    const {username ,email ,password ,role= "user"}=req.body;

    const isuserAlreadyExist = await userModel.findOne({
        $or:[
        {username},
        {email}
        ]
    })

    if(isuserAlreadyExist){
        return res.status(409).json({message:"User already exists"})
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id:user._id,
        role:user.role,

    },process.env.JSWT_SECREATS)

    res.cookie("tiken",token);

    res.status(201).json({
        message: "user created successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}

module.exports= {registerUser};