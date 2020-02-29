import React from 'react';
import './SearchBox.css';
const SearchBox = () => {
   return(
    <div class="search-bar">
     <input type="text" class="input" placeholder="&nbsp;"/>
      <span className="label">Search</span>
      <span className="highlight"></span>
       <div className="search-btn">
        <span><i className="search icon"></i></span>
       </div>
    </div>
   );
}
export default SearchBox;