import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src="https://source.unsplash.com/random/800x400" alt="" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div class="div_margin">  
      <Link class="sample" to="/page-2/">Go to page 2</Link>
      <Link class="sample" to="/page-3/">Go to page 3</Link>
      <Link class="sample" to="/page-4/">Go to page 4</Link>
     </div>
  </Layout>
)

export default IndexPage
