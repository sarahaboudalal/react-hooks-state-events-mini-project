import React from "react";

function CategoryFilter({categories, onSelectedCategory, selectedCategory}) {

  const categoryButton = categories.map((category) => {
  const className = category === selectedCategory ? "selected" : null;
 return <button key={category}
  className={className}
  onClick={()=> { 
    return onSelectedCategory(category);
  }}
  >
  {category}
  </button>})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
