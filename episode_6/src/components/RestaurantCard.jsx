import { IoTime } from "react-icons/io5";
import { IMG_CDN_URL } from "../utils/constant";

const RestuarantCard = ({ info }) => {
  return (
    <>
      <div className="res-card">
        <div className="res-img">
          <img alt="card-img" src={IMG_CDN_URL + info.cloudinaryImageId} />
        </div>
        <div>
          <div>
            <h3 className="card-title">{info.name}</h3>
            <div className="card-content">
              <h2>⭐{info.avgRating}</h2>
              <h2>
                <IoTime />
                {info.sla.deliveryTime} min
              </h2>
            </div>
            <h3 className="card-location">📍 {info.areaName}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestuarantCard;
