import React from 'react';
import "./workflow.css";
import banner2 from '../../assets/img/workflow.png';
import banner3 from '../../assets/img/workflow2.png';

const WorkFlow = () => {
  return (
    <div>

            <div className='container5'>

                <div className='header-workflow'>

                <div className='header-header'>
                            <h1>OUR WORKFLOW
                            <br></br></h1>


                </div>

                <div className="header-img-1">

                        <img src={banner2} className='z-img-element'/>

                </div>

                <div className="header-img-2">

                <img src={banner3} className='z-img-element'/>


                </div>

                </div>

                <div className='header-slider'>

                <div className='header-slier-box'>

                    <h1>01</h1>
                    <h3>Research & Plan</h3>
                    <p>Explore our latest groundbreaking project that 
                     <br></br>seamlessly integrates sustainable 
                   </p>

                </div>

                <div className='header-slier-box'>

                    <h1>02</h1>
                    <h3>Research & Plan</h3>
                    <p>Explore our latest groundbreaking project that 
                     <br></br>seamlessly integrates sustainable 
                   </p>

                </div>

                <div className='header-slier-box'>

                    <h1>03</h1>
                    <h3>Research & Plan</h3>
                    <p>Explore our latest groundbreaking project that 
                     <br></br>seamlessly integrates sustainable 
                   </p>

                </div>






                </div>


            </div>


    </div>
  )
}

export default WorkFlow;