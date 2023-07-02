import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Store/dataSlice";

export default function Form() {
  const dispatch = useDispatch();

  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [trueValues, setTrueValues] = useState([]);

  const MAX_WORD_COUNT = 250;

  const handleNameChange = (e) => {
    setUserID(e.target.value);
  };

  const handletitleChange = (e) => {
    const { value } = e.target;
    setTitle(value.substring(0, MAX_WORD_COUNT));
  };

  const handleTrueChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTrueValues((prevValues) => [...prevValues, value]);
    } else {
      setTrueValues((prevValues) => prevValues.filter((v) => v !== value));
    }
  };

  const handleSubmit = () => {
    dispatch(
      addTodo({
        status: trueValues.includes("True") ? "completed" : "incomplete",
        judul: title,
        userid: userID,
      })
    );
    setUserID("");
    setTitle("");
    setTrueValues([]);
  
    console.log("Todo submitted:", {
      status: trueValues.includes("True") ? "completed" : "incomplete",
      judul: title,
      userid: userID,
    });
  };
  

  return (
    <div
      className="rounded-md bg-blue-200 flex flex-col"
      style={{ width: "700px", height: "250px" }}
    >
      <p className="block mb-2 font-bold text-center">Form ToDo List</p>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-6 flex flex-col">
          <div className="flex justify-center">
            <div>
              <div className="mb-4">
                <label htmlFor="userID" className="block mb-2 font-bold">
                  UserID :
                </label>
                <input
                  type="text"
                  id="governorName"
                  value={userID}
                  onChange={handleNameChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="true" className="block mb-2 font-bold">
                  Status:
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="true"
                    value="True"
                    checked={trueValues.includes("True")}
                    onChange={handleTrueChange}
                    className="mr-2"
                  />
                  <p>Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex flex-col">
          <div className="flex justify-center">
            <div>
              <div className="mb-4">
                <label htmlFor="userID" className="block mb-2 font-bold">
                  Title :
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handletitleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                  style={{
                    width: "300px",
                    height: "100px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-white text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-700"
          style={{
            width: "100px",
            height: "40px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
