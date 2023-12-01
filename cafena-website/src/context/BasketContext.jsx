import React, { createContext } from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'

export const BasketContext = createContext()


const BasketProvider = ({children}) => {
    const [basket,setBasket] = useLocalStorage('basket')

    const IsProductInBasket = (id)=>{
        
        return basket.find(x=> x.id === id) !== undefined;
    }

    const addToBasket = (item)=>{
        const itemIndex = basket.find(x=> x.id ===item.id)
        if (IsProductInBasket(item.id)) {
            itemIndex.count += 1
            setBasket([...basket]) 
        }
        else{
            item.count = 1
          setBasket([...basket,item])  
        }
        
    }

    const removeBasket = (item)=>{
        const removedBasket = basket.filter(basketProduct=> basketProduct.id !== item.id)
        setBasket(removedBasket)
    }

    const updateCount = (item,count)=>{
        const itemIndex = basket.find(x=> x.id ===item.id)
        count > 0 ?itemIndex.count = count : ""
        setBasket([...basket]) 
    }
    
    const clearBasket = ()=>{
        setBasket([]) 
    }

    const discountedPrice = (basketProduct)=>{
        return (basketProduct.price*((100-basketProduct.discount)/100)*basketProduct.count)
      }

    const basketSubTotal = ()=>{
        const total = basket.reduce((sum,value)=>sum+ discountedPrice(value),0).toFixed(2)
        return total
    }

    
    const data = {
        basket,
        addToBasket,
        IsProductInBasket,
        removeBasket,
        updateCount,
        clearBasket,
        basketSubTotal,
        discountedPrice
    }

  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider