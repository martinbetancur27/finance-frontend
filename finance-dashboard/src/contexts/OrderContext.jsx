import { createContext } from "react";
import { useState } from "react";

export const OrderContext = createContext();

function OrderContextProvider( {children} ) {

  const [orderItems, setOrderItems] = useState([]);

  const addOrder = (order) => {
    setOrderItems([...orderItems, order]);
  }

  return (
    <OrderContext.Provider value={{ orderItems, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider;