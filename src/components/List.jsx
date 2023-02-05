import React, { useState } from "react";

const List = (props) => {
  const [text, setText] = useState("");
  const [list, setList] = useState(props.data || []);
  const [error, setError] = useState();
  const [editedItem, setEditedItem] = useState(null);
  const [originalValue, setOriginalValue] = useState(list);

  const addTask = (e) => {
    const { value } = e.target;
    setText(value.charAt(0).toUpperCase() + value.slice(1));
  };
  const added = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return setError("Required field");
    } else if (text.length > 25) {
      return setError("You can only have 25 characters.");
    } else {
      e.preventDefault();
      setText("");
      setError("");
    }
    const sendingObject = {
      id: Math.random() * 2,
      name: text,
    };
    console.log(list);

    const newList = [...list, sendingObject];
    setList(newList);

    console.log(newList);
  };

  const deleteTask = (product) => {
    const deletedList = list.filter((item) => {
      return item.id !== product.id;
    });
    setList(deletedList);
    console.log(deletedList);
  };
  const handleEdit = (product) => {
    setEditedItem(product.id);
    console.log(setEditedItem);
  };
  const editedText = (e) => {
    const { value } = e.target;
    const editedList = list.map((item) => {
      if (item.id === editedItem) {
        let newObj = {
          id: item.id,
          name: value,
        };
        return newObj;
      } else {
        return item;
      }
    });
    setList(editedList);
  };
  const updatedTask = (item) => {
    setEditedItem(item);
    setOriginalValue(list);
  };
  const closeTask = () => {
    setList(originalValue);
    setEditedItem(null);
  };
  return (
    <>
      <h1>Task List</h1>
      <div id="newTask">
        <input type="text" name="addItem" onChange={addTask} value={text} />
        <button onClick={added}> + </button>
        <div id="error">{error}</div>
        <ul id="newList">
          {list.map((item, key) => {
            if (item.id === editedItem) {
              return (
                <>
                  <input
                    id="editedInput"
                    type="text"
                    name="editedTask"
                    onChange={(e) => editedText(e)}
                    value={item.name}
                  />
                  <i
                    onClick={updatedTask}
                    className="fa-sharp fa-solid fa-check"
                  ></i>
                  <i onClick={closeTask} className="fa-solid fa-x"></i>
                </>
              );
            }

            return (
              <li key={key} id="newItem">
                {item.name}
                <i
                  onClick={() => handleEdit(item)}
                  className="fa-regular fa-pen-to-square"
                ></i>
                <i
                  onClick={() => deleteTask(item)}
                  className="fa-solid fa-trash"
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
