import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
    const intl = useIntl()
    return (
      <Layout>

        <SEO title={intl.formatMessage({ id: "title" })}/>
        <h1>{intl.formatMessage({ id: "title" })}</h1>
        <p>{intl.formatMessage({ id: "hello" })}</p>
        <p>Now go build something great.</p>

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
}

export default IndexPage
