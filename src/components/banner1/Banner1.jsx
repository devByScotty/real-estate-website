import React from 'react';
import "./banner1.css"; 
import pic1 from "../../assets/img/pic1.png"
import pic2 from "../../assets/img/pic2.png"
import pic3 from "../../assets/img/pic3.png"

const Banner1 = () => {
  return (
    <div>
    
    <div className="container2">

        <div className="section-header">

                <h1>Sustainable Architecture</h1>
        </div>

    <div className='bannerHeader grid-3'>
    <div className='left2'>

    <div className='card-left'>

        <h1>
           Magnificent <br></br> Work 
        </h1>

        <p>Learn about sustainable architecture and the principles 
        behind eco-friendly building practices. Explore innovative 
        green building materials, energy-efficient design strategies, 
        and projects that prioritize environmental stewardship</p>

        <div className="iconFonts">

            <div className='iconFont-text'>

                <i class="fa-solid fa-thumbs-up"></i>
                <div>
                <h3>875+</h3>
                <p>Projects Done</p>
                </div>

            </div>

            <div className='iconFont-text'>


                <i className="fas fa-home"></i>

                <div>
                <h3>320</h3>
                <p>Projects Created</p>
                </div>

            </div>


        </div>



    </div>
    


    </div>


    <div className='right-2'>

            <div className='container-3'>

            
            <div className='hero1-1'>

            <span className="round-1">

             <img src={pic1} className="element-1" />

             </span>

            </div>

            <div className='hero2-2'>

                    <span className="round-1">

                <img src={pic2} className="element-1" />

                </span>

                </div>

                <div className='hero3-3'>

                    <span className="round-1">

                <img src={pic3} className="element-1" />

                </span>

                </div>
          
       
          
              


         </div>


    </div>
    </div>


    </div>
    
    </div>
  )
}

export default Banner1;