import React from 'react';
import MenuItemCard from './MenuItemCard.jsx';
const MenuSection = ({ items, addToCart, selectedCategory, setSelectedCategory }) => {
  const categories = ['All', ...new Set(items.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Menu</h2>
        
        {/* Category Filter */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MenuSection;