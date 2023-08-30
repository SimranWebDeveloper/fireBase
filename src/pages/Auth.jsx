import React, { useState } from 'react'
import { auth } from '../firebase'
import { toast } from 'react-toastify'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const Auth = () => {
//google
  const provider = new GoogleAuthProvider();

  const[signUp,setSignUp]=useState(true)
  const[authData,setAuthData]=useState({email:'',password:''})

  const handleClick = (e) => {
    
    setAuthData({...authData, [e.target.name] : e.target.value })
  }

  const submitForm = async(e) => {
    e.preventDefault()
    if (signUp) {
      // Register
      try {
        const data=await createUserWithEmailAndPassword(auth, authData.email, authData.password)
        const user = data.user;
        if (user) {
          window.location='/dashboard'
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
    else{
      //Login
      try {
        const data=await signInWithEmailAndPassword(auth, authData.email, authData.password)
        const user = data.user;
        if (user) {
          window.location='/dashboard'
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

  }

  const googleLogin = async() => {
      try {
    
        const data=await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(data);
        const token = credential.accessToken;
        const user=data.user
        if (user) {
          window.location='/dashboard'
        }

      } catch (error) {
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(credential)
      }
  }

  return (
    <div className="aut-section py-5">
      <form onSubmit={submitForm}>
        <h3>{signUp? 'REGISTER' : 'LOGIN'}</h3>
        <input type="email"   name='email' value={auth.email} onChange={handleClick} placeholder='enter email'/><br />
        <input type="password"  name='password' value={auth.password} onChange={handleClick}  placeholder='enter password'/><br />
        <button onClick={googleLogin}>Google ile giris et</button>
        <p onClick={()=>setSignUp(!signUp)}>{signUp? 'Daha onceden kayit oldunuzmu ':'Kayit olmak isdiyorsun mu?'}</p>

        <button className=''>{signUp? 'Register' : 'Login'}</button>
      </form>
    </div>
  )
}

export default Auth