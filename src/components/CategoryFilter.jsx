import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
export default CategoryFilter;