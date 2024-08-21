import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header sticky top-0 z-[30] bg-white">
      <Link to={"/"}>
        <div className="header-logo__container">
          <img className="header-logo" src={APP_LOGO} alt="Logo" />
        </div>
      </Link>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About us</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="nav-link relative bg-gray-700 rounded-md text-white">
          <Link to="/cart">Cart</Link>
          {cartItems.length > 0 && (
            <span className="absolute text-xs bg-green-500 rounded-md px-1 py-[0.5] top-[-8px] right-[-6px]">
              {cartItems.length}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
