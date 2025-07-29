import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import SearchItem from "./components/SearchItem";
export interface Item {
  nombre: string | null;
  precio: number | null;
}

function TemListView() {
  const [items, setItems] = useState<Item[]>([]);
  const [nombreItem, setNombreItem] = useState<string>("");
  const [precioItem, setPrecioItem] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombreNuevoItem = nombreItem.trim();
    setItems((prevState) => [
      ...prevState,
      { nombre: nombreNuevoItem, precio: precioItem },
    ]);

    setNombreItem("");
    setPrecioItem(0);
  };

  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredItems(items);
    } else {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const newFilteredItems = items.filter((item) =>
        item.nombre?.toLowerCase().includes(lowerCaseSearchValue)
      );
      setFilteredItems(newFilteredItems);
    }
  }, [items, searchValue]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>Item List</h1>
      {nombreItem}
      <form onSubmit={handleAddItem} className="flex flex-col" action="">
        <label htmlFor="">Name</label>
        <input
          autoFocus
          value={nombreItem}
          onChange={(e) => setNombreItem(e.target.value)}
          className="border-1"
          type="text"
        />
        <label htmlFor="">Price</label>
        <input
          value={precioItem}
          onChange={(e) => setPrecioItem(Number(e.target.value))}
          className="border-1"
          type="text"
        />
        <button className="border p-1 rounded-xl mt-2">Create Item</button>
      </form>


      <h2 className="mt-4">Items:</h2>
      <SearchItem searchValue={searchValue} setSearchValue={setSearchValue}/>

      {items.length > 0 ? (
        <ItemList items={filteredItems} />
      ) : (
        <p className="text-gray-500">No items added yet.</p>
      )}
    </div>
  );
}

export default TemListView;
