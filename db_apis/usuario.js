const mongoose = require('../config/database');

const UserSchema = new mongoose.Schema({
  login:{
    type: String,
    unique: true, 
    required: true,   
  },
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password:{
    type: String,
    select: false,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
  avaliations:[{
    movie: String,
    nota: Number
    }],
  favorites:[],
  friends:[],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;