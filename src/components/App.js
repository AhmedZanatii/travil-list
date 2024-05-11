import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";
import "../index.css";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleTOggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleTOggleItem={handleTOggleItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
