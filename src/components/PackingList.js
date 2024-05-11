import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  setItems,
  items,
  handleDelete,
  handleTOggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "packed")
    sortedItems = items.sort((a, b) => a.packed - b.packed);
  if (sortBy === "description")
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  function handleClear() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    } else {
      return;
    }
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            handleTOggleItem={handleTOggleItem}
          />
        ))}
      </ul>
      <div>
        {items.length > 1 ? (
          <select
            className="actions"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value={"packed"}>sort by packed item</option>
            <option value={"description"}>sort by description item</option>
            <option value={"input"}>sort by input item</option>
          </select>
        ) : (
          ""
        )}
        {items.length ? (
          <button className="actions" onClick={handleClear}>
            {" "}
            Clear
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
