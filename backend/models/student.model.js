const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    studentid:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    departmentid:{
        type:String,
        required:true
    },
    enroll:{
        type:String,
        required:true
    },
    graduationyear:{
        type:String,
        required:true
    }
})