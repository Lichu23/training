// components/Cart.tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { addToCart, removeFromCart, selectCartTotal } from "./ReduxToolkit";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector(selectCartTotal);

  const handleAdd = () => {
    const newProduct = {
      id: Math.floor(Math.random() * 999),
      name: "Producto " + (cart.length + 1),
      price: Math.floor(Math.random() * 100) + 1,
    };
    dispatch(addToCart(newProduct));
  };

  return (
    <div>
      <h2>Carrito</h2>
      <button onClick={handleAdd}>Agregar producto</button>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => dispatch(removeFromCart(product.id))}>X</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};
