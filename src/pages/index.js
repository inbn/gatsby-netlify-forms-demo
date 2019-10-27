import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form/>
  </Layout>
)

export default IndexPage
