import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const notFound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}

export default notFound
