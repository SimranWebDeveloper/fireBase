
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useState,useEffect } from 'react'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'




const App = () => {
  const[users,setUsers]=useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUsers(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[])

  return (
    <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {users?. accessToken && <Navbar/> } 
      <Routes>
      <Route path='/' element={<Auth/>} />
        <Route path='/dashboard' element={<Home users={users}/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
