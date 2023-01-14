import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const [id, setId] = useState();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { totalPrice, cart, clearCart } = useCartContext();

  const order = {
    form,
    items: cart.map((product) => ({
      name: product.name,
      id: product.id,
      quantity: product.quantity,
      price: product.price,
    })),
    total: totalPrice(),
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setId(res.id);
      clearCart();
    });
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {typeof id !== "undefined" ? (
        <div>
          <p className="orderMessage">Your order # {id} has been succesfully completed</p>
          <Link to="/" className="buyAgainButtonContainer">
            <button className="buttonBuyProducts">Buy again!</button>
          </Link>
        </div>
      ) : (
        <div className="formContainer">
          <form onSubmit={submitHandler} className="form">
            <div className="labelsForm">
              <label htmlFor="name" className="labelText">
                Name
              </label>
              <input
                name="name"
                id="name"
                value={form.name}
                onChange={changeHandler}
              />
            </div>
            <div className="labelsForm">
              <label htmlFor="email" className="labelText">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <div>
              <button onClick={submitHandler} className="submitButton">Submit Order</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default Checkout;
