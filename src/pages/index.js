import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import Sig from "../images/Sig.png"
import Sidebar from "../components/social"
import Texture from "../images/texture.jpg"
import Blue from "../images/blue.jpg"
import Karen from "../images/Karen.png"
import Purple from "../images/purple.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faNpm,
  faFigma,
  faSass,
  faReact,
  faVuejs,
  faNode,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons"
import {
  faArrowRight,
  faChevronDown,
  faLightbulb,
  faPencilAlt,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"
import AOS from "aos"
import "aos/dist/aos.css"
import Circle from "../images/redcircle.png"
const IndexPage = () => {
  AOS.init()
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  const newestPost = useStaticQuery(graphql`
    query newPost {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />

      <div className={indexStyles.wrapper}>
        <img className={indexStyles.sig} src={Sig} alt="signature" />
        <img className={indexStyles.go} src={Circle} alt="red circle" />
        {isDesktop ? <Sidebar /> : null}

        {/* <img src={Karen} alt="karen" style={{ height: "250px" }}></img>
        <h1 className={indexStyles.heading}>Hello World.</h1>
        <button>
          <Link to="/#about">
            <FontAwesomeIcon icon={faChevronDown} size="3x" />
          </Link>
        </button>
      </div>
      <div className={indexStyles.grid}>
        <div id="about" className={indexStyles.item1}>
          <img alt="pink background" src={Texture}></img>
          <div className={indexStyles.blurb}>
            <div className={indexStyles.flexHeader}>
              <h2 data-aos="flip-up" data-aos-delay="300">
                I'm Karen, a developer from Arlington, VA
              </h2>
              <p data-aos="slide-up" data-aos-delay="600">
                My journey with web development started in 2018, when I wrote my
                first javascript program. I use a variety of technologies to
                design and build websites and enjoy trying out the latest trends
                in tech. Javascript is my weapon of choice. I specialize in
                creating responsive designs that look amazing on any device.
              </p>
              <div className={indexStyles.socialDiv}>
                <div data-aos="zoom-out-up" data-aos-delay="1000">
                  <a href="github.com/karenheyn" className={indexStyles.social}>
                    <FontAwesomeIcon icon={faGithub} size="3x" />

                    <h5>Github</h5>
                  </a>
                </div>
                <div data-aos="zoom-out-up" data-aos-delay="1300">
                  <a href="github.com/karenheyn" className={indexStyles.social}>
                    <FontAwesomeIcon icon={faFile} size="3x" />
                    <h5>Resumé</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={indexStyles.item2}>
          <img alt="blue background" src={Blue}></img>
          <div className={indexStyles.blurb}>
            {newestPost.allContentfulBlogPost.edges.map(edge => {
              return (
                <div
                  className={indexStyles.recentPost}
                  data-aos="flip-down"
                  data-aos-delay="400"
                >
                  <h2>My Most Recent Blog Post:</h2>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.publishedDate}</p>
                  <Link
                    className={`${indexStyles.outline}`}
                    to={`/blog/${edge.node.slug}`}
                  >
                    <h4 style={{ display: "inline" }}>Read more</h4>
                    <FontAwesomeIcon
                      className={indexStyles.arrow}
                      icon={faArrowRight}
                      size="2x"
                      style={{ display: "inline" }}
                    />
                  </Link>
                </div>
              )
            })}
            <div className={indexStyles.iconDiv}>
              {" "}
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <FontAwesomeIcon icon={faCss3Alt} size="3x" />
              <FontAwesomeIcon icon={faJs} size="3x" />
              <FontAwesomeIcon icon={faPython} size="3x" />
              <FontAwesomeIcon icon={faNode} size="3x" />
              <FontAwesomeIcon icon={faVuejs} size="3x" />
              <FontAwesomeIcon icon={faReact} size="3x" />
              <FontAwesomeIcon icon={faSass} size="3x" />
              <FontAwesomeIcon icon={faFigma} size="3x" />
              <FontAwesomeIcon icon={faNpm} size="3x" />
              <FontAwesomeIcon icon={faGitAlt} size="3x" />
              <FontAwesomeIcon icon={faBootstrap} size="3x" />
            </div>
          </div>
        </div>
        <div className={indexStyles.item3}>
          <img alt="purple background" src={Purple}></img>
          <div className={indexStyles.blurb}>
            <div className={indexStyles.flex}>
              <div className={indexStyles.processDiv} data-aos="fade-right">
                <FontAwesomeIcon
                  className={indexStyles.arrow}
                  icon={faLightbulb}
                  size="3x"
                  style={{ display: "inline" }}
                />
                <FontAwesomeIcon
                  className={indexStyles.arrow}
                  icon={faArrowRight}
                  size="2x"
                  style={{ display: "inline", marginTop: "10px" }}
                />
                <FontAwesomeIcon
                  className={indexStyles.arrow}
                  icon={faPencilAlt}
                  size="3x"
                  style={{ display: "inline" }}
                />
                <FontAwesomeIcon
                  className={indexStyles.arrow}
                  icon={faArrowRight}
                  size="2x"
                  style={{ display: "inline", marginTop: "10px" }}
                />
                <FontAwesomeIcon
                  className={indexStyles.arrow}
                  icon={faLaptopCode}
                  size="3x"
                  style={{ display: "inline" }}
                />
              </div>
              <h3
                style={{ fontWeight: 400, letterSpacing: "3px", lineHeight: 2 }}
              >
                Turning <span>ideas</span> to <span>designs</span> to{" "}
                <span>digital products</span>
              </h3>

              <a href="#">
                <p>View my work</p>
              </a>
            </div>
          </div>
        </div>
        <div className={indexStyles.item4} data-aos="fade-in"></div> */}
      </div>

      {/* <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p> */}
    </Layout>
  )
}
export default IndexPage
