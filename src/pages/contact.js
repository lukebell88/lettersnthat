import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class Contact extends React.Component {
  render() {
    const contact = get(this, 'props.data.contentfulPage')

    return (
      <Layout location={this.props.location}>
        <div className="container">
          <Helmet title={`${contact.title} | Letters N That`} />

          <div className="hero--container">
            <div className="hero">
              <Img
                className="hero--image"
                alt={contact.title}
                fluid={contact.hero.fluid}
              />
            </div>
          </div>

          <div className="details--container">
            <h1 className="title">{contact.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: contact.pageBody.childMarkdownRemark.html,
              }}
            />
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
query ContactQuery {
    contentfulPage(title: {eq: "Contact"}) {
      title
      hero {
        fluid(maxWidth: 1180, maxHeight: 1180, resizingBehavior: SCALE) {
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


  