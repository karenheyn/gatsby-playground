import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import Binary from "../images/binary.jpg"
import Karen from "../images/Karen.png"
import Pink from "../images/pink.jpg"
import Green from "../images/green.jpg"
import Blue from "../images/blue.jpg"
import White from "../images/white.jpg"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => {
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
        <div className={indexStyles.item1}>
          <img alt="Karen" src={Karen}></img>
        </div>
        <div className={indexStyles.item2}>
          <img alt="pink background" src={Pink}></img>
          <div>
            <div className={indexStyles.blurb}>
              <h3>I'm Karen, a developer from Arlington, VA</h3>
            </div>
          </div>
        </div>
        <div className={indexStyles.item3}>
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
          <img src={White} alt="white background" />
          <div className={`${indexStyles.blurb} ${indexStyles.large}`}>
            <h2>{newestPost.allContentfulBlogPost.edges.node}</h2>
            <p>{newestPost.allContentfulBlogPost.edges.node}</p>
          </div>
        </div>
      </div>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
