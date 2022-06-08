import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import './App.scss'
import MyPostPage from './pages/MyPostPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { useAppSelector } from './hooks';

const  App: React.FC = () => {
  return (
    <div className='App'>
      {/* {isAuth ? <div>You logged in</div> : <div>No</div>} */}
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/myPosts' element={<MyPostPage/>}/>
      <Route path='/editPost' element={<EditPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;