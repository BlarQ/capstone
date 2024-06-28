'use client'
import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'

export default function Page() {
    const [openFaq, setOpenFaq] = useState(false)
  const [openFaq1, setOpenFaq1] = useState(false)
  const [openFaq2, setOpenFaq2] = useState(false)
  const [openFaq3, setOpenFaq3] = useState(false)
  const [transform, setTransform] = useState(false)
  const [transform1, setTransform1] = useState(false)
  const [transform2, setTransform2] = useState(false)
  const [transform3, setTransform3] = useState(false)

  //Open and Close FAQs
  function showFaq(){
    setOpenFaq(!openFaq)
    setTransform(!transform)
  }
  function showFaq1(){
    setOpenFaq1(!openFaq1)
    setTransform1(!transform1)
  }
  function showFaq2(){
    setOpenFaq2(!openFaq2)
    setTransform2(!transform2)
  }
  function showFaq3(){
    setOpenFaq3(!openFaq3)
    setTransform3(!transform3)
  }
  return (
    <div>
        <div className='w-full h-[60vh] bg-[#ecfcec] flex flex-col justify-center items-center'>
            <h1 className='sm:text-7xl text-4xl text-center font-bold text-[#2e4053] py-4'>Frequently Asked Questions</h1>
            <p className='text-xl sm:w-[60%] text-center font-semibold text-[gray] px-4 sm:px-10'>Welcome to TrendLuxe&#39;s FAQ section! Here, you&#39;ll find answers to the most common questions about our products, services, and policies.</p>
        </div>

        <div className='py-20 px-5 flex justify-center items-center text-[#2e4053]'>
        <div className='text-2xl sm:text-4xl font-bold divide-y-2 border-y-2 sm:w-[60%]'>
            <div className='hover:pl-1 duration-300'>
              <div className='py-10 px-2 flex justify-between items-center cursor-pointer' onClick={showFaq}>
                <p>How do I place an order?</p>
                <div className='text-3xl'>
                  <GoPlus className={`${transform ? 'rounded-full rotate-45 text-white border-green-400 bg-green-400 font-bold duration-300' : 'duration-300 bg-[whitesmoke] shadow-sm border-2 rounded-full' }`}/>
                </div>
              </div>
              {openFaq && 
                <div>
                  <p className='text-base font-semibold px-2 pb-10 selection:ease-in-out duration-700'>Placing an order with TrendLuxe is easy! Simply browse our online store, select your desired items, choose your size and color, and click &quot;Add to Cart.&quot; Once you&#39;re ready, proceed to checkout and follow the instructions to complete your purchase.</p>
                </div>
              }
              
            </div>
            <div className='hover:pl-1 duration-300'>
              <div className='py-10 px-2 flex justify-between items-center cursor-pointer group' onClick={showFaq1}>
                <p>What payment methods do you accept?</p>
                <div className='text-3xl'>
                  <GoPlus className={`${transform1 ? 'rounded-full rotate-45 text-white border-green-400 bg-green-400 font-bold duration-300' : 'duration-300 bg-[whitesmoke] shadow-sm border-2 rounded-full' }`}/>
                </div>
              </div>
              {openFaq1 && 
                <div>
                  <p className='text-base font-semibold px-2 pb-10 selection:ease-in-out duration-700'>We accept a variety of payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.</p>
                </div>
              }
              
            </div>
            <div className='hover:pl-1 duration-300'>
              <div className='py-10 px-2 flex justify-between items-center cursor-pointer group' onClick={showFaq2}>
                <p>How can I track my order?</p>
                <div className='text-3xl'>
                  <GoPlus className={`${transform2 ? 'rounded-full rotate-45 text-white border-green-400 bg-green-400 font-bold duration-300' : 'duration-300 bg-[whitesmoke] shadow-sm border-2 rounded-full' }`}/>
                </div>
              </div>
              {openFaq2 && 
                <div>
                  <p className='text-base font-semibold px-2 pb-10 selection:ease-in-out duration-700'>After placing your order, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website under the &quot;Track Order&quot; section.</p>
                </div>
              }
              
            </div>
            <div className='hover:pl-1 duration-300'>
              <div className='py-10 px-2 flex justify-between items-center cursor-pointer group' onClick={showFaq3}>
                <p>What is your return policy?</p>
                <div className='text-3xl'>
                  <GoPlus className={`${transform3 ? 'rounded-full rotate-45 text-white border-green-400 bg-green-400 font-bold duration-300' : 'duration-300 bg-[whitesmoke] shadow-sm border-2 rounded-full' }`}/>
                </div>
              </div>
              {openFaq3 && 
                <div>
                  <p className='text-base font-semibold px-2 pb-10 selection:ease-in-out duration-700'>We offer a 30-day return policy on all our products. If you&apos;re not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange. Please ensure the items are in their original condition with all tags attached.</p>
                </div>
              }
              
            </div>
          </div>
        </div>
    </div>
  )
}
