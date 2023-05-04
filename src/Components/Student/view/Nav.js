import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../images/gbpu 1.png';
import '../../../styles/LoginForm.css';

function Nav (){
    const navigate = useNavigate();

    return (
        <div className="login-nav bg-light">
            <img className="me-2" src={logo}/>
            <div>Govind Ballabh Pant University of Agriculture and Technology<br/>
            Student Leave Management System
            </div>
        </div>
    );
}

export default Nav;