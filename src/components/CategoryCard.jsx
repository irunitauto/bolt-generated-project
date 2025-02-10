import React from 'react';
import './CategoryCard.css';

function CategoryCard({ title, count, imageUrl }) {
  return (
    <div className="category-card">
      <div className="category-icon">
        {imageUrl ? <img src={imageUrl} alt={title} /> : <span></span>} {/* Placeholder for icon */}
      </div>
      <h3>{title}</h3>
      <p>{count} recipes</p>
      <button>View Recipes</button>
    </div>
  );
}

export default CategoryCard;
