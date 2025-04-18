
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js"; // Import database connection
import userSignin from "./routes/userSignin.js"
import userSignup from "./routes/userSignup.js"
import userHomePage from "./routes/userHomePage.js";

import { readFile } from 'fs/promises';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const app = express();
  
app.use(cors());
app.use(express.json());
  
app.use("/usersignin", userSignin)
app.use("/usersignup", userSignup)
app.use("/userdashboard", userHomePage)



console.log("########################@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################");

// Connect to MongoDB
connectToDatabase();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 


// SEED DATA FOR FAKE ADMIN (no bcrypt yet!)
let adminUser = async () => {
    try{
        const result = JSON.parse(await readFile('admin_user.json', "utf8"));
        console.log(result)
    } catch (error) {
        console.log('There was an error', error);
    }
}
adminUser()
