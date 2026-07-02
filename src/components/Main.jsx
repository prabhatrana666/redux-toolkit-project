import "./Main.css";

const Main = () => {
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

          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Main;