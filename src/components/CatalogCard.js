import { CartContainer } from "../containers/CartContainer";
import { Button } from "./Button";

export function CatalogCard({ item }) {
  const { addToCart } = CartContainer.useContainer();
  return (
    <div className="menu-item border flex flex-col">
      <a href={`/catalog/${item.name}`}>
        <div className="text-bold">{item.name}</div>
      </a>
      <p>{item.description}</p>
      <strong>{item.price} руб</strong>
      <Button color="red" onClick={() => addToCart(item)}>
        Купить
      </Button>
    </div>
  );
}
