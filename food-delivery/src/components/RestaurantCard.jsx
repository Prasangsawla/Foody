import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function RestaurantCard({ res }) {
  return (
    <div className="card">
      <img src={"lounge.jpg"} alt={res.name} className="card-img" />
      <div className="card-content">
        <h3>{res.name}</h3>
        <p>{res.cuisine}</p>
        <div className="rating">
          <Star size={16} /> {res.rating}
        </div>
        <Link to={`/restaurant/${res.id}`}>
          <button className="btn">View Menu</button>
        </Link>
      </div>
    </div>
  );
}
