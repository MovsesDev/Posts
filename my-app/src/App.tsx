import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AddPostPage from './pages/AddPostPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const  App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/addPost' element={<AddPostPage/>}/>
      <Route path='/editPost' element={<EditPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;