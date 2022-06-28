const express=require("express")
const morgan = require("morgan")
const dotenv=require("dotenv")
const connectDb=require("./config/db")
dotenv.config({
    path:"./config/config.env"
})

const app = express()

//json parser
app.use(express.json([]))
app.use(express.json({
    extended:true
}))

app.use(morgan('dev'))



connectDb()


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        msg:"Every thing is fine"
    })
})

// app.use('/api/todo/auth',require('./routes/user'))



const port=process.env.PORT ||3000

app.listen(port, console.log(`server is started on port ${port}`))

