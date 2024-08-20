import React from 'react'
import '../App.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


const Home = () => {
  return (
    <>

      <div className='main_container'>
        <header>
          <div className='header_logoo'>



            <div className='header_maindiv'>

              <div className='header_mainimg' >
                <img className='header_img' src="svgexport-6 1.png" alt="logo" />
              </div>

              <div>
                <p className='logo_txt1'>Groceyish</p>
                <p className='logo_txt2'>GROCERY</p>
              </div>

            </div>

            <div className='header_components'>
              <select name="categories" className='header_select'>
                <option value="all">All Categories</option>
              </select>

              <input type="text" placeholder="Search for items..." className='header_input' />

              <button type="submit" className='header_btn'>🔍</button>
            </div>

            <div className="user_info">

              <div className='userinfo1'> <a href="#" className="wishlist">❤️ Wishlist</a> </div>
              <div className='userinfo2'> <a href="#" className="cart">🛒 My cart <span>$21</span></a> </div>
              <div className='userinfo3'> <a href="#" className="user">👤 Ramzi Cherif</a> </div>
            </div>

          </div>
        </header>

        <div className='home_mainn'>

          <div className='sub_home'>

            <div className='home_txt'>
              <h1 className='home_txt1'>Don’t miss our daily <br />amazing deals.</h1>
              <h3 className='home_txt2'>Save up to 60% off on your first order</h3>
            </div>

            <div className='home_searchbar'>
              <div className='searchbar'>
                <input type="text" name="searchbar" id="searchbar" placeholder="Enter Your Email Address" className='search_home' />
              </div>

              <div className='searchbar_button'>
                <button>Subscribe</button>
              </div>
            </div>



          </div>
          <div className='home_mainimg'>
            <img className='home_imgg' src="Hreo-img.png" alt="vegitables" />
          </div>

        </div>



        {/* <section className='section_2'>
          <div className='sec2_title'>
            <div className='sec2_title1'>
              <h3>Explore Categories</h3>
            </div>
=======




          <div className='sec2_cont'>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="image 3.png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>Peach</h4>
                <h5>20 items</h5>
              </div>

            </div>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="image 4.png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>Vegetables  </h4>
                <h5>220 items</h5>
              </div>

            </div>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="Group 6 (2).png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>strawberry</h4>
                <h5>10 items</h5>
              </div>

            </div>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="Group 6 (3).png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>Apple</h4>
                <h5>40 items</h5>
              </div>

            </div>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="Group 6.png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>Orange</h4>
                <h5>25 items</h5>
              </div>

            </div>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="Group 6 (5).png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>Potato</h4>
                <h5>3 items</h5>
              </div>

            </div>

            <div className='sec2_cont1'>

              <div className='sec2cont1_img1'>

                <img src="Group 6 (4).png" alt="" />

              </div>

              <div className='sec2cont1_txt'>
                <h4>Carrot</h4>
                <h5>9 items</h5>
              </div>

            </div>




          </div>



        </section> */}


        {/* <section className='section_3'>
          <div className='sec3_title'>
            <div className='sec3_title1'>
              <h3>Explore Categories</h3>
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



          <div className='sec3_cont'>

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

          </div>

        </section> */}

        {/* <section className='section_4'>

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

        </section> */}
{/* 
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

        </section> */}

         
        {/* <section className='section_3'>

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

          </div>

        </section> */}


      </div>



    </>
  )
}

export default Home