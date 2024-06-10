import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { SideBarContext } from '../providers';
import Link from 'next/link';


export default function CartPage() {
    const {cartItem, setCartItem} = useContext(SideBarContext)
    const {isOpen, setIsOpen} = useContext(SideBarContext)
  return (
    <div className='h-screen justify-center flex absolute w-full backdrop-blur-sm top-20'>
        <div className='flex flex-col gap-y-5 items-start absolute shadow-sm rounded-md  w-[45%] min-h-[50%] max-h-[70%] bg-[#f7f7f7] text-[#2e4053] px-10 py-5'>
           <div className='flex justify-between w-full items-center'>

            <h1 className='text-xl font-semibold'>Your Cart</h1>

            <IoClose className='cursor-pointer font-semibold text-xl' onClick={() => setIsOpen(!isOpen)}/>
           </div>
        
            {cartItem.length == 0 ? <div className='text-2xl font-bold text-[gray] italic h-[30vh] w-full flex flex-col items-center justify-center gap-y-4'> 
                <p>Ouch!. Cart is Empty</p>
                <Link href='/' className='text-base font-semibold py-2 px-3 bg-[#34c759] rounded-full text-[#f7f7f7] hover:scale-95 duration-300'>Shop Now</Link>
            </div> :

        <table className='capitalize text-xl w-[100%] m-auto text-left text-[#2e4053]'>
            <thead>
                <tr>
                    <th>product</th>
                    <th>quantity</th>
                    <th>amount</th>
                </tr>
            </thead>
            <tbody>

            {cartItem.map(item => (
                <tr key={item.id}>
                    <td className='pr-5'>{item.title}</td>
                    <td className='pr-5'>{item.value}</td>
                    <td>{item.amount.toLocaleString()}</td>
                </tr>
            ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>total</td>
                    <td>{[...cartItem.map(item => item.value)].reduce((a,b)=>a+b,0)}</td>
                    <td>{[...cartItem.map(item => item.amount)].reduce((a,b)=>a+b,0).toLocaleString()}</td>
                    
                </tr>
            </tfoot>
        </table>
        }
        </div>
    </div>
  )
}
