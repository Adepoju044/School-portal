import { useState } from "react";
import App from "./App.jsx";

function Form({ addItem, listItem }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const part = name.trim().split(/\s+/);
    if (part.length < 3) {
      window.alert("Please enter your first, middle, and last name.");
    } else if (part.length > 3) {
      window.alert("Only input your first name, second name and last name");
    }

    const existingStudent = listItem.find((student) => student.email === email);

    if (existingStudent) {
      window.alert("This email is already being used!");
      return;
    }

    if (!name || !email) return "";
    const tasks = {
      name,
      email,
      id: new Date(),
    };
    addItem(tasks);
    setEmail("");
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="font-bold text-3xl" style={{ marginBottom: "8px" }}>
          Sign up
        </p>
        <label className="font-bold" style={{ marginRight: "10px" }}>
          Name
        </label>
        <input
          type="text"
          className="input-1 w-[60%] md:w-[95%] h-[30px] border border-gray-300 rounded-md focus:outline-none"
          style={{ marginTop: "8px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div style={{ marginTop: "9px" }}>
          <label
            className="font-bold"
            style={{ marginTop: "8px", marginRight: "10px" }}
          >
            Email
          </label>
          <input
            type="email"
            className="input-2 w-[60%] md:w-[95%] h-[30px] border border-gray-300 rounded-md focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button
          className="bg-blue-700 text-[#fff] w-[30px] h-[30px] block font-bold transition duration-300 ease-in-out hover:bg-blue-800 hover:translate-y-[3px] cursor-pointer"
          style={{
            width: "100px",
            height: "40px",
            borderRadius: "5px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          sign up
        </button>
      </form>
    </>
  );
}
export default Form;
