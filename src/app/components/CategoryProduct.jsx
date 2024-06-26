'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { data } from './data'
import { SideBarContext } from '../providers'
import { motion } from 'framer-motion'


const categoryData = data.filter(datum => datum.type == 'Shirt').slice(0, 3)

export default function CategoryProduct() {
    const { cartItem, setCartItem, val, setVal } = useContext(SideBarContext);
    const flowInVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    function handleButtonIncrease(product) {
        setVal(prev => prev + 1); // Increment val by 1

        let newCartItems;
        const itemIndex = cartItem.findIndex(item => item.title === product.name);
        if (itemIndex !== -1) {
            newCartItems = cartItem.map((item, index) =>
                index === itemIndex ? {
                    ...item,
                    value: item.value + 1,
                    amount: item.amount + product.amount
                } : item
            );
        } else {
            newCartItems = [...cartItem, {
                id: product.id,
                title: product.name,
                value: 1,
                amount: product.amount
            }];
        }

        setCartItem(newCartItems);
    }

    const categoryLog = categoryData.map(category => (
        <section key={category.id}>
            <div className='flex justify-center items-center border-2 text-[#2e4053] group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${category.name.split(' ').join('-')}`}>
                    <h2 className='text-3xl text-left my-4 font-bold'>{category.name}</h2>
                    <p className='text-xl text-left font-semibold'><span>&#8358;</span><span>{category.amount.toLocaleString()}</span></p>
                    <section>
                        <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${category.name.split(' ').join('-')}.png`} alt={category.name} title={category.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <button className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' onClick={() => handleButtonIncrease(category)}>
                    <p>Add to cart</p><FaPlus />
                </button>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${category.name.split(' ').join('-')}`}>
                    Learn more
                </Link>
            </div>
        </section>
    ))

    return (
        <section>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={flowInVariants}
            >

                <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mx-4 md:mx-8 my-10'>
                    {categoryLog}
                </div>
            </motion.div>
        </section>
    )
}
