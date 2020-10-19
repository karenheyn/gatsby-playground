import React from "react"
import { Link } from "gatsby"
import NavStyles from "./nav.module.scss"
const Nav = props => {
  return (
    <nav>
      <ul className={NavStyles.navList}>
        <li>
          <Link
            to="/"
            className={NavStyles.navItem}
            activeClassName={NavStyles.activeNavItem}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={NavStyles.navItem}
            activeClassName={NavStyles.activeNavItem}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={NavStyles.navItem}
            activeClassName={NavStyles.activeNavItem}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={NavStyles.navItem}
            activeClassName={NavStyles.activeNavItem}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog" className={NavStyles.navItem}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
