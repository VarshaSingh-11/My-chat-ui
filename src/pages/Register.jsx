import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,db,storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
 


    return (
  <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'>Axon Chat</span>
        
        <span className='title'>Register</span>
        <form>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email' />
            <input type ="password" placeholder='password'/>
          <input style={{display: "none"}} type ="file" id="file"/>
          <label htmlFor = "file">
        <img src={Add} alt=""/>
        <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          <span> Something went wrong</span>
        </form>
        <p>You do have an account ? Login</p>
    </div>
  </div>
    );
  }
  
  export default Register;