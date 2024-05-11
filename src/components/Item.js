export default function Item({ item, handleDelete, handleTOggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleTOggleItem(item.id)}
      ></input>
      <span
        style={item.packed ? { textDecoration: "line-through" } : null}
        onKeyDown={item.id}
      >
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
