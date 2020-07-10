import React from "react";


// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
function BookList({ children }) {
  console.log("My children",children);
  return <ul className="list-group">{children}TEST</ul>;
}


export default BookList;