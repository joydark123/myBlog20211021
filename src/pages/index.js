import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Da jia hao! </p>
      <p>Hello!</p>
      <StaticImage
        alt="XiaoHu"
        src="../images/XiaoHu.jpg"
      />
      
    </Layout>
  )
}

export default IndexPage