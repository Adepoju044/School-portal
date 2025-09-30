export default function Edit({
  isEditing,
  selectedStudent,
  setSelectedStudent,
  handleSave,
  cancel,
}) {
  if (!isEditing || !selectedStudent) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent({ ...selectedStudent, [name]: value });
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="shadow-2xl rounded-md  bg-white  w-96 h-[280px] "
        style={{ padding: "10px" }}
      >
        <h1
          style={{ marginTop: "20px" }}
          className="text-3xl font-bold text-center"
        >
          📝Edit student
        </h1>
        <label className="font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={selectedStudent.name}
          onChange={handleChange}
          className="w-full h-[30px] border focus:outline-0 border-gray-300"
          style={{
            borderRadius: "2px",
            marginTop: "5px",
            marginBottom: "8px",
          }}
        ></input>
        <label className="font-bold">Email</label>
        <input
          type="email"
          name="email"
          value={selectedStudent.email}
          onChange={handleChange}
          className="w-full h-[30px] border focus:outline-0 border-gray-300"
          style={{
            borderRadius: "2px",
            marginTop: "5px",
            marginBottom: "17px",
          }}
        ></input>
        <div className="flex gap-4 mt-4 justify-end">
          <button
            className="w-[68px] h-[37px] px-3 py-2 border border-gray-300 font-semibold rounded hover:bg-gray-300 transition-all duration-300 hover:translate-y-[2px] cursor-pointer"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white  w-[110px] h-[35px] rounded font-bold hover:bg-blue-800 transition-all duration-300 hover:translate-y-[2px] cursor-pointer"
            onClick={() => handleSave(selectedStudent)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
