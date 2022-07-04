import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const {search} = props;
  return (
     <div>
  <nav>
    <input type = 'text' placeholder ='City' background = 'green'></input>
    <button type='submit' onClick={search}>Add</button>
  </nav>
  </div>
  )
};