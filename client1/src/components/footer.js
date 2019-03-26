import React from "react"
import { Link } from "gatsby"









const Footer = () => (
    <div className="footer pt-5 pb-5">
                <div className="d-flex justify-content-center mb-3 footerNav">
                    <p className="ml-3 mr-3 mb-0"><Link to="/" >Home </Link></p>
                    <p className="ml-3 mr-3 mb-0"><Link to="/about-us/">About Us</Link></p>
                    <p className="ml-3 mr-3 mb-0"><Link to="#FeaturedProjects"  >Portfolio</Link></p>
                    <p className="ml-3 mr-3 mb-0"><Link to="/services/" >Services</Link></p>
                    <p className="ml-3 mr-3 mb-0"><Link to="/career/" >Career</Link></p>
                    <p className="ml-3 mr-3 mb-0"><Link to="/contact/" >Contact</Link></p>
                </div>
                <div className="d-flex justify-content-center mb-3 footerContact">
                    <div className="phone1"><i className="fas fa-phone phoneFont mr-1"></i> USA <a href="tel:+1 860-9670120" className="black mr-3"> +1 860-9670120</a></div>
                    <div className="phone2"><i className="fas fa-phone phoneFont mr-1 ml-1"></i>IND <a href="tel:+91 9767-024642" className="black mr-3">+91 9767-024642</a></div>
                    <div className="email"><i className="fas fa-envelope mr-1"></i><a href="mailto:contact@ivisionstudio.in" className="black mr-3">contact@ivisionstudio.in</a></div>
                    <div className="social">
                        <a href="https://www.facebook.com/" target="_blank" className="socialIcon"><i className="fab fa-facebook-f black font-14 mt-1"></i></a>
                        <a href="https://www.instagram.com/" className="socialIcon" target="_blank"><i className="fab fa-instagram black font-14 mt-1"></i></a>
                        <a href="https://in.linkedin.com/" className="socialIcon" target="_blank"><i className="fab fa-linkedin-in black font-14 mt-1"></i></a>
                    </div>
                </div>
                
                <hr className="mb-3"/>
                <div className="text-center footerCopy">
                    Copyright ©2019 All rights reserved | Website Design by <a href="http://ivisionstudio.in/">Ivision Web Studio</a>
                </div>
            </div>
)

export default Footer
