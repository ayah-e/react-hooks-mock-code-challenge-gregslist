import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDelete}) {
  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    setFavorite(favorite => !favorite);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    handleDelete(id)
    console.log(id)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick = {handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick = {handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick = {handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
