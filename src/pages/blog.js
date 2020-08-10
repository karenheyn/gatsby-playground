import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query blogPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
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
        <ol>
          {posts.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
