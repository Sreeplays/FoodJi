import React, { useState } from 'react'
import Contactimg from '../assets/contactNow.png'
import emailjs from '@emailjs/browser'
import { Button, Form, Input, Label } from 'reactstrap';
const Contact = () => {
  const [msg, setMsg] = useState(false)
  const sendEmail =(e) => {
    e.preventDefault();
    emailjs.sendForm('service_tpcnr0n', 'template_okrpsag', e.target, 'RY1AxGngOMrpk1wSq')
                  .then((result) => {
                  console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
    e.target.reset();
    setMsg(true);          
};
  return (
    <div class="BG-IMG" >
      <img className='w-full h-48 object-cover mix-blend-multiply' src={Contactimg} alt="/" />
      <h1 className='text-[#00df9a] text-center text-5xl font-extrabold font-serif'>Contact Us</h1>
      <p className=' text-center text-lg font-extralight font-sans pt-10'>Have any querie, doubts, or any issues OR payment is not getting tranfered, please feel FREE to call us</p>
      <div>
        
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <Form onSubmit={sendEmail}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                
                <div className="relative">
                  
                  <label for="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border-[3px] border-gray-300 focus:border-indigo-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border-[3px] border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border-[3px] border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-black bg-[#00df9a] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >
                  Submit
                </button>
              </div>
              <div className='row-auto '>{msg ? <p className='text-[#00df9a] font-semibold duration-200 after:disabled'>Message successfully sent. We will try our best to assist you ASAP</p> : null}</div>
            </div>
            </Form>
          </div>
        </div>
      </section>
      
    </div>
    </div>
  )
}

export default Contact