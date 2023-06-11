import React, { useState } from 'react'
import "./Register.css"
const Register = () => {

  const [details,setDetails]=useState({
		fullname:"",
		email:"",
	})

  const handleChange=(e)=>{
		const{name, value}= e.target;
		setDetails((prev)=>{
			return{...prev,[name]:value}
		})
	}

  const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(details);
	}

  return (
    <div className='Register'>		
        <form  onSubmit={handleSubmit}>
            <h2>REGISTER FOR FREE</h2>
            <input type='text' placeholder='Full name' name='fullname' onChange={handleChange}/>
            <input type='email' placeholder='abc@gmail.com' name='email' onChange={handleChange}/>
            <input type='password' placeholder=' Create Password' name='password'/>
            <input type='password' placeholder=' Confirm Password' name='confirmPassword'/>
            <button type='submit'>GET STARTED</button>
            
            {/* <button>BACK TO LOGIN</button> */}
        </form>
    </div>
  )
}

export default Register