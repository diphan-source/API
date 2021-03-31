import {Schema} from 'mongoose'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const User= new Schema({
    username:{
        type:String,
        required:true,
        min:6
    },
    password:{
        type:String,
        required:true,
        set: (Value)=>{ return bcrypt.hashSync(value,10)
        
    },
    min: 5
   }
})

export default User=mongoose.model("User",User)