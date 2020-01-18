import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new site.</p>
    <p>This was deployed with a button.</p>
  </Layout>
)

export default IndexPage
