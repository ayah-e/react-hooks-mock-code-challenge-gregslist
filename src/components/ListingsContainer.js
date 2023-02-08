import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, handleDelete }) {
  const mappedItems = items.map((item) => {
    return (
      <ListingCard
        key={item.id}
        id = {item.id}
        description={item.description}
        image={item.image}
        location={item.location}
        handleDelete={handleDelete}
      />
    );
  });
  return (
    <main>
      <ul className="cards">
        {mappedItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
