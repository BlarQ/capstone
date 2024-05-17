import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from "./data";

const productData = data.filter(datum => datum.type =='Shoe').slice(3, 6)

export default function HomeProduct() {
    const productLog = productData.map(product =>(
        <section key={product.id}>
            <section className='border-2 border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex flex-col'>
                <Link href={`/${product.name.split(' ').join('-')}`}>
                    <h2 className='text-3xl mx-4 my-4 font-bold'>{product.name}</h2>
                    <p className='text-xl mx-4 font-semibold'><span>&#8358;</span><span>{product.amount}</span></p>
                    <section className='flex items-center flex-col'>
                        <Image className='mb-8 hover:scale-105 duration-300 hover:-translate-y-5' src={`/${product.name.split(' ').join('-')}.png`} alt={product.name}
                            width={300}
                            height={300} />
                        <Link className='-mt-16 py-4 px-6 rounded-full bg-[#f7f7f7] font-bold text-black hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' href='/'>
                            Add to Cart
                        </Link>
                    </section>
                </Link>
                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href='/'>
                    Learn more
                </Link>
            </section>
        </section>
    ))
  return (
    <section>
        <div className='grid sm:grid-cols-3 gap-4 mx-8 mt-10'>
            {productLog}
        </div>
    </section>
  )
}
