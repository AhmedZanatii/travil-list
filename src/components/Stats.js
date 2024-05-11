export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "All Done"
          : totalItems === 0
          ? `start input item`
          : packedPercentage === 0
          ? `Start pick item`
          : `💼You Have ${totalItems} item on your list, and you already pocked 
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
