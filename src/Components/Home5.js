import React from 'react';
import './Home5.css'

function ProductCard({ title, image, price, originalPrice, rating, seller, category }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-title">{title}</h3>
        <div className="product-rating">
          <span className="rating-stars">★★★★★</span>
          <span className="rating-count">({rating})</span>
        </div>
        <p className="product-seller">By {seller}</p>
        <div className="product-price">
          <span className="price">${price}</span>
          <span className="original-price">${originalPrice}</span>
        </div>
        <button className="add-to-cart">Add</button>
      </div>
    </div>
  );
}

function Home5() {
  const products = [
    {
      title: 'Redish 500g',
      image: 'Rectangle 19.png',
      price: '2',
      originalPrice: '3.99',
      rating: 4,
      seller: 'Mr.food',
      category: 'Vegetables'
    },
    {
      title: 'Potatos 1kg',
      image: 'Potato.png',
      price: '1',
      originalPrice: '1.99',
      rating: 4,
      seller: 'Mr.food',
      category: 'Vegetables'
    },
    {
      title: 'Tomatos 200g',
      image: 'Rectangle 19 (1).png',
      price: '0.30',
      originalPrice: '0.99',
      rating: 4,
      seller: 'Mr.food',
      category: 'Fruits'
    },
    {
      title: 'Broccoli 1kg',
      image: 'brocolli.png',
      price: '1.50',
      originalPrice: '2.99',
      rating: 4,
      seller: 'Mr.food',
      category: 'Vegetables'
    },
    {
      title: 'Green Beans 250g',
      image: 'green.png',
      price: '1',
      originalPrice: '1.99',
      rating: 4,
      seller: 'Mr.food',
      category: 'Vegetables'
    }
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            seller={product.seller}
            category={product.category}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Home5
