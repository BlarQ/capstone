"use client"
import React, { useContext } from 'react';
import { data } from '../components/data';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';
import { SideBarContext } from '../providers'; // Make sure to import your context for cart management
import { motion } from 'framer-motion'


const bagData = data.filter(datum => datum.type === 'Bags').slice(0, 3)

export default function Bags() {
    const { cartItem, setCartItem, val, setVal, inputVal, setInputVal } = useContext(SideBarContext);
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

    const bagLog = bagData.map(b => (
        <section key={b.id}>
            <div className='flex justify-center items-center border-2 text-[#2e4053] group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${b.name.split(' ').join('-')}`}>
                    <h2 className='ml-1 sm:ml-0 text-3xl text-left my-4 font-bold'>{b.name}</h2>
                    <p className='ml-1 sm:ml-0 text-xl text-left font-semibold'><span>&#8358;</span><span>{b.amount.toLocaleString()}</span></p>
                    <section>
                        <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${b.name.split(' ').join('-')}.png`} alt={b.name} title={b.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <button className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' onClick={() => handleButtonIncrease(b)}>
                    <p>Add to cart</p><FaPlus />
                </button>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${b.name.split(' ').join('-')}`}>
                    Learn more
                </Link>
            </div>

        </section>
    ));

    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={flowInVariants}
            >

                <div className='grid sm:grid-cols-3 grid-cols-1 gap-2 sm:gap-4 mx-4 md:mx-8 my-5'>
                    {bagLog}
                </div>
            </motion.div>
        </div>
    );
}
