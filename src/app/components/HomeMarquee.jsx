import React from 'react'
import Marquee from 'react-fast-marquee'
import { LiaShoePrintsSolid } from "react-icons/lia";
import { RiShirtLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import { IoWatchOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser, MdVerifiedUser } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { motion } from 'framer-motion'


export const HomeMarquee = () => {
    const flowInVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <div className='bg-[#ffffff] relative z-[1]'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={flowInVariants}
            >
                <Marquee speed={30} pauseOnHover='true' autoFill='true'>
                    <div className='my-4 flex justify-center items-center gap-x-10'>
                        <div className='flex items-center justify-center font-bold'>
                            <LiaShoePrintsSolid className='text-3xl text-[#34c759]' />
                            <p className='text-[#2e4053]'>Trendy Footy</p>
                        </div>
                        <div className='flex items-center justify-center font-bold'>
                            <IoMdCard className='text-3xl text-[#34c759]' />
                            <p className='text-[#2e4053]'>100% Secured Payment</p>
                        </div>
                        <div className='flex items-center justify-center font-bold'>
                            <RiShirtLine className='text-3xl text-[#34c759]' />
                            <p className='text-[#2e4053]'>Top Classic Styles</p>
                        </div>
                        <div className='flex items-center justify-center font-bold'>
                            <SlHandbag className='text-3xl text-[#34c759]' />
                            <p className='text-[#2e4053]'>100% Sleek Designs</p>
                        </div>
                        <div className='flex items-center justify-center font-bold'>
                            <MdOutlineVerifiedUser className='text-3xl text-[#34c759]' />
                            <p className='text-[#2e4053]'>100% Safe Service</p>
                        </div>
                        <div className='flex items-center justify-center font-bold mr-10'>
                            <IoWatchOutline className='text-3xl text-[#34c759]' />
                            <p className='text-[#2e4053]'>Stylish WristWatch</p>
                        </div>
                    </div>
                </Marquee>
            </motion.div>
        </div>
    )
}
