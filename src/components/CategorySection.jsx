import React from 'react';
import CategoryCard from './CategoryCard';
import './CategorySection.css';

function CategorySection() {
  return (
    <div className="category-section">
      <div className="container">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <CategoryCard title="Chicken Recipes" count={12} imageUrl="/images/chicken-icon.png" />
          <CategoryCard title="Beef Recipes" count={15} imageUrl="/images/beef-icon.png" />
          <CategoryCard title="Salmon Recipes" count={8} imageUrl="/images/salmon-icon.png" />
          <CategoryCard title="Seafood Recipes" count={10} imageUrl="/images/seafood-icon.png" />
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
