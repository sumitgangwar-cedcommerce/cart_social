import React, { useState } from 'react'
import './styles/Login.css'

const Login = (props) => {

    const [msg , setMessage] = useState('')

    const loginCheck = (e) =>{
        // e.preventDefault();
        // let email = document.getElementById('email').value;
        // let p = document.getElementById('password').value;
        // if(email === props.data[1] && p === props.data[2])  props.changePage('main')
        // else setMessage('*Bad Cerdentials')
        props.changePage('main')
    }

  return (
    <>
    <div className="Login_header">Welcome To Social Media Website</div>
    <div id="login">
        <h1>Login</h1>
        <div style={{color: 'red'}} id='err'>{msg}</div>
        <form onSubmit={loginCheck}>
        <table>
            <tbody>
                <tr>
                    <td>Email</td>
                    <td><input id='email' type="email" required></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input id='password' type="password" required></input></td>
                </tr>
                <tr>
                    <td colSpan={2}> <button type="submit">Submit</button> </td>
                </tr>
            </tbody>
        </table>
        </form>
        <h4>Not a member ? <button onClick={() => props.changePage('Register')}>Register</button></h4>
    </div></>
  )
}

export default Login