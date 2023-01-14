import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./home.css";

const Home = ({ greeting }) => {
  return (
    <>
      <div className="heroContainer">
        <p className="storeName">THE CLOTHING STORE</p>
      </div>
      <div>
        <p className="pGreeting">{greeting}</p>
      </div>
      <ItemListContainer />
    </>
  );
};

export default Home;
