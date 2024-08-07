'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


export default function ValueGuide() {
    const flowInVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={flowInVariants}
        >
            <div className='md:grid flex flex-col-reverse md:grid-cols-2 px-5 my-16 sm:my-32  items-center'>
                <div>
                    <Image className='py-4 md:py-0' src='/valueimg.jpg' alt='Shoe, glass, bag, belt and cloth on a gray rug' width={600} height={400} />
                </div>

                <div>
                    <h2 className='md:text-6xl text-4xl font-bold sm:w-[80%] w-[70%]'>The value that guide us</h2>
                    <p className='my-4 text-sm md:text-base font-bold text-[gray]'>At the heart of our brand are values that drive everything we do. We prioritize quality and craftsmanship, ensuring every product meets the highest standards. Innovation fuels our creativity, inspiring us to set trends rather than follow them. Sustainability is key, and we are committed to ethical practices that protect our planet.</p>

                    <div>
                        <div className='flex flex-col sm:flex-row sm:flex sm:justify-center items-start sm:items-center mt-4 sm:mt-0'>
                            <div className='sm:my-4 my-2 sm:mr-4'>

                                <Image className='md:max-h-28 max-h-12 md:max-w-28 max-w-12' src='/value1.svg' alt='' width={200} height={200} />
                            </div>

                            <dl>
                                <dt className='text-2xl font-bold gap-y-4'>Exceptional Quality</dt>
                                <dd className='text-sm md:text-base text-[gray] mt-2'>Every item in our collection is crafted with meticulous attention to detail, ensuring the highest standards of quality and durability.</dd>
                            </dl>

                        </div>
                        <div className='flex flex-col sm:flex-row sm:flex sm:justify-center items-start sm:items-center mt-4 sm:mt-0'>
                            <div className='sm:my-4 my-2 sm:mr-4'>

                                <Image className='md:max-h-28 max-h-12 md:max-w-28 max-w-12' src='/value2.svg' alt='' width={200} height={200} />
                            </div>

                            <dl>
                                <dt className='text-2xl font-bold gap-y-4'>Customer Satisfaction</dt>
                                <dd className='text-sm md:text-base text-[gray] mt-2'>Your happiness is our priority. We strive to provide an exceptional shopping experience, from easy navigation to excellent customer service.</dd>
                            </dl>

                        </div>
                        <div className='flex flex-col sm:flex-row sm:flex sm:justify-center items-start sm:items-center mt-4 sm:mt-0'>
                            <div className='sm:my-4 my-2 sm:mr-4'>

                                <Image className='md:max-h-28 max-h-12 md:max-w-28 max-w-12' src='/value3.svg' alt='' width={200} height={200} />
                            </div>

                            <dl>
                                <dt className='text-2xl font-bold gap-y-4'>Affordable Luxury</dt>
                                <dd className='text-sm md:text-base text-[gray] mt-2'>We believe fashion should be accessible. Our products combine high-end aesthetics with affordable prices, giving you the best of both worlds.</dd>
                            </dl>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
