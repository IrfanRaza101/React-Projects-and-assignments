import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./Products.css"

const Products = () => {
  // Array of car models
  const carModels = [
    "Audi A4",
    "Audi A6",
    "Audi Q5",
    "Audi e-tron",
    "Audi Q7",
    "Audi RS7",
    "Audi R8",
    "Audi Q3"
  ];
  
  // Function to generate random price between min and max
  const generateRandomPrice = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
  };
  
  // Function to generate random rating between 1 and 5
  const generateRandomRating = () => {
    return (Math.random() * 4 + 3).toFixed(1);
  };
  
  // Function to generate random review count
  const generateRandomReviews = () => {
    return Math.floor(Math.random() * 200 + 5);
  };
  
  // Function to randomly decide if there's a discount (30% chance)
  const hasDiscount = () => {
    return Math.random() < 0.3;
  };
  
  // Function to generate random discount between 5% and 25%
  const generateRandomDiscount = () => {
    return hasDiscount() ? Math.floor(Math.random() * 20 + 5) : null;
  };

  return (
    <div className='products-section'>
      <h2 className='products-title'>Our Premium Collection</h2>
      <p className='products-description'>Explore our range of high-performance luxury vehicles</p>
      
      <div className='product_container'>
        {carModels.map((model, index) => (
          <ProductCard 
            key={index}
            name={model} 
            image="https://images.dealer.com/ddc/vehicles/2025/Audi/A5/Hatchback/still/front-left/front-left-320-en_US.jpg?impolicy=resize&w=320"
            price={generateRandomPrice(1000, 3000)}
            rating={generateRandomRating()}
            reviews={generateRandomReviews()}
            discount={generateRandomDiscount()}
          />
        ))}
      </div>
    </div>
  )
}

export default Products