import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function FavoriteRoutine() {
    return (
        <div className='my-16 mx-8'>
            <div className='hidden md:flex justify-between items-end'>
                <h2 className='text-6xl font-bold w-[40%] text-[#2e4053]'>Your Favorite Fashion Routines</h2>

                <div>
                    <Link href='/product' className='flex bg-[#2e4053] py-4 px-5 sm:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1' /> </Link>
                </div>
            </div>

            <div>
                <div className='hidden md:grid grid-cols-3 gap-20 mt-5'>
                    <div className='h-[700px]'>
                        <video className='absolute h-[700px] -z-10 scale-x-95 ' src='/test4.mp4' autoPlay loop muted />
                        <div className='flex flex-col justify-between space-y-[30rem]'>
                            <div className='py-10 mx-10 flex justify-start items-center gap-4 text-white'>
                                <div className='border-2 border-inherit bg-white rounded-full w-12 h-12'>
                                    <Image className='rounded-full' src='/bci-profile1.png' alt='profile picture of Miss Bee' width={50} height={50} />
                                </div>
                                <p className='font-bold text-3xl'>Apple</p>
                            </div>

                            <div className='flex justify-start bg-[whitesmoke] w-fit items-center ml-[0.6rem]'>
                                <Image className='-mt-20' src="/Apple-Watch-Series-8.png" alt='Wristwatch' width={150} height={150}/>
                                <p className='text-2xl w-min font-bold py-7 mr-[15.8rem]'>Wristwatch with class</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[700px]'>
                        <video className='absolute h-[700px] -z-10' src='/test5.mp4' autoPlay loop muted />
                        <div className='flex flex-col justify-between space-y-[30rem]'>
                            <div className='py-10 mx-10 flex justify-start items-center gap-4 text-white'>
                                <div className='border-2 border-inherit bg-white rounded-full w-12 h-12'>
                                    <Image className='rounded-full' src='/bci-profile1.png' alt='profile picture of Miss Bee' width={50} height={50} />
                                </div>
                                <p className='font-bold text-3xl'>Nike</p>
                            </div>

                            <div className='relative flex justify-start bg-[whitesmoke] w-[24.6rem] items-center'>
                                <Image className='-mt-20 mx-5' src="/Nike-Air-Force-1.png" alt='Wristwatch' width={150} height={150}/>
                                <p className='text-2xl font-bold py-7 mx-10'>Footwear with class</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[700px] '>
                        <video className='absolute h-[700px] -z-10' src='/test1.mp4' autoPlay loop muted />
                        <div className='flex flex-col justify-between space-y-[30rem]'>
                            <div className='py-10 mx-10 flex justify-start items-center gap-4 text-white'>
                                <div className='border-2 border-inherit bg-white rounded-full w-12 h-12'>
                                    <Image className='rounded-full' src='/bci-profile1.png' alt='profile picture of Miss Bee' width={50} height={50} />
                                </div>
                                <p className='font-bold text-3xl'>Bee March</p>
                            </div>

                            <div className='flex justify-start bg-[whitesmoke] w-fit items-center'>
                                <Image className='-mt-20' src="/Apple-Watch-Series-8.png" alt='Wristwatch' width={150} height={150}/>
                                <p className='text-2xl w-min font-bold py-7 ml-10 mr-14'>Wristwatch with class</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
