import React from 'react'
import './styles/Register.css'

const Register = (props) => {

    const submitHandler = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        props.sndName([name, email, password])
        props.changePage('Login')
    }

  return (
    <>
    <div className="Login_header">Welcome To Social Media Website</div>
    <div id="register">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
        <table>
            <tbody>
                <tr>
                    <td>Full Name</td>
                    <td><input id='name' type='text' required></input></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input id='email' type='email' required></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input id='password' type='password' required></input></td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td><input id='mobile' placeholder='##########' type='tel' pattern='[0-9]{10}' required></input></td>
                </tr>
                <tr>
                    <td>City</td>
                    <td><input id='city' type='text' required></input></td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td><input id='count' type='text' required></input></td>
                </tr>
                <tr>
                    <td>Pin Code</td>
                    <td><input type='tel' pattern='[0-9]{6}' placeholder='######' required></input> </td>
                </tr>
                <tr>
                    <td colSpan={2}> <button type='submit'>Submit</button> </td>
                </tr>
            </tbody>
        </table>
        </form>
        <h4>Already a member ? <button onClick={() => props.changePage('Login')}>Login</button></h4>
    </div></>
  )
}

export default Register