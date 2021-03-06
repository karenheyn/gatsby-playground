import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "./header.module.scss"
import HeaderStyles from "./header.module.scss"
import Logo from "../images/newlogo@2x.png"
import Nav from "./nav"
import useWindowWidth from "../hooks/winwidth"
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
  const windowWidth = useWindowWidth()
  const [isDesktop, setDesktop] = useState(windowWidth > 768)

  const updateMedia = () => {
    setDesktop(windowWidth > 768)
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
        //hamburger
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
      {menuActive ? <Nav /> : null}
    </header>
  )
}

export default Header
