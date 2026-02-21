import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const MainContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [order, setOrders] = useState([]);
  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    data.push(newProduct);
    localStorage.setItem("p", JSON.stringify(data));
    readProduct();
  }
  function readProduct() {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    setProduct(data);
  }
  function delProduct(id) {
    let data = JSON.parse(localStorage.getItem("p")) || [];
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("p", JSON.stringify(data));
    readProduct();
  }
  function addOrder(newOrder) {
    let data = JSON.parse(localStorage.getItem("orders")) || [];
    data.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(data));
  }
  function readOrder() {
    let data = JSON.parse(localStorage.getItem("orders")) || [];
    const withCount = data.map((item) => ({ ...item, piece: 1 }));
    setOrders(withCount);

    // setOrders(data);
  }
  function delOrder(id) {
    let data = JSON.parse(localStorage.getItem("orders")) || [];
    data = order.filter((item) => item.id !== id);
    localStorage.setItem("orders", JSON.stringify(data));
    readOrder();
  }

  const values = {
    addProduct,
    readProduct,
    delProduct,
    product,
    addOrder,
    readOrder,
    delOrder,
    setOrders,
    order,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
