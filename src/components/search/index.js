import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import useHistory here.

const Search = () => {
  let navigate = useNavigate();
  // get the history object here

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    navigate('/search?' + searchQuery)
    // imperatively redirect with history.push()
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
