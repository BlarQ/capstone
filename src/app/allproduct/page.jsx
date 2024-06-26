'use client'
import React, { useState } from 'react'
import { data } from "../components/data";
import Link from 'next/link';
import Image from 'next/image';


export default function Page() {
    const [item, setItem] = useState('')

    function searchShirt(e) {
        setItem(e.target.value)
    }

    const filteredShirt = data.filter(datum => (datum.name.toLowerCase().includes(item.toLowerCase()) || datum.type.toLowerCase().includes(item.toLowerCase())))

    const shirtProduct = filteredShirt.map(shirt =>(
        <section key={shirt.id}>
            <div className='flex justify-center text-[#2e4053] items-center border-2 group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${shirt.name.split(' ').join('-')}`}>
                    <h2 className='text-3xl text-left my-4 font-bold'>{shirt.name}</h2>
                    <p className='text-xl text-left font-semibold'><span>&#8358;</span><span>{shirt.amount.toLocaleString()}</span></p>
                    <section>
                            <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${shirt.name.split(' ').join('-')}.png`} alt={shirt.name} title={shirt.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <Link className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' href='/'>
                    <p>Add to cart</p>
                </Link>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${shirt.name.split(' ').join('-')}`}>
                    Learn more
                </Link>
            </div>
        </section>
    ))
  return (
    <div className='my-10'>
        <h1 className='text-4xl uppercase font-bold text-center my-5 font-serif text-[#2e4053]'>All Products</h1>

        <div className='flex justify-center items-center my-10'>
            <input className='border-2 px-4 rounded-full w-96 h-10 py-5 outline-none text-[#2e4053] font-bold' type="text" name="search" id="search" onChange={searchShirt} defaultValue={item} placeholder='Search here for TrendItems'/>
        </div>
        <div className='mx-8 grid gap-4 sm:grid-cols-3 sm:grid-rows-3'>

        {shirtProduct}
        </div>
    </div>
  )
}
