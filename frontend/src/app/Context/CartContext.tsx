'use client'

import React, { createContext, useContext, useState } from 'react'

type CartItem = {
  id: number
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

// ✅ Custom hook for safe usage
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider')
  }
  return context
}

export default CartContext