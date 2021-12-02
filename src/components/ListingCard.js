import {useState} from "react";

function ListingCard({listing, onDeleteListing}) {

const [favorite, setFavorite] = useState(false)

const {id, description, location, image} = listing

function toggleFavorite () {
  setFavorite((currentDisplay) => !currentDisplay)
}

function handleDeleteClick() {
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
  })
    .then((res) =>res.json())
    .then(() => onDeleteListing(listing))
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className="emoji-button favorite active" onClick={toggleFavorite}>{favorite ? '★' : '✩'} </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
