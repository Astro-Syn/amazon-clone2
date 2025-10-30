import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const item = action.payload;
      const priceNum = Number(item.price);
      const newItem = { ...item, price: isNaN(priceNum) ? 0 : priceNum };

     
      const existingItem = state.cart.find((x) => x.id === newItem.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },
    removefromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },

    clearCart: (state) => {
        state.cart = [];
    }
  },
});

export default cartSlice.reducer;
export const { addtoCart, removefromCart, clearCart } = cartSlice.actions;
