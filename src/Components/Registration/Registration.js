import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../Firebase/Firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './Registration.css';


const Registration = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  
  const [error, setError] = useState({
    idenity: "",
    uniqueName: "",
    mail: "",
    pass: "",
    fireBaseError: "",
    successMsg: "",
  });
  
  

  // // Add Existing data into local storage.
  // useEffect(() => {
  //   localStorage.setItem('loginData', JSON.stringify(userData
  //     ))
  // }, [userData]);

  const submitHandler = (e) => {
    e.preventDefault();
    const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //  Full Name.
    if (userData.fullname == "") {
      setError((prevState) => ({
        ...prevState,
        idenity: 'Input value is empty',
      }))
    } else if (/[^a-zA-Z\s]/.test(userData.fullname)) {
      setError((prevState) => ({
        ...prevState,
        idenity: 'Input contains non-alphabetic characters.',
      }
      ));
    } else {
      setError((prevState) => ({
        ...prevState,
        idenity: '',
      }));
    }

    // User Name.
    if (userData.username == "") {
      setError((prevState) => ({
        ...prevState,
        uniqueName: 'Input value is empty',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        uniqueName: "",
      }));
    }

    // Email.
    if (userData.email == "") {
      setError((prevState) => ({
        ...prevState,
        mail: 'Input value is empty.',
      }));
    } else if (!format.test(userData.email)) {
      setError((prevState) => ({
        ...prevState,
        mail: 'Please enter a valid Email.',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        mail: '',
      }));
    };

    // Password.
    if (userData.password === "") {
      setError((prevState) => ({
        ...prevState,
        pass: 'Input value is empty',
      }));
    } else if (userData.password.length < 8) {
      setError((prevState) => ({
        ...prevState,
        pass: 'Enter password more than 8 words',
      }));
    } else if (userData.password.length > 12) {
      setError((prevState) => ({
        ...prevState,
        pass: 'Enter password less than 12 words',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        pass: '',
      }));
    }
    
  // Checked is every string value of userData is empty
    let isUserDataEmpty = Object.values(userData).every(value => value === "");
    console.log(isUserDataEmpty);

    if(!isUserDataEmpty) {

    // Converted Initial userData of objects converted to string for firebase authentication.
    const stringUserData = {};
    Object.keys(userData).forEach((key) => {
      stringUserData[key] = String(userData[key]);
    });

    createUserWithEmailAndPassword(auth, stringUserData.email, stringUserData.password) 
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      updateProfile(user,{
        displayName: userData.fullname,
      })
      
      navigate("/login")
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      
      setError((prevState) => ({
        ...prevState,
        FirebaseError: errorMessage,
      }))
      console.log(errorCode);
     
    })} else {
      return console.log("");
    }
    
    
    
  
    // localStorage.setItem('loginData', JSON.stringify(userData));
  }


  return (
    <div className='registration'>
      <form className='userdetails' onSubmit={submitHandler}>

        <h1>Create Account</h1>

        <div>
          <input type='text' placeholder='Enter Full Name Here' name='fullname' value={userData.fullname} onChange={(e) => setUserData({
            ...userData, [e.target.name]: [e.target.value],
          })} />
          {<p className="error">{error.idenity}</p>}
        </div>

        <div>
          <input type='text' placeholder='Enter Username Here' name='username' value={userData.username} onChange={(e) => setUserData({
            ...userData, [e.target.name]: [e.target.value]
          })} />
          {<p className="error">{error.uniqueName}</p>}
        </div>

        <div>
          <input type='email' placeholder='Enter Email Here' name='email' value={userData.email} onChange={(e) => setUserData({
            ...userData, [e.target.name]: [e.target.value]
          })} />
          {<p className="error">{error.mail}</p>}
        </div>

        <div>
          <input type='password' placeholder='Enter Password Here' name='password' value={userData.password} onChange={(e) => setUserData({
            ...userData, [e.target.name]: [e.target.value]
          })} />
          {<p className="error">{error.pass}</p>}
        </div>

        <div>
        <input type='password' placeholder='Confirm Password' name='conformPassword' value={userData.conformpassword} onChange={(e) => setUserData({
          ...userData, [e.target.conformpassword]: [e.target.value]
        })} />
        </div>

        <div>
        {<p className="error">{error.fireBaseError}</p>}
        {<p className="error">{error.successMsg}</p>}
        </div>

        <button type='submit' className='btn'>Sign Up</button>
        
        <div className='below'>
              <h4>Already have an Account. <Link to='/login' className='sign-btn'>Login</Link></h4>
            </div>
      </form>
    </div>
  )
}

export default Registration;