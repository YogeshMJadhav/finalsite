import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const SlickSlider = () => (
    <Slider {...settings}>
            <div className="slider">
            <div className="sliderMax">
                <h1 className="white">We are JAM Expert</h1>
                <h3 className="mb-4 white">Modern web development architecture</h3>
                <p className="white mb-5">The JAM Development is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.
               </p>
                <a href="#"> <button className="btn">hire us</button> </a> 
            </div>
        </div>
         <div className="slider">
            <div className="sliderMax">
                <h1 className="white">Web Application Expert</h1>
                <h3 className="mb-4 white">Creating online environments</h3>
                <p className="white mb-5"> Ivision Web Studio, recognized as the best web app development company promises to offer you top notch web application development services at the most competitive pricing. We have specialized in providing flexible and high quality web apps. </p>
                <a href="#"> <button className="btn">hire us</button> </a> 
            </div>
        </div>
        <div className="slider">
            <div className="sliderMax">
                <h1 className="white">Mobile Application Expert</h1>
                <h3 className="mb-4 white">We turn ideas into wonderful Apps</h3>
                <p className="white mb-5">We develop both native and hybrid apps using latest app frameworks for all types of businesses</p>
                <a href="#"> <button className="btn">hire us</button> </a> 
            </div>
        </div>
    </Slider>
   
)

export default SlickSlider;
