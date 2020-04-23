import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page Four" />
    <h1>Hi from the fourth page</h1>
    <p>Welcome to page 3</p>
    <h3>Gatsby is very good and easy to use</h3>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br></br>
    <button class="primary-button">Click me</button>
    <br></br>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
