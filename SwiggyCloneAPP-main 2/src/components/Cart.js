import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItemList from "./CartItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    console.log(cartItems);

    return (cartItems.length > 0 ? <CartItemList items = {cartItems}/> : <EmptyCart />)
}

export default Cart;