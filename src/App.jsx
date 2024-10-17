import {createContext,useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import React, {Suspense ,lazy} from 'react';
import { Route, Routes } from "react-router-dom";


const Login = lazy(()=>import('./components/Login'))
const Home = lazy(()=>import('./components/Home'))
const About = lazy(()=>import('./components/About'))
const Contact = lazy(()=>import('./components/Contact'))




export const ThemeContext = createContext();
export const UserContext = createContext();

function App() {
  const[theme, setTheme]= useState("linght");
  const[user, setUser]= useState([]);


  useEffect(()=>{
    if(localStorage.getItem('theme')){
      setTheme(localStorage.getItem('theme'))
    }
  },[])


  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header/>
        <div className='Main'>
          <Suspense fallback={<div>Loadding...</div>}>
                    <Routes>
                         <Route path='/' element={<Home></Home>}></Route>
                         <Route path='/about' element={<About></About>}></Route>
                         <Route path='/contact' element={<Contact/>}></Route>
                         <Route path='/login' element={<Login/>}></Route>
                    </Routes>
          </Suspense>
        </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
    </>
  )
}

export default App
