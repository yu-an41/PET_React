import { createSlice } from '@reduxjs/toolkit'

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
      console.log(prodSid, name, img, price, member_price, inventory, prodQty)

      const index = state.cartItems.findIndex((e) => {
        return e.sid === prodSid
      })
      const { cartItems, totalItems, totalQty, totalPrice, totalMember_Price } =
        state

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
        const item = cartItems[index]
        console.log(name, prodQty)
        cartItems[index] = {
          ...cartItems[index],
          prodQty: cartItems[index].prodQty + prodQty,
        }

        console.log('已更新商品數量！')
      }
      localStorage.setItem('cart', JSON.stringify(cartItems))
    },
    updateQty(state = initState, action) {
      const { prodSid, prodQty } = action.payload

      const index = state.cartItems.findIndex((e) => {
        return e.sid === prodSid
      })

      state.cartItems[index] = {
        ...state.cartItems[index],
        prodQty: prodQty,
      }
    },
  },
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
