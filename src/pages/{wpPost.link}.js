import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const PageTemplate = ({data}) => {
  const pro_data = data.wpPost.acf_project

  const imageBanner = getImage(pro_data.banner.localFile)
  const imageImg1 = getImage(pro_data.img1.localFile)
  const imageImg2 = getImage(pro_data.img2.localFile)
  const imageImg3 = getImage(pro_data.img3.localFile)
  return ( 
    <div>
      <GatsbyImage image={imageBanner} alt="hero image"/>
      <p>{pro_data.title}</p>

      <div dangerouslySetInnerHTML={{__html: pro_data.tekst}}/>
      
      <div>
        <GatsbyImage image={imageImg1} alt="hero image"/>
        <GatsbyImage image={imageImg2} alt="hero image"/>
        <GatsbyImage image={imageImg3} alt="hero image"/>
      </div>
    </div>
  )
}

export default PageTemplate

export const postQuery = graphql`
query ($id: String!) {
  wpPost(id: {eq: $id}) {
    acf_project {
      title
      tekst
      banner {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1920, height: 500, placeholder: TRACED_SVG)
          }
        }
      }
      img3 {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: TRACED_SVG)
          }
        }
      }
      img2 {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: TRACED_SVG)
          }
        }
      }
      img1 {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
}
`
