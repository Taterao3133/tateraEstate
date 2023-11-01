import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoute from './routes/aut_route.js'
import userRouter from './routes/user_route.js'
import cookieParser from "cookie-parser";
import listingRouter from './routes/listing.route.js'
//  import path from 'path';
import cors from 'cors'; 

dotenv.config()


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB..')
}).catch((err)=>{
    console.log('failed to connect mongoose')
})
//  const __dirname = path.resolve();
const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('server is running on 3000 port')
})
app.use(cors());

app.use(cookieParser());

app.use('/server-side/auth',authRoute)
app.use('/server-side/user',userRouter)
app.use('/server-side/listing', listingRouter);

//  app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
//   })

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    const message= err.message || 'internal server error';
    
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message,
        
    });
});


