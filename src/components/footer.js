import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import useWindowWidth from "../hooks/winwidth"
import Social from "../components/social"
import footerStyles from "./footer.module.scss"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      site {
        siteMetadata {
          author
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
  return (
    <footer className={footerStyles.footer}>
      {isDesktop ? null : <Social />}
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
