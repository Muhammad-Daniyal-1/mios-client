import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OrderContext from './OrderContext'



const OrderState = (props) => {
  const host = process.env.REACT_APP_API_URL;
  const [userOrders, setUserOrders] = useState([]);

  const getMyOrders = async () => {
    const { data } = await axios.get(`${host}/api/order/myOrders`);
    setUserOrders(data);
  }

  useEffect(() => {
    getMyOrders();
  }, [])




  return (
    <OrderContext.Provider value={{ userOrders, getMyOrders }}>
      {props.children}
    </OrderContext.Provider>
  )
}




export default OrderState;