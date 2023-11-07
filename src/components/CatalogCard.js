import { CartContainer } from "../containers/CartContainer";
import { Button } from "./Button";

export function CatalogCard({ item }) {
  const { addToCart } = CartContainer.useContainer();
  return (
    <div className="menu-item border flex flex-col">
      <a href={`/catalog/${item.name}`}>
        <div className="text-bold">{item.name}</div>
      </a>
      <Button color="red" onClick={() => addToCart(item)}>
        Купить
      </Button>
    </div>
  );
}
