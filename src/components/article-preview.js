import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`}>
    <Img alt="" fluid={article.heroImage.fluid} className={styles.myImage} />
  </Link>
)
