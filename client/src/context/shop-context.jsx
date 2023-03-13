import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

// to modify the state in the ShopContextProvider
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        // adding that specific id (prev item) + 1 in the cart
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        // adding that specific id (prev item) + 1 in the cart
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount}
    
    console.log(cartItems)

    return (
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
  )
}
