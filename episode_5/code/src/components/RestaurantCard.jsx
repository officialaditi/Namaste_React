
import { IoTime } from "react-icons/io5";
import { IMG_CDN_URL } from "../utils/constant";

const RestuarantCard = ({ info }) => {
    
    return (
      <>
        <div className="res-card">
          <div className="res-img">
            <img alt="card-img" src={IMG_CDN_URL + info.data.cloudinaryImageId} />
          </div>
          <div>
            <div>
              <h3 className="card-title">{info.data.name}</h3>
             <div className="card-content">
             <h2>⭐{info.data.avgRating}</h2>
           <h2><IoTime/>{info.data.deliveryTime}</h2>
             </div>
             <h3 className="card-location">📍 {info.data.locality}</h3>
            </div>
          </div>
        </div>
      </>
    );
  };
export default RestuarantCard;  