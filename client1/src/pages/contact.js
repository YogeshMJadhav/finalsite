import React,{ Component } from "react";
import { Link } from "gatsby";
import axios from 'axios';

import Layout from "../components/layout"
import SEO from "../components/seo"

class ConatctForm extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName : '',
            lastName: '',
            email : '',
            address : '',
            message : '',
        }
        this.FormSubmit = this.FormSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    async FormSubmit(e){    
        e.preventDefault();
        const { firstName, lastName, email, address, message } = this.state
   
        const form = await axios.post('http://localhost:3001/send',{
            firstName,
            lastName,
            email,
            address,
            message
        })
      }
render(){
    return(
        <Layout>
            <SEO title="Page two" />
            <div className="wrapper">
                <div className="pagebanner">
                    <div className="pagebannerMax">
                        <h1 className="white">Contact Us</h1>
                        {/* <!-- <h3 className="mb-4 white">We Make Beautiful Things</h3>  -->
                        <!-- <p className="white">The easiest way to get started is to use Ghost(Pro). If you prefer to self-host, we strongly recommend an Ubuntu server with at least 1GB of memory to run Ghost.</p> --> */}
                    </div>
                </div>
            <div className="whatWeSection pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white shadow-1 brb4 p-5 ">
            <div className="row">
                <div className="col-7">
                <h3 className="mb-4"> Contact Form </h3>
            <form onSubmit={this.FormSubmit} >
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name"onChange={this.handleChange}/>
                </div>

                <div className="form-group col-md-6">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text"  className="form-control" name="lastName"id="inputLastName" placeholder="Last Name"onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" name="email" id="inputEmail" placeholder="Email" onChange={this.handleChange}/>
                </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" name="address" id="inputAddress" placeholder="Address" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputMessage">Message </label>
                <textarea className="form-control" placeholder="Message" name="message" id="inputMessage" rows="3" onChange={this.handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
                </div>
                <div className="col-5">
            <div className="p-4 mb-3 bg-white">
                    <p className="mb-0 font-weight-bold">Phone</p>
                    <p className="mb-1">USA <a href="tel:8609670120">+1 860 967 0120</a></p>
                    <p className="mb-4">IND <a href="tel:8149441715">+91 8149 441 715</a></p>
                    <p className="mb-0 font-weight-bold">Email Address</p>
                    <p className="mb-4"><a href="mailto:contact@ivisionstudio.in">contact@ivisionstudio.in</a></p>
                    <p className="mb-0 font-weight-bold">Address</p>
                    <p className="mb-4">IVISION WEB STUDIO, Office no.1 Herambh Apt, Beside Kimaya Hotel
                    PUNE, MAHARASHTRA 411038 India.</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7567.054327732735!2d73.822386!3d18.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e13c52b68392e92!2sivision+studio!5e0!3m2!1sen!2sin!4v1553501385197" frameBorder="0" width="100%" height="350" allowFullScreen></iframe>        
                </div>
            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
                    <div className="footer pt-5 pb-5">
                        <div className="d-flex justify-content-center mb-3 footerNav">
                            <p className="ml-3 mr-3 mb-0"><a href="#">Home</a></p>
                            <p className="ml-3 mr-3 mb-0"><a href="#">About</a></p>
                            <p className="ml-3 mr-3 mb-0"><a href="#">Portfolio</a></p>
                            <p className="ml-3 mr-3 mb-0"><a href="#">Services</a></p>
                            <p className="ml-3 mr-3 mb-0"><a href="#">Career</a></p>
                            <p className="ml-3 mr-3 mb-0"><a href="#">Contact Us</a></p>
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
            </div>
        </Layout>
    )
}
}
export default ConatctForm;
