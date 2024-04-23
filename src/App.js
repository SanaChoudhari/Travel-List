import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAdditem(item) {
    setItems((items) => [...items, item]);
  }
  function HandlerDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function HandleClear() {
    const confirm = window.confirm("Are you sure you want to delete all items");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAdditem} />
      <PackingList
        items={items}
        onDeleteItem={HandlerDelete}
        onToggleItem={handleToggleItem}
        onClearItems={HandleClear}
      />

      <Stats items={items} />
    </div>
  );
}
