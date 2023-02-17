import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const ItemContext = createContext();

export const Provider = (props) => {
    const [sushi, setSushi] = useState([]);
  
    return (
      <ItemContext.Provider value={[sushi, setSushi]}>
        {props.children}
      </ItemContext.Provider>
    )
  }

export default ItemContext;