import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;
    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  }
  return (
    <>
      <Header/>
      <div className="absolute">
       <img className='z-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
       alt="background"
       />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}className="w-3/12 absolute mx-auto my-36 right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm? "Sign In" : "Sign Up"}
          </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered. Sign In now."}          
        </p>
      </form>
      </>
    
  )
}

export default Login