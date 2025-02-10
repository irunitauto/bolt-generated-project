import React from 'react';
import './FeaturedRecipesCarousel.css';

function FeaturedRecipesCarousel() {
  // Dummy recipe data for carousel
  const featuredRecipes = [
    {
      id: 1,
      title: 'Beef Recipes',
      description: 'Explore our collection of delicious beef recipes, from steaks to roasts and...',
      imageUrl: '/images/beef-recipe.jpg',
      time: '30-1:20 mins',
      category: 'Beef',
      tags: ['beef', 'dinner', 'various']
    },
    {
      id: 2,
      title: 'Salmon Recipes',
      description: 'Discover the best ways to prepare salmon with our comprehensive recipe...',
      imageUrl: '/images/salmon-recipe.jpg',
      time: '30-45 mins',
      category: 'Salmon',
      tags: ['seafood', 'healthy']
    },
    {
      id: 3,
      title: 'Chicken Recipes',
      description: 'Find the perfect chicken recipe for any occasion, from quick weeknight meals t...',
      imageUrl: '/images/chicken-recipe.jpg',
      time: '30-90 mins',
      category: 'Chicken',
      tags: ['poultry', 'versatile']
    },
    {
      id: 4,
      title: 'Seafood Recipes',
      description: 'Explore our seafood recipes for delicious ways to prepare fish, shrimp, and other...',
      imageUrl: '/images/seafood-recipe.jpg',
      time: '15-45 mins',
      category: 'Seafood',
      tags: ['seafood', 'healthy']
    },
  ];

  return (
    <div className="featured-recipes-carousel">
      <div className="container">
        <h2>Featured Recipes</h2>
        <p className="section-description">Discover our hand-picked selection of recipes that are perfect for any occasion</p>
        <div className="carousel">
          {featuredRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
              <div className="recipe-details">
                <div className="recipe-top">
                  <span className="recipe-category">{recipe.category}</span>
                  <span className="recipe-time">{recipe.time}</span>
                </div>
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-bottom">
                  <div className="recipe-tags">
                    {recipe.tags.map((tag, index) => (
                      <span key={index} className="recipe-tag">{tag}</span>
                    ))}
                  </div>
                  <button className="view-button">View Recipe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedRecipesCarousel;
