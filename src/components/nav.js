import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./header.module.scss"
const Nav = props => {
  return (
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
            to="/work"
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
          >
            Work
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
  )
}

export default Nav
