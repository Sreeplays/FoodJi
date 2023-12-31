import React, { useContext, useEffect, useState } from 'react'
import { DispatchContext, StateContext } from '../globalContext/AppProvider'
import GooglePayButton from '@google-pay/button-react';
const Checkout = () => {
  const cartDishes = useContext(StateContext);
  // const rmvDishes = useContext(DispatchContext)
  const cartAdded = cartDishes.cartItem.map((cartItem) => {
      return (
        <div className='border glass rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 backdrop-blur-xl' >
         
        <img src={cartItem.img} className='w-20 '></img>
          <div>
            <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-[#00df9a] py-2 my-2'>{cartItem.item}</h3>
            {/* <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p> */}
          
          </div>
        </div>
        
      )
      
  })
  return (
    <div id='1'>
      {cartAdded.length != 0 ? <div className='text-3xl font-serif rounded-md drop-shadow-md text-[#00df9a] text-center mb-14 '><h1 >Pay for the exclusious ones here !!</h1></div> : <div className='text-3xl font-serif rounded-md drop-shadow-md text-orange-500 text-center mb-14 '><h1 >Order something bruh!!</h1></div>}
      
    <div className='justify-start grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-7 pt-4 px-20'>

        {cartAdded}
    </div>
    <div className='text-3xl font-serif rounded-md drop-shadow-md text-[#00df9a] text-center mb-8'><h1 >Order and pay with Gpay.<p className='sm:text-base text-sm font-mono italic text-gray-400 duration-700'>(*A TEST Gpay API call feature.)</p></h1></div>
    <div className=' md:mx-[38.5rem] mb-10 text-center '>
     <GooglePayButton environment="TEST" paymentRequest={{
                                  apiVersion: 2,
                                  apiVersionMinor: 0,
                                  allowedPaymentMethods: [
                                    {
                                      type: 'CARD',
                                      parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                      },
                                      tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                          gateway: 'example',
                                          gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                      },
                                    },
                                  ],
                                  merchantInfo: {
                                    merchantId: '12345678901234567890',
                                    merchantName: 'Demo Merchant',
                                  },
                                  transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '100.00',
                                    currencyCode: 'USD',
                                    countryCode: 'US',
                                  },
                                }}
                                onLoadPaymentData={paymentRequest => {
                                  console.log('load payment data', paymentRequest);
                                  alert('Your order has been received. Will arive in a few mintues!!!')
                                  
                                }}/> 
      </div>

    
    </div>
  )
}

export default Checkout