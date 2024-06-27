import React, { useContext, useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { SideBarContext } from '../providers';
import Link from 'next/link';
import { AiTwotoneDelete } from "react-icons/ai";

export default function CartPage({params}) {
    const { cartItem, setCartItem, setVal } = useContext(SideBarContext);
    const { isOpen, setIsOpen } = useContext(SideBarContext);
    const [quantities, setQuantities] = useState({});



    useEffect(() => {
        const initialQuantities = {};
        cartItem.forEach(item => {
            initialQuantities[item.id] = item.value;
        });
        setQuantities(initialQuantities);
    }, [cartItem]);

    const handleDelete = (itemId) => {
        const newCartItems = cartItem.filter(item => item.id !== itemId);
        const deletedItem = cartItem.find(item => item.id === itemId);
        setCartItem(newCartItems);
        setVal(prev => prev - (deletedItem ? deletedItem.value : 0));
    };

    const handleQuantityChange = (itemId, value) => {
        if (value < 1) return; // prevent values less than 1
        setQuantities(prev => ({
            ...prev,
            [itemId]: value,
        }));
    };

    const calculateSubtotal = () => {
        return cartItem.reduce((total, item) => {
            const quantity = quantities[item.id] || item.value;
            return total + (item.amount * quantity);
        }, 0);
    };

    return (
        <div className='h-screen flex justify-center absolute w-full backdrop-blur-sm top-0 sm:top-20'>
            <div className='flex flex-col gap-y-4 sm:gap-y-5 items-start absolute shadow-sm rounded-md w-[100%] sm:w-[45%] h-[95dvh] sm:max-h-[70%] sm:min-h-[60%] bg-[#f7f7f7] text-[#2e4053] px-6 py-5 sm:px-10'>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-xl font-semibold'>Your Cart</h1>
                    <IoClose className='cursor-pointer font-semibold text-xl' onClick={() => setIsOpen(!isOpen)} />
                </div>

                {cartItem.length === 0 ? (
                    <div className='text-2xl font-bold text-gray-500 italic h-full sm:h-[40vh] w-full flex flex-col items-center justify-center gap-y-4'>
                        <p>Ouch! Cart is Empty</p>
                        <Link href='/product' className='text-base font-semibold py-2 px-3 bg-[#34c759] rounded-full text-[#f7f7f7] hover:scale-95 duration-300'>
                            Shop Now
                        </Link>
                    </div>
                ) : (
                    <div className='w-full overflow-y-auto scrollbar-thin' style={{ maxHeight: 'calc(100vh - 12rem)' }}> {/* Adjust maxHeight as needed */}
                        <div className='capitalize text-lg w-full sm:m-auto text-[#2e4053] text-center'>
                            <div>
                                {cartItem.map(item => (
                                    <div key={item.id} className='flex items-start justify-between px-2 text-base'>
                                        <div className='flex flex-col justify-start items-start'>
                                            <p>{item.title}</p>
                                            <p>&#8358; {item.amount.toLocaleString()}</p>
                                            <p className='text-base cursor-pointer py-5 flex justify-center items-center' onClick={() => handleDelete(item.id)}><AiTwotoneDelete /> Remove</p>
                                        </div>
                                        <div>
                                            <input 
                                                className='w-14 h-8 rounded-lg pl-3 outline-none text-lg' 
                                                type="number" 
                                                value={quantities[item.id] || item.value}
                                                min={1} 
                                                max={10} 
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {cartItem.length > 0 && (
                    <div className='w-full text-base font-bold rounded-md mt-5'>
                        <div className='flex justify-between px-2 sm:px-6'>
                            <span>Subtotal</span>
                            <span>&#8358; {calculateSubtotal().toLocaleString()}</span>
                        </div>
                        <div className='py-4'>
                            <button className='py-2 w-full bg-[#34c759] rounded-full text-white font-semibold hover:scale-95 duration-300'>Continue to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
