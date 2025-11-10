import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Foodify</Link>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <ShoppingCart /> ({itemCount})
        </Link>
      </div>
    </nav>
  );
}
