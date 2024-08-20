
import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Home4 = () => {
  return (
    <section className='section_4'>

          <div className='sec4_maindiv'>

            <div className='sec4_div1'>

              <div className='sec4_subdiv'>

                <h4 className='sec4_cont1'>Free Delivery</h4>

                <h2 className='sec4_cont2'>Free delivery  over $50</h2>

                <h3 className='sec4_cont3'>Shop $50 product and get free <br /> delivery anywhere. </h3>

                <button className='sec4_cont4'>Shop Now</button>

              </div>

              <div className='sec4_div1img'>
                <img src="Offer1-img.png" alt="" />
              </div>

            </div>

            <div className='sec4_div2'>

              <div className='sec4_subdiv'>

                <h4 className='sec4_cont11'>60% off</h4>

                <h2 className='sec4_cont2'>Organic Food</h2>

                <h3 className='sec4_cont3'>Save up to 60% off on your <br /> first order </h3>

                <button className='sec4_cont4'>Order Now</button>

              </div>

              <div className='sec4_div2img'>
                <img src="Offer2-img.png" alt="" />
              </div>

            </div>

          </div>

        </section>
  )
}

export default Home4