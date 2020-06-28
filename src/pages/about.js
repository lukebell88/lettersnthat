import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class About extends React.Component {
  render() {
    const about = get(this, 'props.data.contentfulPage')

    return (
      <Layout location={this.props.location}>
        <div className="container">
          <Helmet title={`About | Letters N That`} />

          <div className="hero--container">
            <div className="hero">
              <Img
                className="hero--image"
                alt={about.title}
                fluid={about.hero.fluid}
              />
            </div>
          </div>

          <div className="details--container">
            <h1 className="title">{about.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: about.pageBody.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
query AboutQuery {
    contentfulPage(title: {eq: "About"}) {
      title
      hero {
        fluid(maxWidth: 2500, maxHeight: 2500, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
      }
      pageBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`


  