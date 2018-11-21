const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let todoSchema=new Schema({
    taskname:{type: String,required:true},
    done:{ type: Boolean ,default:false},
});


let userSchema=new Schema({
    outlookId: {type: String,required:true},
    username:{type: String,required:false},
    email:{type: String,required:false},
    tasks:[todoSchema]

});




const User=mongoose.model('user',userSchema);

module.exports=User;