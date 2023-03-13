import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

// to modify the state in the ShopContextProvider
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1 ; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0 ) {
                // find a specific element in the array where product.id so that we can access its price
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

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

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount, 
        getTotalCartAmount}
    

    return (
    <ShopContext.Provider value={contextValue}> 
        {props.children} 
    </ShopContext.Provider>
  )
}
