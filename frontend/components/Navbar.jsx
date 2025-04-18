import React from 'react';
import { Link } from 'react-router-dom';
import ItemSearch from './ItemSearch';
import LoginOrOutButton from './LoginLogoutButton'

export default function Navbar() {

  return (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg px-2 px-lg-4 py-lg-1">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={'./coffee_shop_logo_white.jpg'} alt="" width='80'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mt-2 mb-lg-0 mt-lg-0 w-100 gap-lg-3">

                    <li className="w-100">
                        <ItemSearch /> 
                    </li>

                    <li class="col-11 col-md-9 ms-lg-auto mx-auto mx-lg-0 col-lg-auto">
                        <Link to="/userdashboard" className="nav-link">User Dashboard</Link>
                    </li>

                    <li className="dropdown col-11 col-md-9 ms-lg-auto mx-auto mx-lg-0 col-lg-auto">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu my-3 rounded-0">
                        <li><Link to="/" className="dropdown-item">Home Page</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link to="/signin" className="dropdown-item">Signin Page</Link></li>
                        <li><Link to="/signup" className="dropdown-item">Signup Page</Link></li>
                        <li><Link to="/userdashboard" className="dropdown-item">User Dashboard</Link></li>
                    </ul>
                    </li>

                    <li className="col-11 col-md-9 mx-auto mx-lg-0 col-lg-auto"> 
                          <LoginOrOutButton />
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}
