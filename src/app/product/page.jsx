"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { data } from "../components/data";
import { FaArrowRight } from "react-icons/fa";
import ProductPageBanner from '../components/ProductPageBanner';
import { SideBarContext } from '../providers';
import HomeProduct from '../components/HomeProduct';
import CategoryProduct from '../components/CategoryProduct';
import Bags from '../bagscategory/page';
import { motion } from 'framer-motion'

const watchData = data.filter(datum => datum.type === 'Wristwatch').slice(0, 3);

export default function Page() {
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

    const categoryLog = watchData.map(product => (
        <section key={product.id}>
            <div className='flex justify-center text-[#2e4053] items-center border-2 group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${product.name.split(' ').join('-')}`}>
                    <h2 className='text-3xl text-left my-4 font-bold'>{product.name}</h2>
                    <p className='text-xl text-left font-semibold'><span>&#8358;</span><span>{product.amount.toLocaleString()}</span></p>
                    <section>
                        <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${product.name.split(' ').join('-')}.png`} alt={product.name} title={product.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <button className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' onClick={() => handleButtonIncrease(product)}>
                    <p>Add to cart</p>
                </button>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${product.name.split(' ').join('-')}`}>
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

                <ProductPageBanner />
            </motion.div>
            <div className='my-4 px-4 md:px-8'>
                <h1 className='text-center font-bold text-3xl my-4 md:text-6xl text-[#2e4053]' id='explore'>Our Product Categories</h1>

                <div className='hidden sm:flex justify-center items-center my-8 gap-4 font-semibold text-[gray]'>
                    <div>
                        <Link className='hover:text-[#2e4053] duration-300' href='/allproduct'>ALL</Link>
                    </div>
                    <div className='border-x-2 px-4'>
                        <Link className='hover:text-[#2e4053] duration-300' href='/watchcategory'>WRISTWATCH</Link>
                    </div>
                    <div className='border-r-2 pr-4'>
                        <Link className='hover:text-[#2e4053] duration-300' href='/shoecategory'>FOOTWEARS</Link>
                    </div>
                    <div>
                        <Link className='hover:text-[#2e4053] duration-300' href='/shirtcategory'>SHIRTS</Link>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold text-[#2e4053]'>Wristwatch</p>

                    <div className='flex justify-center items-center gap-x-1 group cursor-pointer'>
                        <Link className='font-bold text-[rgb(46,64,83)]' href='/watchcategory'>See more</Link>
                        <FaArrowRight className='group-hover:pl-1 duration-300' />
                    </div>
                </div>
                <hr className='' />
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                        {categoryLog}
                    </div>
            </div>

            <div className='py-4'>
                <div className='flex items-center justify-between mx-4 md:mx-8'>
                    <p className='text-2xl font-bold text-[#2e4053]'>Footwears</p>
                    <div className='flex justify-center items-center gap-x-1 group cursor-pointer'>
                        <Link className='font-bold text-[rgb(46,64,83)]' href='/shoecategory'>See more</Link>
                        <FaArrowRight className='group-hover:pl-1 duration-300' />
                    </div>
                </div>
                <hr className='mx-4 md:mx-8' />
                <HomeProduct />
            </div>

            <div>
                <div className='flex items-center justify-between mx-4 md:mx-8'>
                    <p className='text-2xl font-bold text-[#2e4053]'>Shirts</p>
                    <div className='flex justify-center items-center gap-x-1 group cursor-pointer'>
                        <Link className='font-bold text-[rgb(46,64,83)]' href='/shirtcategory'>See more</Link>
                        <FaArrowRight className='group-hover:pl-1 duration-300' />
                    </div>
                </div>
                <hr className='mx-4 md:mx-8' />

                <CategoryProduct />
            </div>

            <div>
                <div className='flex items-center justify-between mx-4 md:mx-8'>
                    <p className='text-2xl font-bold text-[#2e4053]'>Bags</p>
                    <div className='flex justify-center items-center gap-x-1 group cursor-pointer'>
                        <Link className='font-bold text-[rgb(46,64,83)]' href='/bagscategory'>See more</Link>
                        <FaArrowRight className='group-hover:pl-1 duration-300' />
                    </div>
                </div>
                <hr className='mx-4 md:mx-8' />
                
                <Bags />
            </div>
        </div>
    );
}
