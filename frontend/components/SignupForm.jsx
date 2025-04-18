import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { username, password };

    try {
      const response = await fetch('http://localhost:8000/usersignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`); 
      }
         

      const result = await response.json();
      console.log('Server response:', result);

      navigate(`/signin?signupSuccess=true&username=${encodeURIComponent(username)}`);
      setUsername('');
      setPassword('');

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (

    <div className="main">
      <div className="container">

          <form onSubmit={handleSubmit} className="p-2 my-3 col-11 col-md-9 col-lg-5 col-xl-4 mx-auto">
          <div className="mb-3">
              <label htmlFor="Username" className="form-label fw-bold">Username</label>
              <input type="text" className="form-control" id="Username" placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>

          <div className="mb-3">
              <label htmlFor="Password" className="form-label fw-bold">Password</label>
              <input type="password" className="form-control" id="Password" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3 mb-2 fs-5">Create account</button>
          </form>

          <div className='p-2 px-lg-5 my-3 d-flex flex-column flex-lg-row gap-2 gap-lg-4 col-10 col-md-8 col-lg-6 col-xl-4 justify-content-around align-items-center mx-auto'>
              <p className='w-100 m-0 text-center'>Already have an account?</p> 
              <Link to="/signin" className="btn btn-dark w-100 py-1 px-0 m-0">Sign in</Link>
          </div>

      </div>
    </div> 
     
  )
}

