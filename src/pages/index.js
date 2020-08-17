import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import Binary from "../images/binary.jpg"
import Karen from "../images/Karen.png"
const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <div className={indexStyles.wrapper}>
      <h1 className={indexStyles.heading}>Hello World.</h1>
    </div>
    <h3>Im Karen, a developer from Arlington, VA</h3>

    <div className={indexStyles.grid}>
      <div className={indexStyles.item1}>
        <img alt="Karen" src={Karen}></img>
      </div>
      <div className={indexStyles.item2}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem neque
          consequuntur quos sint repellendus in reprehenderit, temporibus saepe
          nulla odit eaque ut ab nesciunt corporis eius soluta eligendi quaerat
          repudiandae sequi est. Totam dolorem eaque temporibus iusto vitae
          dolores ipsum.
        </p>
      </div>
    </div>
    <p>
      Need a developer? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)
export default IndexPage
