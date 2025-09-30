import List from "./list.jsx";

export default function PackingList({ items, deleteList, handleEdit }) {
  return (
    <ul>
      {items.map((item) => (
        <List
          key={item.id}
          item={item}
          deleteList={deleteList}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
}
