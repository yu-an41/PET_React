import { createSlice } from '@reduxjs/toolkit'

let initState = {
  cartItems: [],
  totalItems: 0,
  totalQty: 0,
  totalPrice: 0,
  totalMember_Price: 0,
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

      let newCart = {}

      if (index === -1) {
        newCart = {
          ...state,
          cartItems: [
            ...cartItems,
            {
              prodSid,
              name,
              img,
              price,
              member_price,
              inventory,
              prodQty: prodQty,
            },
          ],
          totalItems: totalItems + 1,
          totalQty: totalQty + prodQty,
          totalPrice: totalPrice + price * prodQty,
          totalMember_Price: totalMember_Price + member_price * prodQty,
        }

        alert('商品成功加入購物車！')
      } else {
        const item = cartItems[index]
        cartItems[index] = {
          ...cartItems[index],
          prodQty: cartItems[index].prodQty + prodQty,
        }

        newCart = {
          ...state,
          cartItems: cartItems,
          totalQty: totalQty + prodQty,
          totalPrice: totalPrice + price * prodQty,
          totalMember_Price: totalMember_Price + member_price * prodQty,
        }
        alert('已更新商品數量！')
      }
      console.log(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return { ...state }
    },
  },
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
