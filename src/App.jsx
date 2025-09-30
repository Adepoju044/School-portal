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
    <div className="container bg-gray-200 min-h-screen w-[100%]">
      <Edit
        isEditing={isEditing}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        handleSave={handleSave}
        items={listItem}
        cancel={cancel}
      />
      <Header />
      <div className="flex justify-center items-center  overflow-hidden fixed left-1/2">
        <div className="components w-full md:w-[600px] bg-[#fff] mx-auto min-h-[560px] md:min-h-[580px] shadow-lg fixed top-[15%]">
          <Form addItem={addItem} />
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
