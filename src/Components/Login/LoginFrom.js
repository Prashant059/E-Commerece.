import React, { useState } from 'react'
import './LoginFrom.css'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase-config'
import { useNavigate } from 'react-router-dom'

const LoginFrom = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in 
        // const user = userCredential.user;
        // console.log(user);
        // ...
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  return (
    <div className='container-fluid from-container'>
        <form className='container login' onSubmit={submitHandler}>
            <h1>Login</h1>

            <div>
              <div className='icons'>
                <FaUserAlt size={39} style={{padding: '5px', color: '#fff' }}/>
              </div>
             <input type='text' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <div className='icons'>
                 <FaLock size={39} style={{padding: '5px', color: '#fff' }}/>
               </div>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className='btn'>login</button>

           

            <div className='below'>
              <h4>Do you have an Account. <Link to='/registration' className='sign-btn'>Sign up</Link></h4>
            </div>

        </form>
    </div>
  );
}

export default LoginFrom