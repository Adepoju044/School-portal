function List({ item, deleteList, handleEdit }) {
  return (
    <li
      className="flex gap-4 border-b-2 border-gray-300 items-center justify-between"
      style={{ marginTop: "10px", flexWrap: "nowrap", marginBottom: "15px" }}
    >
      <div className="flex-col flex md:flex-row md:gap-4">
        <p style={{ flexWrap: "nowrap" }} className="whitespace-nowrap">
          {item.name}
        </p>
        <p>{item.email}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-gray-400 text-[#fff] font-bold whitespace-nowrap transition-all duration-200 hover:bg-gray-500 hover:translate-y-[1px] cursor-pointer"
          style={{
            width: "75px",
            height: "40px",
            borderRadius: "5px",
            marginBottom: "3px",
            padding: "10px",
          }}
          onClick={() => handleEdit(item)}
        >
          Edit
        </button>
        <button
          className="bg-red-700 text-[#fff] font-bold transition-all duration-200 hover:bg-red-800 hover:translate-y-[1px] hover:text-white cursor-pointer"
          style={{
            width: "70px",
            height: "40px",
            borderRadius: "5px",
            marginBottom: "3px",
            padding: "5px",
          }}
          onClick={() => deleteList(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default List;
