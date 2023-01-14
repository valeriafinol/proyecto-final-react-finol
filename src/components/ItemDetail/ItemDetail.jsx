import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAddHandler = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <>
      <div className="itemDetailContainer">
        <div className="cardItemDetail">
          <img src={data.image} alt={data.name} className="imageDetail" />
          <div>
            <div>
              <h5 className="centerText bolderText textItemDetail">
                {data.name}
              </h5>
              <p className=" textItemDetail">{data.description}</p>
              <p className="centerText textItemDetail">${data.price}</p>
              <div className="buttonGoToCartContainer">
                {goToCart ? (
                  <button className="buttonGoToCart">
                    <Link to="/cart">Got to cart</Link>
                  </button>
                ) : (
                  <ItemCount initial={0} stock={50} onAdd={onAddHandler} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
