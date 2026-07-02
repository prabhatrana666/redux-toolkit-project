import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="cart">
        <FaShoppingCart size={22} />
        <span className="cart-count">0</span>
      </div>
    </nav>
  );
};

export default Navbar;