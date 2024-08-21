import { Link } from "react-router-dom";

const EmptyCart = () => {
    return <div className="w-6/12 m-auto flex justify-center items-center flex-col mt-4">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"/>
        <div className="text-xl text-green-600">Find delicious meals of your type from top most restaurants in our <Link className=" mx-2 text-orange-500 uppercase font-bold" to="/">Home</Link></div>
    </div>
}

export default EmptyCart;