import cartSlice from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const swiggyStore = configureStore({reducer : {
    "cart" : cartSlice
}});

export default swiggyStore;