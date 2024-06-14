'use client'
import React, { useContext } from 'react';
import { data } from '@/app/components/data';
import Image from 'next/image';
import CustomersReview from '@/app/components/CustomersReview';
import Link from 'next/link';
import { SideBarContext } from '@/app/providers';


export default function ProductPage({ params }) {

    const {cartItem, setCartItem, val, setVal, inputVal, setInputVal} = useContext(SideBarContext)
    const product = data.find(p => p.name.split(' ').join('-') === params.slug);

    function handleValType(e){
        setInputVal(Number(e.target.value))
    }

    function handleButtonIncrease(){
        setVal(prev => prev + inputVal)
        setCartItem([...cartItem, {id: product.id,title:product.name,value:inputVal,amount:product.amount*inputVal}])
    }

    // To find related products based on the type of the current product
    const relatedProducts = data.filter(p => p.type === product.type && p.id !== product.id).slice(0, 5);
    

    return (
        <div className='mb-10'>
            <div className='flex flex-col sm:flex-row items-center justify-center px-4 sm:px-8 sm:py-10'>
                <div className='sm:w-[60%] bg-slate-200 rounded-xl flex justify-center items-center py-10'>
                    <Image src={`/${product.name.split(' ').join('-')}.png`} alt={product.name} width={400} height={400}/>
                </div>
                <div className='sm:w-[40%] sm:p-10'>
                    <h1 className='text-5xl font-bold my-5 text-[#2e4053]'>{product.name}</h1>
                    <p className='text-[gray] font-bold'>{product.description}</p>
                    <p className='font-bold text-3xl my-5 text-[gray]'><span>&#8358;</span>{product.amount.toLocaleString()}</p>

                    <div className='flex items-center justify-center gap-3'>
                        <input className='outline-[#2e4053] border-2 px-3 rounded-full h-10 w-[30%] font-bold' type="number" name="num" id="num" onChange={(e)=>handleValType(e)} defaultValue={inputVal} max={10} min={1}/>
                        <button onClick={handleButtonIncrease} className='w-[70%] text-white font-bold bg-[#2e4053] h-10 rounded-full shadow-md hover:scale-105 duration-300'>Shop now</button>
                    </div>
                </div>
            </div>

            {/* Display related products */}
            {relatedProducts.length > 0 && (
                <div className="mt-10 sm:mx-8 mx-4">
                    <h2 className="text-xl sm:text-3xl font-bold mb-5 text-[#2e4053]">Related Products</h2>
                    <div className="grid grid-cols-5 grid-rows-1 gap-5">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="flex justify-center bg-gray-200 rounded-xl p-2 hover:shadow-md duration-300">
                                <Link href={`/product/${relatedProduct.name.split(' ').join('-')}`}>

                                    <h3 className="sm:text-lg font-bold mb-2 text-[#2e4053]">{relatedProduct.name}</h3>
                                    <p className="font-bold mt-2 text-[#2e4053]">&#8358;{relatedProduct.amount.toLocaleString()}</p>
                                    <Image src={`/${relatedProduct.name.split(' ').join('-')}.png`} alt={relatedProduct.name} width={200} height={200}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <CustomersReview />

        </div>
    );
}
