import React from 'react'
import Header from './Header'

const login = () => {
  return (
    <>
      <Header/>
      <div className="absolute">
       <img className='z-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
       alt="background"
       />
      </div>
      <form className="w-3/12 absolute mx-auto my-36 right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        <p className='py-4'>New to Netflix? Sign Up Now</p>
      </form>
      </>
    
  )
}

export default login