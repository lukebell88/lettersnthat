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
            <form className="form--container" name="contact" method="POST" data-netlify="true">
              <label>
                <input className="form--single" type="text" name="FirstName" placeholder="Name"/>
              </label>

              <label>
                <input className="form--single" type="email" name="email" placeholder="Email" />
              </label>

              <label>
                <textarea className="form--multiple" name="message" placeholder="Message..." ></textarea>
              </label>

              <button className="form--cta" type="submit">Send</button>
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
    contentfulPage(title: { eq: "Contact" }) {
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
