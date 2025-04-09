import { GiShoppingCart } from "react-icons/gi";
 const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>FoodOnClick</h1>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="other-feature">
        <div className="cart-container">
          <span className="cart">
            <GiShoppingCart size={35} />{" "}
          </span>
          <span className="cart_count">0</span>
        </div>
        <button className="login_btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;