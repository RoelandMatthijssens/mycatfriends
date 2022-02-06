import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Counter({ id }) {
  const [count, setCount] = useState(0);

  const store_likes = async () => {
    try {
      await AsyncStorage.setItem(id, JSON.stringify(count));
    } catch (e) {
      console.log(e);
    }
  };
  const retrieve_likes = async () => {
    try {
      const stored_likes = await AsyncStorage.getItem(id);
      if (stored_likes !== null) {
        setCount(JSON.parse(stored_likes));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    retrieve_likes();
  }, []);
  useEffect(() => {
    store_likes(count);
  }, [count]);

  return (
    <div className="Counter flex mr2" onClick={() => setCount(count + 1)}>
      <div className="f3 mt2">{count}</div>
      <AiOutlineHeart className="f1" />
    </div>
  );
}

export default Counter;
