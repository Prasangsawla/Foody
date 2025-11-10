import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, total, removeFromCart, clearCart } = useCart();

  if (!cart.length) return <p style={{ textAlign: "center" }}>Your cart is empty.</p>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>₹{item.price} × {item.qty}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={clearCart}>Checkout</button>
    </div>
  );
}
