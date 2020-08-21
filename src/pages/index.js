import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import Gallery from "../components/carousel"
import Texture from "../images/texture.jpg"
import Blue from "../images/blue.jpg"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons"
import AOS from "aos"
import "aos/dist/aos.css"
const IndexPage = () => {
  AOS.init()
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
        <h1 className={indexStyles.heading}>Hello World.</h1>
      </div>
      <div className={indexStyles.grid}>
        <div className={indexStyles.item1} data-aos="fade-in">
          <img alt="pink background" src={Texture}></img>
          <div className={indexStyles.blurb}>
            <div className={indexStyles.flexHeader}>
              {/* <div className={indexStyles.myFace}>
                <img alt="Karen" src={Karen}></img>
              </div> */}
              <h2 data-aos="flip-up" data-aos-delay="300">
                I'm Karen, a developer from Arlington, VA
              </h2>
              <p data-aos="slide-up" data-aos-delay="600">
                My journey with programming started in 2018, when I wrote my
                first "hello world" program. I use a variety of technologies to
                design and build websites and enjoy trying out the latest trends
                in tech. Javascript is my weapon of choice. I specialize in
                creating responsive designs that look amazing on any device.
              </p>
            </div>
          </div>
        </div>
        <div className={indexStyles.item2} data-aos="fade-in">
          <img alt="pink background" src={Blue}></img>
          <div className={indexStyles.blurb}></div>
        </div>
        <div className={indexStyles.item3} data-aos="fade-in">
          {" "}
          <Gallery />
        </div>

        {/* <div className={indexStyles.item3}>
          <img src={White} alt="white background" />
          <div className={`${indexStyles.blurb} ${indexStyles.large}`}>
            <h4>
              HTML CSS Javascript Python React Gatsby Vue Nuxt Node Mongoose
              MongoDB Express AdobeXD Figma GraphQL Firebase NPM Git Deployment
              Bootstrap jQuery Peewee Postgres SQL Sass Wire-framing CLI
              Markdown Storybook Ajax Django Agile SCRUM Material UI Jest
            </h4>
          </div>
        </div>
        <div className={indexStyles.item4}>
          <img src={Green} alt="green background" />
          <div className={`${indexStyles.blurb} ${indexStyles.small}`}>
            <h3>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <br />
              <br />
              Connect with me on LinkedIn
            </h3>
          </div>
        </div>
        <div className={indexStyles.item5}>
          <img src={Blue} alt="green background" />
          <div className={`${indexStyles.blurb} ${indexStyles.small}`}>
            <h3>
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <br />
              <br />
              Follow me on Github
            </h3>
          </div>
        </div>
        <div className={indexStyles.item6}>
          <img src={Gold} alt="gold background" />
          <div className={`${indexStyles.blurb} ${indexStyles.xlarge}`}>
            {newestPost.allContentfulBlogPost.edges.map(edge => {
              return (
                <div>
                  <h2>My Most Recent Blog Post:</h2>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.publishedDate}</p>
                  <Link
                    className={`${indexStyles.outline}`}
                    to={`/blog/${edge.node.slug}`}
                  >
                    Read more
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className={indexStyles.item7}>
          <img src={TieDye} alt="multi background" />
          <div className={`${indexStyles.blurb} ${indexStyles.small}`}>
            <h3>
              <FontAwesomeIcon icon={faFile} size="2x" />
              <br />
              <br />
              Download/view my resumé
            </h3>
          </div>
        </div>
        <div className={indexStyles.item7}>
          <img src={TieDye} alt="multi background" />
          <div className={`${indexStyles.blurb} ${indexStyles.small}`}>
            <h3>
              <FontAwesomeIcon icon={faFile} size="2x" />
              <br />
              <br />
              Download/view my resumé
            </h3>
          </div>
        </div> */}
      </div>

      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
