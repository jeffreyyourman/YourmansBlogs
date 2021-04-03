import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => {
      // console.log('post', post.node.frontmatter.featuredimage.childImageSharp.fluid);
      return (
        <div>
          <Img className="imageStyle blogInTagListImg cardHeaderImage" style={{borderRadius: '5px'}} fluid={post.node.frontmatter.featuredimage.childImageSharp.fluid} alt={`featured image thumbnail for post ${post.node.frontmatter.title}`} />
          <li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>
              <h2 style={{marginBottom: '0px'}} className="is-size-3">{post.node.frontmatter.title}</h2>
            </Link>
          </li>
        </div>

      )
    })
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    // const featuredimage = this.props.data.site
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'
      } tagged with “${tag}”`
    // console.log('featuredimage',featuredimage);
    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >

                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <div className="taglist tagListContainer box">{postLinks}</div>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
