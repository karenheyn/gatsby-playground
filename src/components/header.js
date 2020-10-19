import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "./header.module.scss"
import HeaderStyles from "./header.module.scss"
import Logo from "../images/newlogo@2x.png"
import Nav from "./nav"
const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })
  const [menuActive, setMenuState] = useState(false)
  return (
    <header
      className={menuActive ? HeaderStyles.mobileNav : HeaderStyles.header}
    >
      <Link to="/" className={HeaderStyles.title}>
        {/* {data.site.siteMetadata.title} */}
        <img src={Logo} height="60" />
      </Link>
      {isDesktop ? (
        <Nav />
      ) : (
        <div
          onClick={() => setMenuState(!menuActive)}
          className={`${HeaderStyles.navIcon3} ${
            menuActive ? HeaderStyles.open : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {menuActive ? (
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                // className={HeaderStyles.mobileNav}
                activeClassName={HeaderStyles.activeNavItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                // className={HeaderStyles.mobileNav}
                activeClassName={HeaderStyles.activeNavItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                // className={HeaderStyles.mobileNav}
                activeClassName={HeaderStyles.activeNavItem}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                // className={HeaderStyles.mobileNav}
                activeClassName={HeaderStyles.activeNavItem}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                // className={HeaderStyles.mobileNav}
                activeClassName={HeaderStyles.activeNavItem}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
