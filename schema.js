const mongoose = require('mongoose');


const userPostSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    
  },
  lastName: {
    type: String,
   
  },
  email:{
type:String,
unique:true,
required:true,

  },
password:{
type:Number,
required:true,
},
 currency:{
  type:String,
  default:'IND',
 },
 monthlyBudget:{
type:Number,
default:0

 },
 categories: { 
  type: [String],
   default: ['Food', 'Transport', 'Bills', 'Entertainment']
   },

}, {
  timestamps: true, 
});

module.exports = mongoose.model('Expense_Traker', userPostSchema);
