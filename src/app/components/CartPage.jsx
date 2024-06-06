import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { SideBarContext } from '../providers';


export default function CartPage() {
    const {cartItem, setCartItem} = useContext(SideBarContext)
    const {isOpen, setIsOpen} = useContext(SideBarContext)
  return (
    <div className='h-screen justify-center flex  absolute w-full backdrop-blur-sm top-20'>
        <div className='flex flex-col gap-y-5 items-start absolute  w-[45%] h-[400px] bg-[#f7f7f7] shadow-sm text-2xl font-bold text-[#2e4053] px-10 py-5'>
           <div className='flex justify-between w-full items-center'>

            <h1>Your Cart</h1>

            <IoClose className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
           </div>
        
            {cartItem.length == 0 ? <h2>cart is empty</h2> :

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
