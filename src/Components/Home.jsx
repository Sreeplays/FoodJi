import React, { useState } from 'react'
import { Button, Card, Col, Container, Row, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import Typed from 'react-typed'

const LoginSignup = () => {

  return (
    <div className='text-white pt-14'>
      <div className='max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='sm:text-5xl text-4xl md:py-6 font-sans font-extrabold hover:tracking-widest duration-700 pb-4 pt-16 mt-0'><Typed strings={['F o o d J i ! ! !']} typeSpeed={60}/></h1>
        <p className='sm:text-xl text-lg font-mono font-semibold text-gray-400 hover:text-[#00df9a] duration-700'><Typed strings={['Order', '"Ding-Dong" 🔔', 'Relax & Eat', 'Enjoy']} typeSpeed={40} backSpeed={30} loop/></p>
        
          
        </div>
      </div>

  )
}

export default LoginSignup