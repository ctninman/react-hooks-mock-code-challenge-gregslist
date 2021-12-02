import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listings, setListings ] = useState([])
  const [ searchListings, setSearchListings] = useState('')

  const searchedList = listings.filter((listing) => {
    if (searchListings === ''){
      return true
    } else {
      const description = listing.description.toUpperCase()
      return description.includes(searchListings.toUpperCase())
    }
  })

  function handleDeleteListing (deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  function handleSearchChange (event) {
    setSearchListings(event.target.value)
  }

  useEffect (() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then(listings => setListings(listings))
  }, [] )

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} searchText={searchListings}/>
      <ListingsContainer
        listings={listings}
        setListings={setListings}
        onDeleteListing={handleDeleteListing} 
      />
    </div>
  );
}

export default App;
