import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from "./data";
import { FaPlus } from 'react-icons/fa6';


const productData = data.filter(datum => datum.type =='Shoe').slice(0, 3)

export default function HomeProduct() {
    const productLog = productData.map(product =>(
        <section key={product.id}>
            <div className='flex justify-center items-center border-2 text-[#2e4053] border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${product.name.split(' ').join('-')}`}>
                    <h2 className='text-3xl text-left my-4 font-bold'>{product.name}</h2>
                    <p className='text-xl text-left font-semibold'><span>&#8358;</span><span>{product.amount}</span></p>
                    <section>
                        <Image className='mb-8 hover:scale-105 duration-300 hover:-translate-y-5' src={`/${product.name.split(' ').join('-')}.png`} alt={product.name} title={product.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <Link className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' href='/'>
                    <p>Add to cart</p><FaPlus />
                </Link>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href='/'>
                    Learn more
                </Link>
            </div>
        </section>
    ))
  return (
    <section>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mx-8 my-10'>
            {productLog}
        </div>
    </section>
  )
}
