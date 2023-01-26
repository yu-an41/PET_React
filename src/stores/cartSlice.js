import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

let initState = {
  cartItems: [],
}

if (!!localStorage.getItem('cart')) {
  // console.log('加過購物車ㄌ')
  initState.cartItems = JSON.parse(localStorage.getItem('cart'))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addCart(state = initState, action) {
      const {
        prodSid,
        category,
        name,
        img,
        price,
        member_price,
        inventory,
        prodQty,
        specials,
      } = action.payload

      const index = state.cartItems.findIndex((e) => {
        return e.prodSid === prodSid
      })
      const { cartItems } = state

      if (index === -1) {
        cartItems.push({
          prodSid,
          category,
          name,
          img,
          price,
          member_price,
          inventory,
          prodQty,
          specials,
        })

        console.log('商品成功加入購物車！')
      } else {
        // const item = cartItems[index]
        console.log(name, prodQty)
        cartItems[index].prodQty += prodQty

        console.log('已更新商品數量！')
      }
      localStorage.setItem('cart', JSON.stringify(cartItems))
      // console.log(cartItems)
    },
    updateQty(state = initState, action) {
      const { prodSid, prodQty } = action.payload
      const { cartItems } = state

      const index = cartItems.findIndex((e) => e.sid === prodSid)

      if (cartItems[index].prodQty + prodQty <= cartItems[index].inventory) {
        cartItems[index].prodQty += prodQty
      } else {
        alert(
          `已達本商品最高購買量：${cartItems[index].inventory}，請重新選擇（已選購：${cartItems[index].prodQty}）`
        )
      }
      cartItems[index].prodQty = prodQty

      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    deleteItem(state = initState, action) {
      const { prodSid } = action.payload

      state.cartItems.filter((e) => {
        return e.prodSid !== prodSid
      })

      const { cartItems } = state.cartItems

      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    minusQty(state = initState, action) {
      const { prodSid } = action.payload

      const index = state.cartItems.findIndex((e) => e.prodSid === prodSid)
      // console.log(prodSid, index)

      const { cartItems } = state

      if (cartItems[index].prodQty - 1 > 0) {
        cartItems[index].prodQty -= 1
      } else {
        alert('本商品最低購買數量為1！')
      }
      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    plusQty(state = initState, action) {
      const { prodSid } = action.payload

      const index = state.cartItems.findIndex((e) => e.prodSid === prodSid)
      // console.log(prodSid, index)

      const { cartItems } = state

      if (cartItems[index].prodQty + 1 < cartItems[index].inventory) {
        cartItems[index].prodQty += 1
      } else {
        alert(`已達本商品最高購買數量:${cartItems[index].inventory}！`)
      }

      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    emptyCart(state = initState, action) {
      const { cartItems } = state.cartItems
      cartItems = []
      if (localStorage.getItem('cart')) {
        localStorage.removeItem('cart')
      }
      console.log('cart emptied')
    },
  },
})

export const { addCart, updateQty, deleteItem, minusQty, plusQty, emptyCart } =
  cartSlice.actions
export default cartSlice.reducer
