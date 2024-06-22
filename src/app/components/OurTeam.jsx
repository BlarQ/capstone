'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


export default function OurTeam() {
    const flowInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    const flowTeam = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    return (
        <div className='mx-5 sm:mx-8'>
            <div className='flex flex-col items-center justify-center'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={flowInVariants}
                >
                    <h2 className='text-2xl sm:text-6xl font-bold text-center'>Our wonderful team</h2>
                    <p className='font-bold md:mx-10 text-sm md:text-base text-center my-6 text-[gray] lg:mx-[20%]'>Our C.E.O. drives innovation and excellence. Our Product Designer crafts unique, stylish items. Our Marketer connects our passion for fashion with our customers. Together, we create exceptional shopping experiences.</p>
                </motion.div>
            </div>


            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={flowInVariants}
            >
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:gap-4 gap-8 md:mx-4 my-8'>
                    <div className='lg:flex lg:flex-col hover:text-[#34c759] cursor-pointer duration-500 sm:grid sm:grid-cols-2 sm:items-center gap-4'>
                        <div>

                            <Image className='h-[40vh] sm:h-80 lg:h-[28rem]' src='/d1.jpg' alt='CEO of Trenluxe' width={390} height={350} />
                        </div>

                        <div className='md:ml-2'>
                            <p className='text-xl mt-2 font-bold text-[gray]'>FrontEnd Developer</p>
                            <h2 className='text-4xl md:my-4 my-1 font-bold'>Adedamola O.</h2>
                            <p className='font-bold text-[gray]'>Leads with a vision for innovation and excellence, guiding our brand to new heights.</p>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-col hover:text-[#34c759] cursor-pointer duration-500 sm:grid sm:grid-cols-2 sm:items-center gap-4'>
                        <div>

                            <Image className='h-[40vh] sm:h-80 lg:h-[28rem]' src='/d2.jpg' alt='CEO of Trenluxe' width={400} height={400} />
                        </div>

                        <div className='md:ml-2'>
                            <p className='text-xl mt-2 font-bold text-[gray]'>Project Supervisor</p>
                            <h2 className='text-4xl md:my-4 my-1 font-bold'>Franc Emepuo</h2>
                            <p className='font-bold text-[gray]'>He excels in creating intuitive, user-friendly designs that enhance user experience. His collaborative approach and technical expertise make him an invaluable asset to our team.</p>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-col hover:text-[#34c759] cursor-pointer duration-500 sm:grid sm:grid-cols-2 sm:items-center gap-4'>
                        <div>

                            <Image className='h-[40vh] sm:h-80 lg:h-[28rem]' src='/d3.jpg' alt='CEO of Trenluxe' width={400} height={400} />
                        </div>

                        <div className='md:ml-2'>
                            <p className='text-xl mt-2 font-bold text-[gray]'>Project Partner</p>
                            <h2 className='text-4xl md:my-4 my-1 font-bold'>Mikko</h2>
                            <p className='font-bold text-[gray]'>Expertly connects our fashion passion with our customers, making every shopping experience special.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
