'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { data } from "./data";
import { FaPlus } from 'react-icons/fa6';
import { SideBarContext } from '../providers';
import { motion } from 'framer-motion'

const productData = data.filter(datum => datum.type == 'Shoe').slice(0, 3);

export default function HomeProduct() {
    const { cartItem, setCartItem, val, setVal, inputVal, setInputVal } = useContext(SideBarContext);

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

    const flowInVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    // if (handleButtonIncrease === 'true'){
    //     <Alert icon={<MdCheckCircleOutline fontSize="inherit" />} severity="success">
    //         Here is a gentle confirmation that your action was successful.
    //     </Alert>
    // }

    const productLog = productData.map(product => (
        <section key={product.id}>
            <div className='flex justify-center items-center border-2 text-[#2e4053] group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${product.name.split(' ').join('-')}`}>
                    <h2 className='text-3xl text-left my-4 mx-4 md:mx-0 font-bold'>{product.name}</h2>
                    <p className='text-xl text-left font-semibold mx-4 md:mx-0'><span>&#8358;</span><span>{product.amount.toLocaleString()}</span></p>
                    <section>
                        <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${product.name.split(' ').join('-')}.png`} alt={product.name} title={product.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <button className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' onClick={() => handleButtonIncrease(product)}>
                    <p>Add to cart</p><FaPlus />
                </button>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${product.name.split(' ').join('-')}`}>
                    Learn more
                </Link>
            </div>
        </section>
    ));
    return (
        <section>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={flowInVariants}
            >
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mx-4 md:mx-8 my-10'>
                    {productLog}
                </div>
            </motion.div>
        </section>
    );
}
