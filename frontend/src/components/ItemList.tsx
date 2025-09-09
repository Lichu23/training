import type { Item } from "../App";

interface ItemProps {
  items: Item[]
}



export default function ItemList({items}: ItemProps) {
  return (
    <div>
      {items.map((item) => (
        <div className="border p-2 mt-2">
          <p>Name: {item.nombre}</p>
          <p>Price: {item.precio}</p>
        </div>
      ))}
    </div>
  );
}
