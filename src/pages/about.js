import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>This is my site</p>
    <Link to="/contact">Contact me</Link>
    <Footer />
  </div>
)

export default AboutPage
