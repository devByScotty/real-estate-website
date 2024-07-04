import React from 'react';
import "./footer.css";



const Footer = () => {
  return (
    <div className='footer-class'>

        <div className="getStarted">

        <div className ="logoA-2">

            <h2>C</h2>

        </div>

        <div className='button-2'>

        <button className="button normal">Ready To Get Started</button>
        <button className="button normal">Get Started</button>

        </div>


        </div>


         <div className="links-container">

            <div className="links-section-1">

                    <h3>SUBSCRIBE TO <br></br>
                        OUR NEWSLETTER</h3>

            <div className='email-button'>

                    <input type="email" placeholder='Email address'></input>

                    <a className="arrow-shadow"><i class="fa-solid fa-chevron-right"></i></a>

            </div>

            </div>

            <div className="links-section">

                <h3>Services</h3>

                <ul>

                            <li>Email Marketing</li>
                            <li>Campaings</li>
                            <li>Branding</li>
                            <li>Offline</li>

                </ul>

            

            </div>

            <div className="links-section">
                <h3>About</h3>

                <ul>
                            <li>Our Story</li>
                            <li>Benefits</li>
                            <li>Team</li>
                            <li>Careers</li>

                        </ul>


            

            </div>

            <div className="links-section">
            <h3>Help</h3>
            <ul>

                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>Refund Polcy</li>


                        </ul>


        
            </div>
            

         </div>


         <div className='termsAnC'>

            <div className='terms-links'>
           <h3>Terms & Conditions</h3>
           <h3>Privacy Policy</h3>
           </div>

           <div className='terms-socials'>

           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-instagram"></i>
           </div>

         </div>
                   




    </div>
  )
}

export default Footer;