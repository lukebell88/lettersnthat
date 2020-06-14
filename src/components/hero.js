import React from 'react'
import Img from 'gatsby-image'


export default ({ data }) => (
  <div className="hero">
    <Img
      className="hero--image"
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className="hero--details">
      <h3 className="hero--headline">{data.name}</h3>
      <p className="hero--title">{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
