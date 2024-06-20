"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiMail } from "react-icons/hi";
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { MdEmojiEmotions } from 'react-icons/md';
import { PiChatTextFill, PiHandbagSimpleFill, PiTagFill } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

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
    <div id='cont'>
        <section className='flex flex-col sm:flex-row w-full justify-center items-start px-5 sm:px-10 sm:py-10 sm:space-x-10 space-y-14 sm:space-y-0'>
            <div className='sm:w-1/2'>
                <h1 className='text-4xl sm:text-7xl font-extrabold w-[90%]'>Get in touch with us today!</h1>

                <p className='py-5 font-semibold text-[gray]'>Discover the latest trends and exclusive styles at our fashion store. Whether you&apos;re looking for chic everyday wear, elegant evening outfits, or the perfect accessories to complete your look, we have it all. Our friendly and knowledgeable team is here to help you find exactly what you need. Visit us in-store or reach out to us online for personalized fashion advice and customer service. Elevate your wardrobe with our carefully curated collections and enjoy a shopping experience like no other.</p>

                <section className='space-y-4 sm:space-y-10'>
                  <div className='flex space-x-4 group cursor-pointer w-fit hover:translate-x-2 duration-500'>
                    <div className='bg-green-50 w-fit flex items-center justify-center p-4 sm:p-5 rounded-full'>
                      <HiMail className='text-4xl text-green-400'/>
                    </div>
                    <div className='font-bold text-2xl flex flex-col justify-between py-1'>
                      <h2 className='text-[gray] text-lg sm:text-xl'>EMAIL US</h2>
                      <Link href="mailto:collinsogunlala@gmail.com" className='group-hover:text-green-400 duration-500 transition-all text-xl sm:text-2xl'>contact@trendluxe.com</Link>
                    </div>
                  </div>
                  
                  <div className='flex space-x-4 group cursor-pointer w-fit hover:translate-x-2 duration-500'>
                    <div className='bg-blue-50 w-fit p-4 sm:p-5 rounded-full'>
                      <MdEmojiEmotions className='text-4xl text-blue-400'/>
                    </div>
                    <div className='font-bold text-2xl flex flex-col justify-between py-1'>
                      <h2 className='text-[gray] text-lg sm:text-xl'>CALL US</h2>
                      <Link href="tel:+2348174726892" className='group-hover:text-blue-400 duration-500 transition-all text-xl sm:text-2xl'>(234) 817 4726 892</Link>
                    </div>
                  </div>
                </section>
            </div>

            <div className='sm:w-1/2 w-full'>
              <form className='border-[1px] py-10 sm:py-20 px-5 sm:px-12 space-y-5 sm:space-y-10'>
                <div className='grid sm:grid-cols-2 grid-rows-2 gap-5 sm:gap-7'>
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="text" name="name" placeholder='Enter your name' />
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="email" name="email" placeholder='example@email.com' />
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="text" name="mobile" placeholder='(+234) 817 4726 892' />
                  <input className='h-11 rounded-full px-5 outline-none border-[1px] shadow-md placeholder:font-medium' type="text" name="service" placeholder='ex. Services' />
                </div>

                <div className='flex flex-col items-start space-y-5 sm:space-y-10'>
                  <textarea className='outline-none shadow-md border-[1px] rounded-xl min-h-36 sm:min-h-48 px-5 py-3 w-full' name="message" id="text" placeholder='Leave us a message...'></textarea>
                  <button className='bg-[#34c759] w-full sm:w-fit hover:scale-95 transition-all duration-300 py-3 px-5 rounded-full shadow-sm shadow-[#34c759] text-white font-semibold flex items-center justify-center'>Send Message
                    <FiArrowUpRight className='text-xl'/>
                  </button>
                </div>
              </form>
            </div>
        </section>

        <section className='sm:my-32 my-20'>
          <div className='flex flex-col justify-center items-center px-5 sm:px-10'>
            <h2 className='sm:text-6xl text-4xl font-bold my-4'>Reach us directly</h2>
            <p className='sm:w-1/2 w-full text-center font-semibold text-[gray]'>At TrendLuxe, we are dedicated to providing you with the best in fashion and customer service. Whether you have a question about our products, need assistance with your order, or have any other inquiries, our team is here to help.</p>

          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-5 sm:px-10 my-12'>
            <Link href="mailto:collinsogunlala@gmail.com" className='bg-orange-100 p-10 hover:scale-95 duration-300 w-full'>
              <div className='pb-20'>
                <div className='p-5 w-fit bg-white rounded-full'>
                  <PiHandbagSimpleFill className='text-5xl text-orange-400'/>
                </div>

                <h2 className='py-5 text-2xl font-bold'>Help & Support</h2>

                <p className='font-semibold text-[gray]'>For any general questions, order status, or assistance with our website, please reach out to our support team. We&#39;re here to ensure your shopping experience is seamless and enjoyable.</p>
              </div>

              <div className='flex justify-start items-center space-x-2'>
                <p className='font-medium'>help@trendluxe.com</p>

                <IoArrowForwardCircleOutline className='text-3xl'/>

              </div>
            </Link>

            <Link href="mailto:collinsogunlala@gmail.com" className='bg-pink-100 p-10 hover:scale-95 duration-300 w-full'>
              <div className='pb-20'>
                <div className='p-5 w-fit bg-white rounded-full'>
                  <PiTagFill className='text-5xl text-pink-400'/>
                </div>

                <h2 className='py-5 text-2xl font-bold'>Sales</h2>

                <p className='font-semibold text-[gray]'>Interested in bulk orders, partnership opportunities, or have questions about our latest collections? Contact our sales team for more information.</p>
              </div>

              <div className='flex justify-start items-center space-x-2'>
                <p className='font-medium'>sales@trendluxe.com</p>

                <IoArrowForwardCircleOutline className='text-3xl'/>

              </div>
            </Link>

            <Link href="whatsapp://send?phone=2348174726892&text=Hello!" className='bg-green-100 p-10 hover:scale-95 duration-300 w-full'>
              <div className='pb-20'>
                <div className='p-5 w-fit bg-white rounded-full'>
                  <PiChatTextFill className='text-5xl text-green-400'/>
                </div>

                <h2 className='py-5 text-2xl font-bold'>Technical Support</h2>

                <p className='font-semibold text-[gray]'>Experiencing technical issues with our website or need help with your online account? Our technical support team is ready to assist you.</p>
              </div>

              <div className='flex justify-start items-center space-x-2'>
                <p className='font-medium'>Chat with us</p>

                <IoArrowForwardCircleOutline className='text-3xl'/>

              </div>
            </Link>
            
          </div>
        </section>

        <section className='sm:px-10 px-5 w-full flex flex-col sm:flex-row items-start my-10 gap-y-10 gap-x-5'>
          <div className='sm:w-[40%] sm:sticky sm:top-36'>
            <div className='sm:w-[90%]'>
              <h2 className='text-4xl text-center sm:text-left sm:text-6xl font-bold'>Frequently asked questions</h2>
              <p className='py-5 font-semibold text-center sm:text-left text-[gray] sm:w-4/5'>Welcome to TrendLuxe&#39;s FAQ section! Here, you&#39;ll find answers to the most common questions about our products, services, and policies.</p>

              <Link className='flex justify-center items-center sm:justify-start py-2 px-4 bg-[#34c759] text-white font-semibold rounded-full gap-x-1 w-full sm:w-fit' href='#cont'>Contact
                <FiArrowUpRight />
              </Link>
            </div>
          </div>

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
        </section>
    </div>
  )
}
