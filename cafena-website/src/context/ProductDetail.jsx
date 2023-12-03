import React, { createContext } from 'react'

export const ProductDetailContext = createContext()

const ProductDetailProvider = ({children}) => {
    const data = {

    }
  return (
    <ProductDetailContext.Provider value={data}>
        {children}
    </ProductDetailContext.Provider>
  )
}

export default ProductDetailProvider