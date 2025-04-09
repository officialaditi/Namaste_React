import { GiShoppingCart } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
const App = () => {
  return (
    <>
      <Navbar />
      <Body>
        <RestuarantCard />
      </Body>
    </>
  );
};

export default App;

const data = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5",
    name: "Persian Darbar",
    rating: "4.3",
    location: "Andheri",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    name: "Chinese Wok",
    rating: "4.1",
    location: "Antop Hill",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_426441.JPG",
    name: "Big Bowl",
    rating: "3.8",
    location: "Sion",
  },
];

export const Body = () => {
  return (
    <>
      <div className="body-container">
        {data.map((data, i) => (
          <RestuarantCard info={data} key={i} />
        ))}
      </div>
    </>
  );
};

export const Navbar = () => {
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

export const RestuarantCard = ({ info }) => {
  console.log(info);
  return (
    <>
      <div className="res-card">
        <div className="res-img">
          <img alt="card-img" src={info.img} />
        </div>
        <div>
          <div>
            <h1>{info.name}</h1>
            <h2>⭐{info.rating}</h2>
            <h3>
              <IoLocation /> {info.location}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
