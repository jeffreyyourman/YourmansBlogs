import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faPinterest, faGooglePlusG, faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { faCheckSquare, faTable, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebook, faTwitter, faPinterest, faGooglePlusG, faInstagram)
const fbIcon = <FontAwesomeIcon style={{ color: '#4267B2', 'margin': '0px 10px 10px 0px', 'width': '25px' }} icon={faFacebook} />
const twitterIcon = <FontAwesomeIcon style={{ color: '#1DA1F2', 'margin': '0px 10px 10px 10px', 'width': '25px' }} icon={faTwitter} />
const pinIcon = <FontAwesomeIcon style={{ color: '#E60023', 'margin': '0px 10px 10px 10px', 'width': '25px' }} icon={faPinterest} />
const googleIcon = <FontAwesomeIcon style={{color: '#db4a39', 'margin': '0px 10px 10px 10px', 'width': '25px' }} className="googleIcon" icon={faGooglePlusG} />
const instaIcon = <FontAwesomeIcon style={{ color: '#833AB4', 'margin': '0px 10px 10px 10px', 'width': '25px' }} icon={faInstagram} />

// { fbIcon }
// { twitterIcon }
// { pinIcon }
// { googleIcon }
// { instaIcon }
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  posts
}) => {
  const PostContent = contentComponent || Content
  const [backToArray, setBackToArray] = useState(null)
  const [blogSearchValue, setBlogSearchValue] = useState(null)
  const [searchedArr, setSearchedArr] = useState(null)
  useEffect(() => {
    function uniqueTags() {
      let tags = []
      if (posts) {
        
        console.log('posts', posts)
        posts.forEach((post) => {
          if (post.node.frontmatter.tags) {
            post.node.frontmatter.tags.forEach(element => {
              tags.push(element)
            });
          }
        });
        const uniqueSet = new Set(tags);
        setBackToArray([...uniqueSet]);
      }
    }
    uniqueTags()

  }, [])
  const getSearchVal = (event) => {
    console.log('event value', event.target.value);
    setBlogSearchValue(event.target.value)

  }
  const getSearches = (keyword, data) => {
    console.log('parameter data', data);
    var newStr = data.filter((lowerme) => {
      const element = lowerme;
      let title = element.node.frontmatter.title
      var strLowerCase = title.toLowerCase();
      var isKeywordIncluded = strLowerCase.includes(keyword.toLowerCase());
      if (isKeywordIncluded) {
        return lowerme;
      }
    });
    setSearchedArr([...newStr])

    return newStr;
  }
  // console.log('backToArray', backToArray)
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div style={{ padding: '25px' }} className="column box is-9 is-offset-0">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4 style={{ marginBottom: '0px' }}>Tags</h4>
                <ul style={{ marginTop: '0px' }} className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <ul><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div style={{marginTop: '25px'}}>
              {fbIcon}
              {twitterIcon}
              {pinIcon}
              {instaIcon}
              {googleIcon}
            </div>
          </div>
          <div className="column rightSideSectionColumn">
            <div className="">
              <div className="rightSideSection box blogSection">

                <div className="column rightSideSectionColumn" style={{ 'paddingRight': '0px' }}>
                  <div >
                    <input className="input" type="text" placeholder="Search blogs" />
                  </div>
                </div>
                <h3>Newest</h3>
                {!searchedArr ? (
                  <p>Search for Blogs</p>
                ) : searchedArr.length !== 0 ? searchedArr.map((blogItem, index) => (
                  <>
                    <div style={{ marginBottom: '20px' }}>
                      <Link key={Math.random()} to={blogItem.node.fields.slug}>
                        <h3 style={{ 'marginBottom': 0 }}>{blogItem.node.frontmatter.title}</h3>
                        <p>{blogItem.node.frontmatter.date}</p>
                      </Link>
                    </div>
                  </>
                )) : <p>No blogs found</p>}
              </div>
              <div className="rightSideSection box tagSection">
                <h3>Search by Tags:</h3>
                <ul className="taglist">
                  {backToArray ? backToArray.map((tag, index) => (
                    <li key={index + 1000} className="allTags">
                      <Link className="tagLink" to={`/tags/${kebabCase(tag)}/`}>
                        {tag.padEnd(100, ' ')}
                      </Link>
                    </li>
                  )) : <p>No Tags found</p>}
                </ul>


              </div>

              <div>
              </div>

              <div className="rightSideSection box tagSection">
                <h3>Ad space</h3>
                <ul className="taglist">
                  {['ad1', 'ad2', 'ad3'] ? ['ad1', 'ad2', 'ad3'].map((tag, index) => (
                    <li key={index + 1000} className="allTags">
                      {tag.padEnd(100, ' ')}
                    </li>
                  )) : <p>No ads found</p>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post, allMarkdownRemark } = data
  console.log('allMarkdownRemark', allMarkdownRemark);
  return (
    <>
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          posts={allMarkdownRemark.edges}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      </Layout>
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.array,
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    },
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
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
