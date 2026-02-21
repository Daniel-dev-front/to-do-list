import React, { useState } from "react";
import scss from "./Admin.module.scss";
import { useProduct } from "../../context/MainContext";
const Admin = () => {
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const handleClick = () => {
    const newTask = {
      name: name,
      price: price,
      img: img,
      id: Date.now(),
    };
    addProduct(newTask);
    setName("");
    setPrice("");
    setImg("");
  };
  function checkFood() {
    const span = document.createElement("span");
    span.textContent = "Добавлено в Menu загляните чтобы увидеть свой товар ;)";
    span.style.marginTop = "20px";
    span.style.left = "490px";
    span.style.position = "fixed";
    span.style.backgroundColor = "#00000080";
    span.style.opacity = "1";
    span.style.width = "550px";
    span.style.height = "60px";
    span.style.borderRadius = "30px";
    span.style.display = "flex";
    span.style.justifyContent = "center";
    span.style.alignItems = "center";
    span.style.color = "#ffffff";
    span.style.fontFamily = "inter";
    span.style.transition = "opacity 1s ease";
    document.body.prepend(span);
    setTimeout(() => {
      span.style.opacity = "0";
    }, 2000);
  }
  return (
    <div>
      <div className="container">
        <div className={scss.admin_text}>
          <h1>CREATE PRODUCT</h1>
        </div>
        <div className={scss.admin_content}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Food name"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="price"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="URL image"
          />
          <button
            onClick={() => {
              handleClick();
              checkFood();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
