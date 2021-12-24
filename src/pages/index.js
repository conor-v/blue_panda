import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import { usePostsQuery } from "../hooks/usePostsQuery";

const IndexPage = () => {
  const data = usePostsQuery()
   
  return (
    <Layout>
      <Seo title="Home" />
      <Hero/>

      <ul>
       {data.allWpPost.nodes.map((item, index) => (
         <li key={index}>
           <Link to={item.link}>
            {item.title}
           </Link>
         </li>
       ))}
      </ul>
    </Layout>
  )
}
export default IndexPage
