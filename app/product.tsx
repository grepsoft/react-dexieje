'use client'

import React from 'react'
import { db } from './db'

function Product({
  id, name, price, description
}: {
  id: number,
  name: string,
  price: number,
  description: string
}) {


  const addToCart = async (id: number) => {
    const existingItem = await db.cart.get({
      productid: id
    })

    if (existingItem) {
      await db.cart.update(existingItem.id, {
        quantity: existingItem.quantity + 1
      })
    } else {
      await db.cart.add({
        name: name,
        price: price,
        quantity: 1,
        productid: id
      })
    }

  }

  return (
    <li className='border-2 p-4'>
      <p className='font-bold'>{name}</p>
      <p>$ {price.toFixed(2)}</p>
      <p>{description}</p>
      <button className='p-2 bg-black' onClick={() => addToCart(id)}>Add to cart</button>
    </li>
  )
}

export default Product