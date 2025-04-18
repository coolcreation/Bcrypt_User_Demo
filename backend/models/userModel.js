import mongoose from 'mongoose';

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }  // will implement bcrypt 
});
  //  rememberMe: { type: Boolean, required: true }

// Create Mongoose Model
const User = mongoose.model('User', userSchema);

export default User;


