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


// username: { type: String, required: true, unique: true, trim: true },
// email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// password: { type: String, required: true },   // will implement bcrypt 
// profile: {
//   firstName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   lastName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   age: {
//     type: Number,
//     min: 0
//   }
// }