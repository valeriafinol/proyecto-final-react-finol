import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const { deleteProduct } = useCartContext();
  return (
    <>
      <div className="cartContainer">
        <div className="itemCartContainer">
          <div className="cardItemCart">
            <img src={product.image} alt={product.name} className="imageCart" />
            <div>
              <div>
                <h5 className="centerText bolderText textItemCart">
                  {product.name}
                </h5>
                <p className="centerText textItemCart">
                  Quantity: {product.quantity}
                </p>
                <p className="centerText textItemCart">
                  Price per unit: ${product.price}
                </p>
                <p className="centerText textItemCart">
                  Subtotal: ${product.quantity * product.price}
                </p>
                <div className="buttonDeleteCartContainer">
                  <button
                    className="buttonDeleteCart"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
