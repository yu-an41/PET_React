import { createSlice } from '@reduxjs/toolkit'

let initState = {
  cartItems: [],
  totalItems: 0,
  totalQty: 0,
  totalPrice: 0,
  totalMember_Price: 0,
}

if (localStorage.getItem('cart').cartItems.length) {
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

      if (index === -1) {
        state.cartItems.push({
          prodSid,
          name,
          img,
          price,
          member_price,
          inventory,
          prodQty,
        })
      } else {
      }
      return { ...state }
    },
  },
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
