import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [items, setItems] = useState([]);
const [search, setSearch] = useState("");

function handleSearch(e){
  setSearch(e.target.value);
}
const filteredItems = items.filter(freeItem => freeItem.description.toLowerCase().includes(search.toLowerCase()));

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
      <Header handleSearch = {handleSearch}/>
      <ListingsContainer items = {filteredItems} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
