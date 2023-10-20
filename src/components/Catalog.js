import { menu } from "../menu";
import { Button } from "./Button";
import { useState } from "react";

export function Catalog() {
  const [cart, setCart] = useState([]);

  return (
    <div className="flex flex-col gap-10">
      <a href="/cart">Смотреть корзину</a>
      Корзина:
      <ul>
        {cart.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      Меню
      <div className="grid gap-2 grid-cols-4">
        {menu.map((item) => (
          <div className="menu-item border flex flex-col">
            <a href={`/catalog/${item.name}`}>
              <div className="text-bold">{item.name}</div>
            </a>
            <Button color="red" onClick={() => setCart([...cart, item])}>
              Купить
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
