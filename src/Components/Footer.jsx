import React from 'react'
import './Footer.css'
import fb from './SocialMedia/logo-facebook.svg'
import insta from './SocialMedia/logo-instagram.svg'
import twitter from './SocialMedia/logo-twitter.svg'





const Footer = () => {
    return ( 
        <div className = 'footer'>
            <div className ='sb__footer section__padding'>
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                            <a href ='/employer'>
                                <p>Employer</p>
                            </a>
                            <a href ='/health plan'>
                                <p>Health Plan</p>
                            </a>
                            <a href ='/individual'>
                                <p>Individual</p>
                            </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Resources</h4>
                        <a href ='/resource'>
                                <p>Resource</p>
                            </a>
                            <a href ='/resource'>
                                <p>Resource</p>
                            </a>
                            <a href ='/resource'>
                                <p>Resource</p>
                            </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Partners</h4>
                            <a href ='/resource'>
                                <p>Resource</p>
                            </a> 
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Company</h4>
                            <a href ='/About'>
                                <p>About</p>
                            </a> 
                            <a href ='/Contact'>
                                <p>Contact</p>
                            </a> 
                            <a href ='/Home'>
                                <p>Home</p>
                            </a> 
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Coming Soon</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                        </div>
                    </div>
                </div>
                <hr/>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>

            </div>

        </div>
     );
}
 
export default Footer;