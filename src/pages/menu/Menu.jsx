import React, { useEffect } from "react";
import scss from "./Menu.module.scss";
import { useProduct } from "../../context/MainContext";
const Menu = () => {
  const { readProduct, product, addOrder } = useProduct();

  useEffect(() => {
    readProduct();
  }, [readProduct]);
  function checkFood() {
    const span = document.createElement("span");
    span.textContent = "Товар добавлен в корзину (orders) ;)";
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
    <div className="container">
      <div className={scss.menu_text}>
        <h1>MENU</h1>
      </div>
      <div className={scss.menu_cards}>
        {product.map((item, idx) => (
          <div className={scss.menu_card} key={idx}>
            <img src={item.img} alt="" />
            <h4> {item.name} </h4>
            <div className={scss.menu_price}>
              <p>{item.price} сом</p>
              <button
                onClick={() => {
                  addOrder({ ...item });
                  checkFood();
                }}
              >
                to order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
