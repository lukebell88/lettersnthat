import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`}>
    <Img alt="" fluid={article.heroImage.fluid} className="article--image" />
  </Link>
)
