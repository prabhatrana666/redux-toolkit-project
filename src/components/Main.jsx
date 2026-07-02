import "./Main.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux/slice"

const Main = () => {

    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1>React Redux Toolkit Tutorials</h1>

            <div className="card">
                <div className="image">
                    <img
                        src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=700"
                        alt="Headphone"
                    />
                </div>

                <div className="content">
                    <h2>Wireless Headphones</h2>

                    <h3>$129.99</h3>

                    <p>
                        Experience high-quality sound with these wireless headphones.
                        Featuring noise cancellation, long-lasting battery life, and a
                        sleek modern design for everyday use.
                    </p>

                    <button onClick={() => dispatch(addItem(1))}>Add to Cart</button>
                    <button style={{ background: '#c12121', marginLeft: '5px' }} onClick={() => dispatch(removeItem())}>Remove Item</button>
                    <button style={{ background: '#1b1485', marginLeft: '5px', marginTop:'5px' }} onClick={() => dispatch(clearItem())}>Clear All</button>
                </div>
            </div>
        </div>
    );
};

export default Main;