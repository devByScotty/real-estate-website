import React from 'react';
import './header.css';
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.png';
import banner3 from '../../assets/img/banner3.png';
const Header = () => {
  return (
    <div>

        <div className="container grid-2">

        <div className='left'>

                <div className='card1'>

                    <a className ="title-2">Property Solutions For All</a>

                </div>

                <div className='header-title'>

                    <h1 className="eco-title">ECOHOUSE <br></br> STYLE </h1>

                    <p class="text">Stay informed about the market with real estate news and <br></br>
                    insights provided by real estate professionals and government 
                     <br></br>agencies.
                    </p>


                </div>

                <div className='button-cards'>

                    <button className='button normal'>Watch A Demo</button>
                    <button className='button normal'>See Our Case Studies</button>
                    

                </div>

        </div>

        <div className='right'>

            <div className='hero1'>

                        <span class="round">

                            <img src={banner2} class="img-element" />

                        </span>
                
            </div>

              {/**   <div className="dotted-line"></div>
           

            <div className='hero2'>

                        <span class="round">

                            <img src={banner3} class="img-element" />

                        </span>
                
            </div>
            */}

     </div>



        </div>
        


    </div>
  )
}

export default Header;