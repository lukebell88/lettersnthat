import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styles from '../templates/blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const detailed = post.detailedImages

    return (
      <Layout location={this.props.location}>
        <div className={styles.container}>
          <Helmet title={`${post.title} | ${siteTitle}`} />

          <div className={styles.heroContainer}>
            <div className={styles.hero}>
              <Img
                className={styles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
          </div>

          <div className={styles.detailsContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />

          <div className={styles.detailedImages}>
            {detailed.map((image, index) => (
              <Img
                fluid={image.fluid}
                key={index}
                className={styles.detailedImg}
              />
            ))}
          </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      detailedImages {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
