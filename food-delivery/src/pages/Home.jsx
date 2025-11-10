import { restaurants } from "../data";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  return (
    <section className="grid">
      {restaurants.map((res) => (
        <RestaurantCard key={res.id} res={res} />
      ))}
    </section>
  );
}
