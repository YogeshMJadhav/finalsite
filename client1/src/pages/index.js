import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SlickSlider from '../components/home/slick-slider';
import WhatWeDo from '../components/home/what-we-do';
import FeaturedProjects from '../components/home/featured-projects';
import WhatOurCustomerSay from "../components/home/what-our-customer-say";
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Fade>
  <div className="wrapper">
    <div className="slick-wrapper">
    <SlickSlider/>
    </div>
    <WhatWeDo/>
    <FeaturedProjects/>
    <WhatOurCustomerSay/>
  </div>
    </Fade>
  </Layout>
)

export default IndexPage
