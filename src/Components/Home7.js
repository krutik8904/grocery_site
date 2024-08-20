import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Category4 from '../Category4';
import './Home7.css';

const Home7 = () => {
  return (
    <>
      <div>
        <div className='sec7cont'>

          <h2>Top Sells</h2>
          <h2>Top Rated</h2>
          <h2>Trending Items</h2>
          <h2>Recently Added</h2>

          <div className="sec7_cont">
            {Category4.map((category) => (
              <div key={category.name} className="sec7_cont1">
                <div className="sec7cont1_img1">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="sec7cont1_txt">
                  <h3>{category.name}</h3>
                  <p className='cont7_star'> <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </Stack></p>
                  <h5>By Mr.food</h5>
                  <div className='sec7cont_price'>
                    <h4>${category.selling_price}<del>${category.price}</del></h4>
                  </div>

                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default Home7