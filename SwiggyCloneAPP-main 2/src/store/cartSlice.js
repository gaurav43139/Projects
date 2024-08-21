import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        addItem : (state, action) => {
            state.items.push(action.payload)
        },

        clearCart : (state) => {
            state.items.length = 0;
        },

        removeItem : (state, action) => {
            const index = state.items.indexOf(action.payload);

            state.items.splice(index, 1);
        }
    }
})

export const {addItem, clearCart, removeItem} = cartSlice.actions;

export default cartSlice.reducer;