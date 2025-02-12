'use client'

import { useLiveQuery } from 'dexie-react-hooks'
import React from 'react'
import { db } from './db'

function Cart() {

  const cartItems = useLiveQuery(() => db.cart.toArray())

  const removeFromCart = async (id: number) => {
    await db.cart.delete(id)
  }
  return (
    <div>
      <h2>Cart - {cartItems?.length}</h2>
      <h3>
        Cart total $ 
        {cartItems?.reduce((acc, cv) => acc + cv.price * cv.quantity, 0).toFixed(2)}
      </h3>

      <div>
        {
          cartItems?.map(item => (
            <div key={item.id} className='border p-4'>
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className='bg-black p-4' onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart