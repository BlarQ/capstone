import React, { useContext } from 'react';
import { IoClose } from "react-icons/io5";
import { SideBarContext } from '../providers';
import Link from 'next/link';
import { AiTwotoneDelete } from "react-icons/ai";

export default function CartPage() {
    const { cartItem, setCartItem, setVal } = useContext(SideBarContext);
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const handleDelete = (itemId) => {
        const newCartItems = cartItem.filter(item => item.id !== itemId);
        const deletedItem = cartItem.find(item => item.id === itemId);
        setCartItem(newCartItems);
        setVal(prev => prev - (deletedItem ? deletedItem.value : 0));
    };

    return (
        <div className='h-screen justify-center flex absolute w-full backdrop-blur-sm top-20'>
            <div className='flex flex-col gap-y-5 items-start absolute shadow-sm rounded-md w-[45%] min-h-[50%] max-h-[70%] bg-[#f7f7f7] text-[#2e4053] px-10 py-5'>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-xl font-semibold'>Your Cart</h1>
                    <IoClose className='cursor-pointer font-semibold text-xl' onClick={() => setIsOpen(!isOpen)} />
                </div>

                {cartItem.length === 0 ? (
                    <div className='text-2xl font-bold text-[gray] italic h-[30vh] w-full flex flex-col items-center justify-center gap-y-4'>
                        <p>Ouch! Cart is Empty</p>
                        <Link href='/' className='text-base font-semibold py-2 px-3 bg-[#34c759] rounded-full text-[#f7f7f7] hover:scale-95 duration-300'>Shop Now</Link>
                    </div>
                ) : (
                    <table className='capitalize text-lg w-[100%] m-auto text-[#2e4053] text-center'>
                        <thead>
                            <tr>
                                <th className='text-left px-6'>Product</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {cartItem.map(item => (
                                <tr key={item.id}>
                                    <td className='text-left px-6'>{item.title}</td>
                                    <td>{item.value}</td>
                                    <td>{item.amount.toLocaleString()}</td>
                                    <td className='text-base cursor-pointer px-[5%]' onClick={() => handleDelete(item.id)}><AiTwotoneDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className='font-bold bg-[#34c759] rounded-md text-[whitesmoke]'>
                                <td className='text-left px-6'>Total</td>
                                <td>{cartItem.reduce((total, item) => total + item.value, 0)}</td>
                                <td>{cartItem.reduce((total, item) => total + item.amount, 0).toLocaleString()}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
        </div>
    );
}
