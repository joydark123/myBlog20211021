import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Nothing here really.</p>
      <StaticImage
        alt="XiaoHu"
        src="../images/XiaoHu.jpg"
      />
      
    </Layout>
  )
}

export default IndexPage