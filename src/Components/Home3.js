
import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Category2 from '../Category2';

const Home3 = () => {
  return (
    <section className='section_3'>
          <div className='sec3_title'>
            <div className='sec3_title1'>
              <h3>Featured Products</h3>
            </div>  

            <div className='sec3_title2'>
              <ul>
                <li><a href="#">All</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruits</a></li>
                <li><a href="#">Coffee & teas</a></li>
                <li><a href="#">Meat</a></li>
              </ul>
            </div>
          </div>

          <div className="sec3_cont">
          {Category2.map((category) => (
            <div key={category.name} className="sec3_cont1">
              <div className="sec3cont1_img1">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="sec3cont1_txt">
                <h3>{category.name}</h3>
                <p className='cont3_star'> <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack></p>
                <h5>By Mr.food</h5>
                <div className='sec3cont_price'>
                  <h4>${category.selling_price}<del>{category.price}</del></h4>
                  </div>
              </div>
            </div>
          ))}
        </div>

        


          {/* <div className='sec3_cont'>

            <div className='sec3_cont1'>

              <div className='sec3cont1_img1'>

                <img src="Rectangle 19.png" alt="" />

              </div>

              <div className='sec3cont1_txt'>
                <p>Vegetables</p>
                <h4>Redish 500g</h4>
                <p className='cont3_star'> <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack></p>
                <h5>By Mr.food</h5>

                <div className='sec3cont_price'>
                  <div><p>$2 <strike>$3.99</strike></p>  </div>

                  <div className='sec3_btn'>
                    <button>Add</button>
                  </div>
                </div>


              </div>

            </div>

            <div className='sec3_cont1'>

              <div className='sec3cont1_img1'>

                <img src="Potato.png" alt="" />

              </div>

              <div className='sec3cont1_txt'>
                <p>Vegetables</p>
                <h4>Potatos 1kg</h4>
                <p className='cont3_star'> <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack></p>
                <h5>By Mr.food</h5>

                <div className='sec3cont_price'>
                  <div><p>$1 <strike>$1.99</strike></p>  </div>

                  <div className='sec3_btn'>
                    <button>Add</button>
                  </div>
                </div>


              </div>

            </div>

            <div className='sec3_cont1'>

              <div className='sec3cont1_img1'>

                <img src="tomato.png" alt="" />

              </div>

              <div className='sec3cont1_txt'>
                <p>Fruits</p>
                <h4>Tomatos 200g</h4>
                <p className='cont3_star'> <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack></p>
                <h5>By Mr.food</h5>

                <div className='sec3cont_price'>
                  <div><p>$0.30 <strike>$0.99</strike></p>  </div>

                  <div className='sec3_btn'>
                    <button>Add</button>
                  </div>
                </div>


              </div>

            </div>

            <div className='sec3_cont1'>

              <div className='sec3cont1_img1'>

                <img src="brocolli.png" alt="" />

              </div>

              <div className='sec3cont1_txt'>
                <p>Vegetables</p>
                <h4>Broccoli 1kg</h4>
                <p className='cont3_star'> <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack></p>
                <h5>By Mr.food</h5>

                <div className='sec3cont_price'>
                  <div><p>$1.50 <strike>$2.99</strike></p>  </div>

                  <div className='sec3_btn'>
                    <button>Add</button>
                  </div>
                </div>


              </div>

            </div>

            <div className='sec3_cont1'>

              <div className='sec3cont1_img1'>

                <img src="green.png" alt="" />

              </div>

              <div className='sec3cont1_txt'>
                <p>Vegetables</p>
                <h4>Green Beans 250g</h4>
                <p className='cont3_star'> <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack></p>
                <h5>By Mr.food</h5>

                <div className='sec3cont_price'>
                  <div><p>$1 <strike>$1.99</strike></p>  </div>

                  <div className='sec3_btn'>
                    <button>Add</button>
                  </div>
                </div>


              </div>

            </div>

          </div> */}

        </section>

  )
}

export default Home3