import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

const Maintenance = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Fade>
    Maintenance
    </Fade>
  </Layout>
)
export default Maintenance;
