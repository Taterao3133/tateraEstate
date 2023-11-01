import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        
    },
    email:{
        type:String,
        require:true,
        unique:true,

    },
    password:{
        type:String,
        require:true,
       

    },
    avatar:{
        type:String,
        default:"https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg",
    },
},{timestamps:true});  //

const User=mongoose.model('User', userSchema)

export default User;





