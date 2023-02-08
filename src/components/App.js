import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [items, setItems] = useState([]);

useEffect(() => {
fetch("http://localhost:6001/listings")
.then(response => response.json())
.then(data => setItems(data))
},[])
// console.log(items);

// const [removedItems, setRemovedItems] = useState([]);
function handleDelete(id){
const filteredArray = items.filter((item) => item.id !== id)
setItems(filteredArray)
}

  return (
    <div className="app">
      <Header />
      <ListingsContainer items = {items} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
