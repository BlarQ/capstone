import React from 'react'
import { data } from '@/app/components/data'
import Image from 'next/image'

export default function ProductPage({params}) {

    const product = data.find(p => p.name.split(' ').join('-') === params.slug)
    

  return (
    <div>
        <div>
            <Image src={`/${product.name.split(' ').join('-')}.png`} alt={product.name} width={500} height={500}/>
        </div>
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    </div>
  )
}
