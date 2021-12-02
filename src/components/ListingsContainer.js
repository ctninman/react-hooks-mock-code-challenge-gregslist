import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, onDeleteListing}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            setListings={setListings}
            onDeleteListing={onDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
