import { useCart } from "../context/CartContext";

export default function MenuItemCard({ item }) {
  const { addToCart } = useCart();
  return (
    <div className="menu-item">
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>
      <button onClick={() => addToCart(item)}>Add</button>
    </div>
  );
}
