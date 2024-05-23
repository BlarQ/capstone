import Image from 'next/image'
import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function loading() {
  return (
    <div className='min-h-[70vh] flex justify-center items-center'>
      <div>
        <Image src='/spinner.svg' alt='spinner' width={100} height={100} />
      </div>
    </div>
  )
}
