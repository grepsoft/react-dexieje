import Dexie, { EntityTable } from "dexie";

interface Cart {
    id: number,
    name: string,
    price: number,
    quantity: number,
    productid: number
}

const db = new Dexie('ProductsDB') as Dexie & {
    cart: EntityTable<Cart, 'id'>
}

db.version(1).stores({
    cart: "++id, name, price, quantity, productid"
})

export { db }