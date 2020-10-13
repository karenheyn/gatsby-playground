import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import sidebarStyles from "./social.module.scss"
const Sidebar = () => {
  //   const data = useStaticQuery(graphql`
  //     query myQuery {
  //       site {
  //         siteMetadata {
  //           author
  //         }
  //       }
  //     }
  //   `)
  return (
    <ul className={sidebarStyles.list}>
      <li>
        <div className={sidebarStyles.vr}></div>
      </li>
      <li>
        <FontAwesomeIcon
          icon={faGithub}
          size="1x"
          style={{ display: "inline" }}
        />
      </li>
      <li>
        <FontAwesomeIcon
          icon={faLinkedin}
          size="1x"
          style={{ display: "inline" }}
        />
      </li>
      <li>
        <FontAwesomeIcon
          icon={faCodepen}
          size="1x"
          style={{ display: "inline" }}
        />
      </li>
    </ul>
  )
}

export default Sidebar
