import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
const AboutPage = () => (
  <div>
    <Layout>
      <h1>About</h1>
      <p>This is my site</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  </div>
)

export default AboutPage
