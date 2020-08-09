import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"
import HeaderStyles from "./header.module.scss"
const Header = () => (
  <header className={HeaderStyles.header}>
    <Link
      to="/"
      className={HeaderStyles.title}
      activeClassName={HeaderStyles.activeNavItem}
    >
      Karen Heyn
    </Link>
    <nav>
      <ul className={HeaderStyles.navList}>
        <li>
          <Link
            to="/"
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog" className={HeaderStyles.navItem}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
