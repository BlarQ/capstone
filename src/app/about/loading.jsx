import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <FaSpinner />
    </div>
  )
}
