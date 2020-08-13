import React from "react"
import blogStyles from "./blog.module.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query blogPosts {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
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
    <div>
      <Layout>
        <h1>My blog</h1>
        <p>Posts will show up here later on.</p>
        <ol className={blogStyles.posts}>
          {posts.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={edge.node.slug}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
