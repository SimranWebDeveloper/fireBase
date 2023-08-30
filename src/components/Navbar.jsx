import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const Navbar = () => {
    const logOut = async() => {

        toast.success('Cixis islemi gerceklesdirirlir')
        await signOut(auth)
        
        setTimeout(() => {
            window.location='/'
        }, 3000);
        

        
    }
  return (
    <div className='navbar'>
        <div className="navbar-left">
            FIREBASE
        </div>
        <div className="navbar-right" onClick={logOut}>
            Logout
        </div>
    </div>
  )
}

export default Navbar