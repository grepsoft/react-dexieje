import React from 'react'
import Product from './product'

// create fake products
const fakeProducts = [
    {
        id: 1,
        name: 'Classic White Shirt',
        price: 29.99,
        description: 'A timeless classic white shirt, perfect for any occasion.'
    },
    {
        id: 2,
        name: 'Casual Denim Shirt',
        price: 39.99,
        description: 'A comfortable and stylish denim shirt for casual outings.'
    },
    {
        id: 3,
        name: 'Formal Black Shirt',
        price: 49.99,
        description: 'A sleek and elegant black shirt for formal events.'
    },
    {
        id: 4,
        name: 'Plaid Flannel Shirt',
        price: 34.99,
        description: 'A cozy plaid flannel shirt, great for colder weather.'
    },
    {
        id: 5,
        name: 'Striped Polo Shirt',
        price: 24.99,
        description: 'A sporty striped polo shirt, ideal for a casual day out.'
    }
]

function ProductList() {
    return (
        <ul className='list-none border-2 p-4'>
            {
                fakeProducts.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))
            }
        </ul>
    )
}

export default ProductList