### Using Bcrypt with MongoDB and React   
---   

**This project requires NPM and Node version 18 LTS or above ( https://nodejs.org/en/download )**  
```sh
# To see if you already have Node.js and NPM installed and to check the installed version
node -v
npm -v
```
---

**1. Clone repo**  
```sh
git clone <repository_url>
```


**2. Create .env file in backend root, and included these 2 lines:**
```sh
PORT=8000
URL=Your_username_and_password_mongodb_connection_string
```


**3. For frontend React using Vite, from the root of JoiDemo:**
```sh
cd frontend
npm install      # installs node modules as we don't upload those to Github
npm run dev
# React/Vite server on: http://localhost:5173/
```

 
**4. For backend Express, from the root of JoiDemo:**


```sh
cd backend
npm install
npm start
# Nodemon package listens to changes on server.js on: http://localhost:5000/
```


**There's a fake admin user in `server.js` that reads from `admin_user.json` that can be used for Seed data** 

**Otherwise, just sign-up and create an account!**