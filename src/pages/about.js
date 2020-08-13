import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
const AboutPage = () => (
  <div>
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>This is my site</p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  </div>
)

export default AboutPage
