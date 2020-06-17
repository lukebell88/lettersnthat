import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "letters-n-that-logo.png"}) {
            childImageSharp {
                fixed (width: 110){
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
            }
          }
    }
  `)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Letters N That"
      />
    </div>
  )
}
