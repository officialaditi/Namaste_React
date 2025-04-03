import { GiShoppingCart } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="body-container">
        <RestuarantCard resData={resObj} />
        <RestuarantCard
          resName="Persian Darbar"
          rating="4.3"
          location="Andheri"
        />
      </div>
    </div>
  );
};
export default App;

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

const resObj = {
  info: {
    id: "19095",
    name: "Behrouz Biryani",
    cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
    locality: "S.M Road",
    areaName: "Antop Hill",
    costForTwo: "₹500 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.4,
    parentId: "1803",
    avgRatingString: "4.4",
    totalRatingsString: "8.3K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 1.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-04-03 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "bolt/bolt%206.png",
          description: "bolt!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "bolt/bolt%206.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
};

export const RestuarantCard = (props) => {
	const { resData } = props;
	const name = resData?.info?.name || "Restaurant Name";
	const rating = resData?.info?.avgRating || "N/A";
	const cuisines = resData?.info?.cuisines?.join(", ") || "Cuisine";
	const imgId = resData?.info?.cloudinaryImageId;
  
	// Corrected Cloudinary image URL
	const imgUrl = imgId
	  ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`
	  : "https://via.placeholder.com/150"; // Placeholder image if no imgId exists
  
	return (
	  <div className="res-card">
		<div className="res-img">
		  <img alt="restaurant-img" src={imgUrl} />
		</div>
		<div>
		  <h1>{name}</h1>
		  <h2>⭐{rating}</h2>
		  <h3>{cuisines}</h3>
		</div>
	  </div>
	);
  };
