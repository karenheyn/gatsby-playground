import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
const AboutPage = () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>This is my site</p>
    <Link to="/contact">Contact me</Link>
    <Footer />
  </div>
)

export default AboutPage
