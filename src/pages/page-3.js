import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <h3>Gatsby is very good and easy to use</h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
