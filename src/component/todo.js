import React, { useState } from "react";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //for btm toggle
  const [toggleSubmit, setToggleSubmit] = useState(true);

  //
  const [isEditItem, setIsEditItems] = useState(null);
  // add items
  const addItems = () => {
    if (!inputData) {
    } 
    else if(inputData && !toggleSubmit){
       setItems(
           items.map((elem) => {
               if(elem.id === isEditItem) {
                   return{ ...elem, name:inputData}
               }
               return elem; 
           })
       )
       setToggleSubmit(true);
       setInputData('');
       setIsEditItems(null);
    }
    else {
        const allInputData = { id: new Date().getTime().toString(), name:inputData}
      setItems([...items, allInputData]);
      setInputData(""); 
    }
  };

  // delete items
  const deleteItem = (index) => {
    // console.log(id);
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  };

  //remove all items 
  const removeAll = () => {
      setItems([]);
  }

  // update items
  const editItem  = (id) => {
     let newEditItem = items.find((elem) => {
         return elem.id === id
     })
     console.log(newEditItem);
     
     setToggleSubmit(false);
     setInputData(newEditItem.name);
     setIsEditItems(id);
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            {
                toggleSubmit ?  <i
                className="fa fa-plus add-btn"
                title="Add Item"          
                onClick={addItems}
              ></i> :
              <i
                className="far fa-edit add-btn"
                title="Update Item"          
                onClick={addItems}
              ></i>
            }
           
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3> {elem.name} </h3>
                  <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    title="Edit Item"
                    onClick={() => editItem(elem.id)}
                  ></i>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() =>  deleteItem(elem.id)}
                  ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span> CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
