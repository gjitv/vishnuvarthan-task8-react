import React, { useState } from 'react'
import "./Login.css"
const Login=(props)=>{

	const [details,setDetails]=useState({
		name:"",
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

	return(
		<div className='Login'>		
			<form onSubmit={handleSubmit}>
				<h2>Login to Continue</h2>
				<input type='text' placeholder='Your name' name='name' onChange={handleChange}/>
				<input type='email' placeholder='abc@gmail.com' name='email' onChange={handleChange}/>
				<input type='password' placeholder='Password' name='password'/>
				<button type='submit' >LOGIN</button>
				<p onClick={()=>props.onFormSwitch("register")} >Don't have an account <span> Register</span></p>
			</form>
		</div>
	)
}


export default Login    