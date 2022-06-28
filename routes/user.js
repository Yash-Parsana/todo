// const express = require("express")
// const router = express.Router()
// const User = require("../models/User")
// const bcryptjs = require("bcryptjs")
// const jwt=require("jsonwebtoken")
// const user_jwt = require("../middleware/user_jwt")


// router.get("/", user_jwt,async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id).select("~password")
//         res.status(200).json({
//             success: true,
//             user:user
//         })
//     }
//     catch(err) {
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             msg: "Server Error"
//         })
//     }
// })

// router.post("/register",async (req, res, next) => {
    
//     const { username, email, password } = req.body
    
//     try
//     {
//         let userExist = await User.findOne({ email: email })
        
//         if (userExist) {
//             res.json({
//                 success: false,
//                 msg: "User already exist"
//             })
//         }
//         else {
//             let user = new User()
//             user.username = username
//             user.email = email
        
//             const salt = await bcryptjs.genSalt(10)
//             user.password = await bcryptjs.hash(password, salt)
    
//             let size = 200
    
//             user.avatar = "https://gravatar.com/avatar/?s=" + size + "&d=retro"
            
//             await user.save()
    
//             const payload = {
//                 user: {
//                     id: user.id
//                 }
//             }

//             jwt.sign(payload, process.env.jwtUsertoken, {expiresIn: 360000}, (err, token) => {
                
//                 if (err) throw err
                
//                 res.status(200).json({
//                     success: true,
//                     token:token
//                 })
//             })

        
//         }
        
//     }
//     catch (err)
//     {
//         console.log("error -> ",err);
//     }



// })


// router.post("/login", async (req, res, next) => {
    
//     const email = req.body.email
//     const pass = req.body.password
    
//     try {
//         let user=await User.findOne({email:email})
    
//         if (!user)
//         {
//             res.status(400).json({
//                 success: false,
//                 msg:"User Not Exist Please Register First"
//             })
//         }
//         else {
//             const ismatch = await bcryptjs.compare(pass, user.password)
//             if (!ismatch)
//             {
//                 res.status(400).json({
//                     success: false,
//                     msg:"Invalid Email or password"
//                 })
//             }
//             else {
//                 const payload = {
//                     user: {
//                         id:user.id
//                     }
//                 }
//                 jwt.sign(payload, process.env.jwtUsertoken, { expiresIn:36000}, (err, token) => {
//                     if (err) throw err
//                     res.status(200).json({
//                         success: true,
//                         msg: "User Logged in",
//                         token: token,
//                         user:user
                        
//                     })
//                 })
//             }
//         }
    
//     }
//     catch (err)
//     {
//         console.log("login err -> " + err);
//         res.status(500).json({
//             success: false,
//             msg:"Server error"
//         })
//     }

// })

// module.exports=router