import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const detailed = post.detailedImages

    return (
      <Layout location={this.props.location}>
        <div className="container">
          <Helmet title={`${post.title} | ${siteTitle}`} />

          <div className="hero--container">
            <div className="hero">
              <Img
                className="hero--image"
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
          </div>

          <div className="details--container">
            <h1 className="title">{post.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />

          <div className="detailed--images">
            {detailed.map((image, index) => (
              <Img
                fluid={image.fluid}
                key={index}
                className="detailed--img"
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
      heroImage {
        fluid(maxWidth: 2500, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      detailedImages {
        fluid(maxWidth: 2500, background: "rgb:000000") {
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
