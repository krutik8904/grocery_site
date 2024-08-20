
import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Category3 from '../Category3';

const Home6 = () => {
  return (
    <section className='section_5'>

      <div className='sec5_title'>

        <div>
          <h3 className='sec5_h3'>Daily Best Sells</h3>
        </div>

        <div className='sec5_ul'>
          <ul>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">New</a></li>
          </ul>
        </div>

        <div className='sec5_span'>
          <span>Expires in: 10 : 56 : 21</span>
        </div>

      </div>

      <section className='section_3'>


        <div className="sec3_cont">
          {Category3.map((category) => (
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
                  <h4>${category.selling_price}<del>${category.price}</del></h4>
                </div>
                <div className='sec3_btn'>
                  <button>Add</button>
                </div>
              </div>
            </div>

          ))}
          <div className='sec3_cont2'>

            <div >

              <h2 className='sell_h2'>10% OFF</h2>

              <h6 className='sell_h6'>For new member sign up at <br />
                <span className='sellh6_span'>  the first time </span> </h6>

              <div className='sell_components'>
                <p>Email address* </p>
                <input type="text" name="mail" id="mail" placeholder='krutik@gmail.com' className='sell_ip1' />

                <br />

                <p className='sell_pwtitle'>Password*</p>
                <input type="text" name="pass" id="pass" placeholder='maximum character' className='sell_ip2' />

                <br />

                <button className='sell_btn'>Register Now</button>
              </div>

            </div>
          </div>

        </div>


        {/* 
        <div className='sec3_cont'>

          <div className='sec3_cont1'>

            <div className='sec3cont1_img1'>

              <img src="torino.png" alt="" />

            </div>

            <div className='sec3cont1_txt'>
              <p>Coffe & teas</p>
              <h4>Coffe 1kg</h4>
              <p className='cont3_star'> <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack></p>
              <h5>By Mr.food</h5>

              <div className='sec3cont_price'>
                <div><p>$20 <strike>$25</strike></p>  </div>

                <div className='sec3_btn'>
                  <button>Add</button>
                </div>
              </div>


            </div>

          </div>

          <div className='sec3_cont1'>

            <div className='sec3cont1_img1'>

              <img src="sweet.png" alt="" />

            </div>

            <div className='sec3cont1_txt'>
              <p>Meat</p>
              <h4>Halal Sausage 350g</h4>
              <p className='cont3_star'> <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack></p>
              <h5>By Mr.food</h5>

              <div className='sec3cont_price'>
                <div><p>$4 <strike>$10</strike></p>  </div>

                <div className='sec3_btn'>
                  <button>Add</button>
                </div>
              </div>


            </div>

          </div>

          <div className='sec3_cont1'>

            <div className='sec3cont1_img1'>

              <img src="green-tea.png" alt="" />

            </div>

            <div className='sec3cont1_txt'>
              <p>Coffe & teas</p>
              <h4>Green Tea 250g</h4>
              <p className='cont3_star'> <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack></p>
              <h5>By Mr.food</h5>

              <div className='sec3cont_price'>
                <div><p>$3 <strike>$7</strike></p>  </div>

                <div className='sec3_btn'>
                  <button>Add</button>
                </div>
              </div>


            </div>

          </div>

          <div className='sec3_cont1'>

            <div className='sec3cont1_img1'>

              <img src="onion.png" alt="" />

            </div>

            <div className='sec3cont1_txt'>
              <p>Vegetables</p>
              <h4>Onion 1kg</h4>
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


          <div className='sec3_cont2'>

            <div >

              <h2 className='sell_h2'>10% OFF</h2>

              <h6 className='sell_h6'>For new member sign up at <br />
                <span className='sellh6_span'>  the first time </span> </h6>

              <div className='sell_components'>
                <p>Email address* </p>
                <input type="text" name="mail" id="mail" placeholder='krutik@gmail.com' className='sell_ip1' />

                <br />

                <p className='sell_pwtitle'>Password*</p>
                <input type="text" name="pass" id="pass" placeholder='maximum character' className='sell_ip2' />

                <br />

                <button className='sell_btn'>Register Now</button>
              </div>

            </div>

          </div>
        </div>





            <div className='sec3cont1_txt'>



            </div>

          </div>

        </div> */}

      </section>

    </section>



  )
}

export default Home6