import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const queryDatabase = getFirestore();
    const queryDoc = doc(queryDatabase, "products", itemId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [itemId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
