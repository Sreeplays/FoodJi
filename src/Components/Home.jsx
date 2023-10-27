import React, { useState } from 'react'
import { Button, Card, Col, Container, Row, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import Typed from 'react-typed'

const LoginSignup = () => {

  return (
    <div className='text-white pt-14'>
      <div className='max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='sm:text-5xl text-4xl md:py-6 font-sans font-extrabold hover:tracking-widest duration-700 pb-4'><Typed strings={['F o o d J i ! ! !']} typeSpeed={60}/></h1>
        <p className='sm:text-xl text-lg font-mono font-semibold text-gray-400 hover:text-[#00df9a] duration-700'><Typed strings={['Order', '"Ding-Dong" 🔔', 'Relax & Eat', 'Enjoy']} typeSpeed={40} backSpeed={30} loop/></p>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3 pt-4'>
          
          <div>
          <p className='sm:text-lg font-mono font-semibold hover:text-[#00df9a] duration-1000 '>
            LOGIN
          </p>
          <Container className='bg-white bg-opacity-5 relative shadow-5xl rounded-xl border border-r-0 border-b-0 text-black py-6 '>
            <Row>
              <Col sm={{ size:6,offset:3}}>
                <Card inverse className='text-black'>
                  <CardHeader className='md:pb-5 pb-3'>
                    Sign in with Username and password 
                  </CardHeader>

                <CardBody>
              {/* creating form */}
                <Form>

                {/* Name field */}
                  <FormGroup>
                    <Label for='username' className='br-1 border-gray-400'>Enter Username</Label>
                    <Input type='text' placeholder='Enter Your Name' id='username' className='ml-4 px-2 py-1 mb-4 rounded-lg text-black'/>
                  </FormGroup>
                {/* Password field */}
                  <FormGroup>
                    <Label for='password'>Enter password</Label>
                    <Input type='password' placeholder='Enter password' id='password' className='ml-5 px-2 py-1 rounded-lg text-black'/>
                    
                  </FormGroup>

                    <Container className='text-center'>

                     <Button outline color='dark' className='border bg-yellow-200 px-3 py-2 rounded-lg text-black'>Login</Button>
                     <Button color='primary' outline type='reset' className='ml-5 border bg-red-500 mt-4 px-3 py-2 rounded-lg'>Reset</Button>
                    </Container>

                </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
     {/* Login form content end */}
          </div>
          <div>
          <p className='sm:text-lg font-mono font-semibold hover:text-[#00df9a] duration-1000'>
            SIGN UP 
          </p>
          <Container className='bg-white bg-opacity-10 relative shadow-5xl rounded-xl text-black py-6'>
            <Row>
              <Col sm={{ size:6,offset:3}}>
                <Card inverse className='text-black'>
                  <CardHeader className='md:pb-5 pb-3'>
                    Fill the below information to sign up
                  </CardHeader>

                <CardBody>
              {/* creating form */}
                <Form>

                {/* Name field */}
                  <FormGroup>
                    <Label for='username' className='br-1 border-gray-400'>Enter Username</Label>
                    <Input type='text' placeholder='Enter Your Name' id='username' className='ml-4 px-2 py-1 mb-4 rounded-lg text-black'/>
                  </FormGroup>
                  <FormGroup>
                    <Label for='email' className='br-1 border-gray-400'>Enter Email</Label>
                    <Input type='email' placeholder='Enter Your Email' id='username' className='ml-12 px-2 py-1 mb-4 rounded-lg text-black'/>
                  </FormGroup>
                {/* Password field */}
                  <FormGroup>
                    <Label for='password'>Enter password</Label>
                    <Input type='password' placeholder='Enter password' id='password' className='ml-5 px-2 py-1 rounded-lg text-black'/>
                    
                  </FormGroup>

                    <Container className='text-center'>

                     <Button outline color='dark' className='border bg-yellow-200 px-3 py-2 rounded-lg text-black'>Register</Button>
                     <Button color='primary' outline type='reset' className='ml-5 border bg-red-500 mt-4 px-3 py-2 rounded-lg'>Reset</Button>
                    </Container>

                </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup