import { createSlice } from '@reduxjs/toolkit'

const initState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addCart(state = initState, action) {
      // if(action.payload)
      return { ...state }
    },
  },
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
