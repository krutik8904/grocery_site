
import React from 'react';
import './Home2.css';
import '../Category'
import Category from '../Category';

function Home2() {
  return (
    <div className="container">
      <div className='categories_title'>
      <h6>Explore Categories</h6>
      <div className="categories">
        <ul className="filter-list">
          <li className="filter-item">
            <a href="#" className="active">
              All
            </a>
          </li>
          <li className="filter-item">
            <a href="#">Vegetables</a>
          </li>
          <li className="filter-item">
            <a href="#">Fruits</a>
          </li>
          <li className="filter-item">
            <a href="#">Coffe & teas</a>
          </li>
          <li className="filter-item">
            <a href="#">Meat</a>
          </li>
        </ul>
        </div>
        </div>
        <div className="grid">
          {Category .map((category) => (
            <div key={category.name} className="category-item">
              <div className="image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="details">
                <h3>{category.name}</h3>
                <p>{category.count} Items</p>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="arrow">→</button> */}
      </div>
   
  );
}

export default Home2;