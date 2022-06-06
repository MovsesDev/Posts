import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import './App.scss'
import MyPostPage from './pages/MyPostPage';

const  App: React.FC = () => {
  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/myPosts' element={<MyPostPage/>}/>
      <Route path='/editPost' element={<EditPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;