import { useState } from "react";
import { restaurantList } from "../utils/data";
import RestuarantCard from "./RestaurantCard";
import Search from "./Search";

const Body = () => {

  const [listOfRestuarant, setListOfRestuarnt] = useState(restaurantList)
  const topRatedResHandler = () => {
  const topRated =  listOfRestuarant.filter((res) => res.data.avgRating < 4);
  setListOfRestuarnt(topRated)
  };
  
  return (
    <>
      <Search />

      <h1 className="body-heading">Top Restaurant List</h1>
      <button
        className="filter-TopRated-Restaurant"
        onClick={topRatedResHandler}
      >
        Top Rated Restaurants
      </button>
      <div className="body-container">
        {listOfRestuarant.map((restaurant) => (
          <RestuarantCard info={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
