import { useEffect, useState } from "react";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const topRatedResHandler = () => {
    const topRated = listOfRestaurant.filter((res) => res.info.avgRating <= 4);
    setListOfRestaurant(topRated);
  };

  const fetchingApi = async () => {
    try {
      const fetchData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.015571&lng=72.864846&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await fetchData.json();
      const restaurants =
        response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurant(restaurants || []);

      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingApi();
  }, []);

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <h1 className="body-heading">Top Restaurant List</h1>
      <button
        className="filter-TopRated-Restaurant"
        onClick={topRatedResHandler}
      >
        Top Rated Restaurants
      </button>
      <div className="body-container">
        {listOfRestaurant.map((restaurant) => (
          <RestuarantCard key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
