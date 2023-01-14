import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
  return (
    <div className="cardItem">
      <img src={info.image} alt={info.name} className="imageItem" />
      <div>
        <div>
          <h5 className="centerText bolderText">{info.name}</h5>
          <p className="centerText">${info.price}</p>
          <div className="buttonContainer">
            <Link to={`/item/${info.id}`}>
              <ul>
                <li className="itemButton">View Detail</li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
