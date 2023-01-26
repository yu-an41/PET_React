import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

let initState = {
  cartItems: [],
}

if (localStorage.getItem('cart')?.totalItems) {
  initState = JSON.parse(localStorage.getItem('cart'))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addCart(state = initState, action) {
      const { prodSid, name, img, price, member_price, inventory, prodQty } =
        action.payload

      const index = state.cartItems.findIndex((e) => {
        return e.prodSid === prodSid
      })
      const { cartItems } = state

      if (index === -1) {
        cartItems.push({
          prodSid,
          name,
          img,
          price,
          member_price,
          inventory,
          prodQty,
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
      const { cartItems } = state.cartItems

      const index = state.cartItems.findIndex((e) => e.sid === prodSid)

      if (cartItems[index].prodQty + prodQty <= cartItems[index].inventory) {
        cartItems[index].prodQty += prodQty
      } else {
        alert(
          `已達本商品最高購買量：${cartItems[index].inventory}，請重新選擇（已選購：${cartItems[index].prodQtyㄋ}）`
        )
      }
      cartItems[index].prodQty = prodQty

      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    deleteItem(state = initState, action) {
      const { prodSid } = action.payload

      const { cartItems } = state.cartItems

      cartItems.filter((e) => {
        return e.sid !== prodSid
      })

      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    minusQty(state = initState, action) {
      const { prodSid, prodQty } = action.payload

      const { cartItems } = state.cartItems

      const index = cartItems.findIndex((e) => {
        return e.sid === prodSid
      })

      if (cartItems[index].prodQty) {
        cartItems[index].prodQty -= 1
      } else {
        alert('本商品最低購買數量為1！')
      }
      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    plusQty(state = initState, action) {
      const { prodSid, prodQty } = action.payload

      const { cartItems } = state.cartItems

      const index = cartItems.findIndex((e) => (e.sid = prodSid))

      if (cartItems[index].prodQty < cartItems[index].inventory) {
        cartItems[index].prodQty += 1
      } else {
        alert('已達本商品最高購買數量！')
      }

      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
  },
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
