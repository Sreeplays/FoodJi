import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import Typed from 'react-typed'
import {GoogleButton} from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../FireBase-Data-Config/AuthContext'
import { Helmet } from 'react-helmet'
const LoginSignup = () => {
  const { googleSignIn, user } = UserAuth();
  let navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]); 

  return (
    <div className=' pt-14 '>
      <Helmet>
        <title>Foodjii | Home</title>
      </Helmet>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[#00df9a] sm:text-5xl text-4xl md:py-6 font-sans font-extrabold hover:tracking-widest duration-700 pb-4 pt-16 mt-0 relative'><Typed strings={['F o o d J i ! ! !']} typeSpeed={60}/></h1>
        <p className='sm:text-xl text-lg font-mono font-semibold text-gray-400 hover:text-[#00df9a] duration-700'><Typed strings={['Order', '"Ding-Dong" 🔔', 'Relax & Eat', 'Enjoy']} typeSpeed={40} backSpeed={30} loop/></p>
        <hr className='mt-14 border-black'/>
        <p className='sm:text-base text-sm font-mono italic text-gray-400 duration-700'>*A Prototype food ordering website - author <a href="https://github.com/Sreeplays" className=' underline decoration-slice decoration-[#00df9a]'>@Sreeplays</a></p>
      {/* Sign in with google button */}
      <div  >
        {!user ?
        <div className=' m-10 py-0.5 '><h1 className='text-center text-lg font-extrabold pt-16 text-amber-800 hover:text-[#00df9a] duration-700'>Sign In/Sign Up</h1>
        <Button color='secondary'><GoogleButton onClick={handleGoogleSignIn}/></Button> </div> : <div></div>}
      </div>
          
        </div>
      </div>

  )
}

export default LoginSignup