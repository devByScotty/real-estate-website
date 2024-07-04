import React from 'react';
import "./banner2.css";
import pic4 from "../../assets/img/pic4.png"
import pic5 from "../../assets/img/pic5.png"
import pic6 from "../../assets/img/pic6.png"


const Banner2 = () => {
  return (
    <div>

        <div className='container4'>

            <div className='top-half grid-4'>

                <div className='grid-item'>

                <h1>
                        THE COMFORT
                        <br></br>INTERIOR

                </h1>

                <p>Finally a article that wont rehash the same old!
                <br></br>Here are 5 tips from realtors all over the world on how to
                <br></br>choose the best agent fpr you.</p>


                </div>

                <div className='grid-item-2'>

                    <img src={pic5} className="grid-img" />

                </div>

    
            </div>

            <div className='middle-half'>

            <div className='grid-item-img'>

            <img src={pic4} className="grid-img-2" />

            </div>

            </div>

          



        </div>


    </div>
  )
}

export default Banner2;