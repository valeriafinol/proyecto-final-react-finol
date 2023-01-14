import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import cartImage from "../../assets/cart.png";
import "./cartWidget.css";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <div className="cartContainer">
      <Link to="/cart">
        <img className="cartIcon" src={cartImage} alt="cart"></img>
      </Link>
      <p className="cartNumber">{totalProducts() || ""}</p>
    </div>
  );
};

export default CartWidget;
