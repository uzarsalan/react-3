import { CartContainer } from "../containers/CartContainer";

export function Cart() {
  const { cart, removeFromCart, clearCart } = CartContainer.useContainer();
  return (
    <div>
      Корзина:
      <div className="flex flex-col gap-1">
        {cart.map((cartItem) => (
          <div className="flex gap-5">
            <div>{cartItem.name}</div>
            <button onClick={() => removeFromCart(cartItem.name)}>
              удалить
            </button>
          </div>
        ))}
      </div>
      <button onClick={clearCart}>Очистить</button>
      <a href="/order">Заказать</a>
    </div>
  );
}
