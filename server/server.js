const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const regRouter = require('./Routes/registerRouter');
const loginRouter = require('./Routes/loginrouter');
const productRouter = require('./Routes/productRouter');


const app=express()
mongoose.connect("mongodb+srv://sradha1705:7IHWvZvRFPKYX6aq@cluster0.j6gur1b.mongodb.net/project").then(() => {
    console.log("Database connected successfully");
    
}).catch((error) => {
    console.log(error);

})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/register',regRouter)
app.use('/login',loginRouter)
app.use('/product',productRouter)

app.listen(5000, () => {
    console.log('server started at http//localhost:5000');
})



