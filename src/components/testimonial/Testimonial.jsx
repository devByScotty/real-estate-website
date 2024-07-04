import React from 'react';
import { useState } from 'react';
import leftArrow from '../../assets/img/leftArrow.png'
import RightArrow from '../../assets/img/rightArrow.png';
import { testimonialsData } from "../../data/testimonialsData";
import "./Testimonial.css";


const Testimonial = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div>

        <div className='container-6'>

            <div className="t-heading">

                <h1>
                    CUSTOMER IS <br></br>
                    OUR PRIORITY
                </h1>

                <p>Our clients are very satisfied with our<br></br>
                   service which can be understood by looking<br></br>
                   at their feedback</p>

            </div>

            <div className='testimonials'>

                <div className='testimonials-info'>

                <i class="fa-solid fa-quote-left"></i>

                <h3>{testimonialsData[selected].header}</h3>

                <p>{testimonialsData[selected].p}
                   <br></br> {testimonialsData[selected].p1}<br></br>
                   </p>


                <div className="profile">

                    <div className="profile-img">


                    </div>

                    <div className="profile-text">

                    <h3>{testimonialsData[selected].name}</h3>
                    <p>{testimonialsData[selected].d2}</p>

                        
                    </div>



                </div>     



                </div>

                <div className='testimonials-info'>

                <i class="fa-solid fa-quote-left"></i>

                <h3>{testimonialsData[selected].header}</h3>

                <p>{testimonialsData[selected].p}
                   <br></br> {testimonialsData[selected].p1}<br></br>
                </p>


                <div className="profile">

                    <div className="profile-img">


                    </div>

                    <div className="profile-text">

                    <h3>{testimonialsData[selected].name}</h3>
                    <p>{testimonialsData[selected].d2}</p>

                        
                    </div>



                </div>     



                </div>

                
            </div>

            <div class="line-container-1">
                <div class="dotted-line-2"></div>
            </div>

            <div className="arrows">

            <i class="fa-regular fa-circle-left"
             onClick={() => {
                                selected === 0 
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1 );
                    }}
            
            >
            
            

            </i>
                                        
        <i class="fa-regular fa-circle-right"
                      onClick={() => {
                                 selected === tLength -1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1 );
                    }}
                    
                    >
                      
                    </i> 
                  
                    
                  



            </div>


        </div>


    </div>
  )
}

export default Testimonial;