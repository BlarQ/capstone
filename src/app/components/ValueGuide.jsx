import Image from 'next/image'
import React from 'react'

export default function ValueGuide() {
  return (
    <div className='grid grid-cols-2 mx-8 my-32 px-5 items-center'>
        <div>
            <Image className='' src='/valueimg.jpg' alt='Shoe, glass, bag, belt and cloth on a gray rug' width={600} height={400} />
        </div>

        <div>
            <h2 className='text-6xl font-bold sm:w-[80%]'>The value that guides us</h2>
            <p className='my-4 font-bold text-[gray]'>At the heart of our brand are values that drive everything we do. We prioritize quality and craftsmanship, ensuring every product meets the highest standards. Innovation fuels our creativity, inspiring us to set trends rather than follow them. Sustainability is key, and we are committed to ethical practices that protect our planet.</p>

            <div>
                <div className='flex flex-col sm:flex-row sm:flex sm:justify-center items-start sm:items-center'>
                    <div className='sm:my-4 sm:mr-4'>

                        <Image className='max-h-28 max-w-28' src='/value1.svg' alt='' width={200} height={200}/>
                    </div>

                    <div>
                        <dt className='text-2xl font-bold gap-y-4'>Exceptional Quality
                            <dd className='text-base text-[gray] mt-2'>Every item in our collection is crafted with meticulous attention to detail, ensuring the highest standards of quality and durability.</dd>
                        </dt>
                    </div>
                    
                </div>
                <div className='flex flex-col sm:flex-row sm:flex sm:justify-center items-start sm:items-center'>
                    <div className='my-4 mr-4'>

                        <Image className='max-h-28 max-w-28' src='/value2.svg' alt='' width={200} height={200}/>
                    </div>

                    <div>
                        <dt className='text-2xl font-bold gap-y-4'>Customer Satisfaction
                            <dd className='text-base text-[gray] mt-2'>Your happiness is our priority. We strive to provide an exceptional shopping experience, from easy navigation to excellent customer service.</dd>
                        </dt>
                    </div>
                    
                </div>
                <div className='flex flex-col sm:flex-row sm:flex sm:justify-center items-start sm:items-center'>
                    <div className='my-4 mr-4'>

                        <Image className='max-h-28 max-w-28' src='/value3.svg' alt='' width={200} height={200}/>
                    </div>

                    <div>
                        <dt className='text-2xl font-bold gap-y-4'>Affordable Luxury
                            <dd className='text-base text-[gray] mt-2'>We believe fashion should be accessible. Our products combine high-end aesthetics with affordable prices, giving you the best of both worlds.</dd>
                        </dt>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
