import Image from 'next/image'
import React from 'react'

export default function OurTeam() {
  return (
    <div className='mx-8'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl sm:text-6xl font-bold'>Our wonderful team</h2>
            <p className='font-bold mx-10 text-center my-6 text-[gray] lg:mx-[20%]'>Our C.E.O. drives innovation and excellence. Our Product Designer crafts unique, stylish items. Our Marketer connects our passion for fashion with our customers. Together, we create exceptional shopping experiences.</p>
        </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-8'>
            <div className='lg:flex lg:flex-col hover:text-[#34c759] cursor-pointer duration-500 sm:grid sm:grid-cols-2 sm:items-center gap-4'>
                <div>

                    <Image className='sm:h-80 lg:h-[28rem]' src='/d1.jpg' alt='CEO of Trenluxe' width={390} height={350} />
                </div>

                <div>
                    <p className='text-xl ml-2 mt-2 font-bold text-[gray]'>C.E.O. & Founder</p>
                    <h2 className='text-4xl ml-2 my-4 font-bold'>Alex Carter</h2>
                    <p className='font-bold ml-2 text-[gray]'>Leads with a vision for innovation and excellence, guiding our brand to new heights.</p>
                </div>
            </div>
            <div className='lg:flex lg:flex-col hover:text-[#34c759] cursor-pointer duration-500 sm:grid sm:grid-cols-2 sm:items-center gap-4'>
                <div>

                    <Image className='sm:h-80 lg:h-[28rem]' src='/d2.jpg' alt='CEO of Trenluxe' width={400} height={400} />
                </div>

                <div>
                    <p className='text-xl ml-2 mt-2 font-bold text-[gray]'>Product Designer</p>
                    <h2 className='text-4xl ml-2 my-4 font-bold'>Liam Bennett</h2>
                    <p className='font-bold ml-2 text-[gray]'>Leads with a vision for innovation and excellence, guiding our brand to new heights.</p>
                </div>
            </div>
            <div className='lg:flex lg:flex-col hover:text-[#34c759] cursor-pointer duration-500 sm:grid sm:grid-cols-2 sm:items-center gap-4'>
                <div>

                    <Image className='sm:h-80 lg:h-[28rem]' src='/d3.jpg' alt='CEO of Trenluxe' width={400} height={400} />
                </div>

                <div>
                    <p className='text-xl ml-2 mt-2 font-bold text-[gray]'>Marketer</p>
                    <h2 className='text-4xl ml-2 my-4 font-bold'>Noah Harris</h2>
                    <p className='font-bold ml-2 text-[gray]'>Expertly connects our fashion passion with our customers, making every shopping experience special.</p>
                </div>
            </div>
        </div>
    </div>
  )
}