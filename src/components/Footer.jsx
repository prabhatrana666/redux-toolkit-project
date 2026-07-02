import "./Footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
    // Read data from Redux Store
    const cartCount = useSelector((state) => state.cart.value);

    return (
        <footer className="footer">
            <h2>Footer Component</h2>

            <p>
                🛒 Total Cart Items: <strong>{cartCount}</strong>
            </p>
        </footer>
    );
};

export default Footer;