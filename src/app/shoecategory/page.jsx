'use client'
import React, { useContext } from 'react'
import { data } from "../components/data";
import Link from 'next/link';
import Image from 'next/image';
import { SideBarContext } from '../providers';

const product = data.filter(datum => datum.type === 'Shoe')

export default function Page() {
    const {cartItem, setCartItem, val, setVal } = useContext(SideBarContext)

    function handleButtonIncrease(shoe) {
        setVal(prev => prev + 1); // Increment val by 1

        let newCartItems;
        const itemIndex = cartItem.findIndex(item => item.title === shoe.name);
        if (itemIndex !== -1) {
            newCartItems = cartItem.map((item, index) =>
                index === itemIndex ? {
                    ...item,
                    value: item.value + 1,
                    amount: item.amount + shoe.amount
                } : item
            );
        } else {
            newCartItems = [...cartItem, {
                id: shoe.id,
                title: shoe.name,
                value: 1,
                amount: shoe.amount
            }];
        }

        setCartItem(newCartItems);
    }
    const shoeProduct = product.map(shoe =>(
        <section key={shoe.id}>
            <div className='flex justify-center text-[#2e4053] items-center border-2 group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${shoe.name.split(' ').join('-')}`}>
                    <h2 className='ml-1 sm:ml-0 sm:text-3xl text-left my-4 font-bold'>{shoe.name}</h2>
                    <p className='ml-1 sm:ml-0 sm:text-xl text-left font-semibold'><span>&#8358;</span><span>{shoe.amount}</span></p>
                    <section>
                        <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${shoe.name.split(' ').join('-')}.png`} alt={shoe.name} title={shoe.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <Link className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' href='' onClick={() => handleButtonIncrease(shoe)}>
                    <p>Add to cart</p>
                </Link>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${shoe.name.split(' ').join('-')}`}>
                    Learn more
                </Link>
            </div>
        </section>
    ))
  return (
    <div className='my-10'>
        <h1 className='text-4xl uppercase font-bold text-center my-5 font-serif text-[#2e4053]'>Footwears</h1>


        <div className='mx-4 sm:mx-8 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-3 sm:grid-rows-3'>

        {shoeProduct}
        </div>
    </div>
  )
}
