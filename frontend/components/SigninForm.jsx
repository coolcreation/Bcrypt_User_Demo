import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextNameContext } from '../context/TextNameContext';

export default function SigninForm() {

  const navigate = useNavigate();

  const { setTextName } = useContext(TextNameContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 // const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { username, password };

    try {
      const response = await fetch('http://localhost:8000/usersignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { _id } = await response.json(); // Get Mongo Object _id
      sessionStorage.setItem('_id', _id); 
      console.log('_id stored in sessionStorage:', _id);  
      
      setTextName("LOGGED IN!!!");

      navigate('/userdashboard');
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

          {/* <div className="mb-3">
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
              </label>
              </div>
          </div> */}

          <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">Sign in</button>
          </form>

          <div className='p-2 px-lg-5 my-3 d-flex col-10 col-md-8 col-lg-6 col-xl-4 justify-content-around align-items-center mx-auto'>
              <p className='w-100 m-0'>New around here?</p> 
              <Link to="/signup" className="btn btn-dark w-100 p-1">Sign up</Link>
          </div>

          <div className='p-2 px-lg-5 m-2 d-flex col-10 col-md-8 col-lg-6 col-xl-4 justify-content-around align-items-center mx-auto'>
              <p className='w-100 m-0'>Forgot Password?</p> 
              <a className="btn btn-dark w-100 p-1" href="#">Reset Password</a>
          </div>

     </div>
    </div> 
     
  )
}

