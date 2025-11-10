import { useParams } from "react-router-dom";
import { restaurants } from "../data";
import MenuItemCard from "../components/MenuItemCard";

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) return <p>Restaurant not found.</p>;

  return (
    <div className="restaurant-page">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.cuisine}</p>
      <div className="menu-list">
        {restaurant.menu.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
