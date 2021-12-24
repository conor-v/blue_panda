import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useHeroQuery } from "../../hooks/useHeroQuery";

const Hero = () => {
  const {wpPage: {acf_homepage: data}} = useHeroQuery()
 
  const imageData = getImage(data.heroImage.localFile)

  return (
    <div>
      <GatsbyImage image={imageData} alt="hero image"/>
      <h1>{data.herotext}</h1>
    </div>
  )
}

export default Hero