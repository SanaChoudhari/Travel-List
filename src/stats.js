export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItems) * 100);
  console.log(packedItem, percentage);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go ✈️"
          : `you have theses many items on your list, pack it soon`}
      </em>
    </footer>
  );
}
