import { useState } from "react";
import Header from "./header.jsx";
import Form from "./form.jsx";
import PackingList from "./packingList.jsx";
import Section from "./section.jsx";
import Edit from "./edit.jsx";
function App() {
  const [listItem, setListItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  function addItem(items) {
    setListItem((prev) => [...prev, items]);
  }

  function deleteList(id) {
    setListItem(listItem.filter((item) => item.id !== id));
  }
  function handleEdit(item) {
    setIsEditing(true);
    setSelectedStudent(item);
  }
  function handleSave(updatedText) {
    setListItem(
      listItem.map((item) => (item.id === updatedText.id ? updatedText : item))
    );
    setIsEditing(false);
  }
  function cancel() {
    setSelectedStudent(false);
  }
  return (
    <div className="container bg-gray-200 min-h-screen w-full">
      <Edit
        isEditing={isEditing}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        handleSave={handleSave}
        items={listItem}
        cancel={cancel}
      />
      <Header />
      <div
        className="flex justify-center items-start"
        style={{ paddingTop: "120px" }}
      >
        <div
          className="fixed top-[120px] left-1/2 transform -translate-x-1/2 w-full md:w-[600px] bg-white mx-auto shadow-lg h-[600px] overflow-y-auto"
          style={{ borderRadius: "5px", padding: "24px" }}
        >
          <Form addItem={addItem} listItem={listItem} />
          <Section />
          <PackingList
            items={listItem}
            deleteList={deleteList}
            handleEdit={handleEdit}
            setSelectedStudent={setSelectedStudent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
