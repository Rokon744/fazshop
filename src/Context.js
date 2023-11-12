import React, { useContext, useEffect, useState } from "react";
import { productsAll, singlePageProduct } from './Data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const getWishListItem = () => {
        const wishList = localStorage.getItem('wishListItem')
        if (!wishList) {
            return []
        } else {
            return JSON.parse(wishList)
        }
    }
    const getLocalItem = () => {
        const letter = localStorage.getItem('CARTITEM')
        if (!letter) {
            return []
        } else {
            return JSON.parse(letter)
        }
    }
    const [openSidebar, setOpenSidebar] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalObj, setModaLObj] = useState(singlePageProduct[1])
    const [shopItem, setShopItem] = useState(singlePageProduct)
    const [wish, setWish] = useState(getWishListItem())
    const [cartItem, setCartItem] = useState(getLocalItem())
    const [currentItems, setCurrentItems] = useState(productsAll);



    const removeItem = (id) => {
        const newCartItems = cartItem.filter(item => item.id !== id)
        setCartItem(newCartItems)
    }
    function increaseDecrease(id, type) {
        const updatedItems = cartItem.map(item => {
            if (item.id == id) {
                if (type == 'inc') {
                    return {
                        ...item,
                        amount: item.amount < 5 ? item.amount + 1 : 5,
                        total: item.amount + 1,
                        totalPrice: item.amount < 5 ? (item.amount + 1) * item.price : 5 * item.price
                    };
                } else {
                    return {
                        ...item,
                        amount: item.amount > 1 ? item.amount - 1 : 1,
                        total: item.amount - 1,
                        totalPrice: (item.amount - 1) * item.price
                    };
                }
            }
            return item;
        });
        setCartItem(updatedItems);
    }


    const removeWishItem = (id) => {
        const newWishList = wish.filter((item) => item.id !== id)
        setWish(newWishList)
    }
    const openModal = (id) => {
        setIsModalOpen(true)
        const newModalObj = singlePageProduct.find((item) => {
            return item.id === id
        })
        setModaLObj(newModalObj)

    }
    const closeModal = () => {
        setIsModalOpen(false)
    }


    useEffect(() => {
        localStorage.setItem('wishListItem', JSON.stringify(wish))
    }, [wish])

    function inTotal() {
        const { total, amount } = cartItem.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0
            }
        )
        return { total, amount }
    }
    useEffect(() => {
        inTotal()
        localStorage.setItem('CARTITEM', JSON.stringify(cartItem))
    }, [cartItem])
    return <AppContext.Provider
        value={{
            openSidebar,
            setOpenSidebar,
            openDropdown,
            setOpenDropdown,
            setCartItem,
            removeItem,
            cartItem,
            wish,
            setWish,
            removeWishItem,
            increaseDecrease,
            inTotal,
            isModalOpen,
            openModal,
            closeModal,
            modalObj,
            setShopItem,
            shopItem,
            currentItems,
            setCurrentItems
        }}

    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }