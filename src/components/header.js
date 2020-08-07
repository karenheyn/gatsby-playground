import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"
import HeaderStyles from "./header.module.scss"
const Header = () => (
  <header>
    <h1>Karen Heyn</h1>
    <nav>
      <ul>
        <li>
          <Link to="/" className={HeaderStyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
