import React, { useEffect, useState } from "react";
import scss from "./Order.module.scss";
import { useProduct } from "../../context/MainContext";
const Order = () => {
  const { readOrder, delOrder, order, setOrders } = useProduct();
  // const [piece, setPiece] = useState(1);

  useEffect(() => {
    readOrder();
  }, []);
  return (
    <div>
      <div className="container">
        <div className={scss.menu_text}>
          <h1>ME ORDERS</h1>
        </div>
        <div className={scss.orders_cards}>
          {order.map((item, idx) => (
            <div className={scss.order_card} key={idx}>
              <img src={item.img} alt="" />
              <div className={scss.name_price}>
                <h4> {item.name} </h4>
                <p> {item.price * item.piece} сом</p>
              </div>
              <div className={scss.order_delete}>
                <button
                  className={scss.delete}
                  onClick={() => delOrder(item.id)}
                >
                  delete order
                </button>
                <div className={scss.plus_minus}>
                  <button
                    onClick={() => {
                      setOrders((prev) =>
                        prev.map((el, i) =>
                          i === idx
                            ? { ...el, piece: el.piece > 1 ? el.piece - 1 : 1 }
                            : el
                        )
                      );
                    }}
                  >
                    -
                  </button>
                  <p>{item.piece}X</p>

                  <button
                    onClick={() => {
                      // setPiece(piece + 1);
                      setOrders((prev) =>
                        prev.map((el, i) =>
                          i === idx ? { ...el, piece: el.piece + 1 } : el
                        )
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
