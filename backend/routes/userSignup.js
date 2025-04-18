import express from "express";
import bcrypt from "bcryptjs"  // Using bcryptjs (pure JavaScript implementation) npm install bcryptjs
const saltRounds = 10; // Adjust the cost factor as needed
import User from "../models/userModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log('Request body:', req.body);
    try {
        const newUser = new User({ username, password });  
        await newUser.save();  
        res.status(201).json(newUser);  
    } catch (err) {
        console.log(`Router.POST --->  ${err.message}`);
        res.status(500).json({ code: 500, status: "Error saving User" });
    }

});

export default router;


// try {
//     // Generate a salt and hash the password
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Store the username and hashed password in the database
//     // Example: await User.create({ username, password: hashedPassword });

//     res.status(201).send('User registered successfully.');
//     console.log('Received login data:', { username, password });
// } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).send('Internal server error.');
// }
    