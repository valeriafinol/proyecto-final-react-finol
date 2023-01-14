import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import emptyCartImage from "../../assets/empty-cart.png";
import ItemCart from "../ItemCart/ItemCart";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="emptyCartContainer">
          <p className="emptyCartText">Your cart is empty</p>
          <img
            src={emptyCartImage}
            className="emptyCartImage"
            alt="empty-cart"
          />
          <Link to="/">
            <button className="buttonBuyProducts">Buy products!</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="totalPriceCart">Total Price: ${totalPrice()}</p>

      {cart.length === 0 ? (
        <span></span>
      ) : (
        <>
          <Link to="/checkout">
            <div className="buttonFinishOrderContainer">
              <button className="buttonFinishOrder">Finish your order</button>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default Cart;
