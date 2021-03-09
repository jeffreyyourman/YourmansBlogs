import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { kebabCase } from 'lodash'


const searchIcon = <FontAwesomeIcon icon={faSearch} />

class BlogRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchedArr: null, blogSearchValue: "" };
    this.getSearchVal = this.getSearchVal.bind(this);
    this.getSearches = this.getSearches.bind(this);
  }
  getSearchVal(event) {
    console.log('event value', event.target.value);
    this.setState({ blogSearchValue: event.target.value })
  }
  getSearches(keyword, data) {
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
    this.setState({ searchedArr: [...newStr] });
    return newStr;
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let tags = []
    let titleMaxLength = 0;
    let descriptionMaxLength = 0;
    posts.forEach((post) => {
      if (post.node.frontmatter.tags) {
        post.node.frontmatter.tags.forEach(element => {
          tags.push(element)
        });
      }
    });

    return (
      <div className="columns is-desktop">
        <div style={{ marginRight: '10px' }} className="columns">
          {posts &&
            posts.map(({ node: post }) => {
              // console.log('post', post);

              // console.log('description', post.excerpt.length);
              // let paddedDescription = post.excerpt.padEnd(300)
              return <div style={{ "display": "inline-flex" }} className="column" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >

                  <header>
                    {post.frontmatter.featuredimage ? (

                      <div style={{ margin: '0px' }} className="featured-thumbnail">

                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </header>
                  <div>
                    <span style={{fontSize:'12px'}} className="subtitle">
                      {post.frontmatter.date}
                    </span>
                    <p style={{ 'whiteSpace': 'break-spaces' }} className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {`${post.frontmatter.title.padEnd(titleMaxLength - post.frontmatter.title.length, ' ')}`}

                        {/* {post.frontmatter.title} */}
                      </Link>

                    </p>
                    <p style={{ 'whiteSpace': 'break-spaces' }}>
                      {post.excerpt}
                      {/* {`${post.excerpt.length > 100 ? post.excerpt.slice(0,100) : post.excerpt.padEnd(100, ' ')}`} */}

                    </p>

                  </div>
                </article>
              </div>
            })}
        </div>
        <div className="column box filterPosts is-one-quarter">
          <div style={{ "display": "inline-block" }} className="is-parent">
            {/* <> */}
            <div style={{ "display": "flex" }} className="control has-icons-left has-icons-right">
              <input className="input is-medium" value={this.state.blogSearchValue} onChange={this.getSearchVal} type="text" placeholder="Search blogs" />
              <button onClick={() => {
                this.getSearches(this.state.blogSearchValue, posts)
                this.setState({ blogSearchValue: "" })
              }}> {searchIcon} </button>
            </div>
            <h3>Newest</h3>
            {!this.state.searchedArr ? (
              <p>Search for Blogs</p>
            ) : this.state.searchedArr.length !== 0 ? this.state.searchedArr.map((blogItem, index) => (
              <>
                {/* <PreviewCompatibleImage
                  imageInfo={{
                    image: blogItem.node.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${blogItem.node.frontmatter.title}`,
                  }} /> */}
                <div style={{ marginBottom: '20px' }}>
                  <Link key={Math.random()} to={blogItem.node.fields.slug}>
                    <h3 style={{ 'marginBottom': 0 }}>{blogItem.node.frontmatter.title}</h3>
                    <p>{blogItem.node.frontmatter.date}</p>
                  </Link>
                </div>
              </>
            )) : <p>No blogs found</p>}
            <hr />
            <h3>Search by Tags:</h3>
            <ul className="taglist">
              {tags ? tags.map((tag, index) => (
                <li key={index + 1000} className="allTags">
                  <Link className="tagLink" to={`/tags/${kebabCase(tag)}/`}>
                    {tag.padEnd(100, ' ')}
                  </Link>
                </li>
              )) : <p>No tags found</p>}
            </ul>


            {/* 
              search component
              categories
              recent posts
              tags

            */}
            {/* </> */}
          </div>
        </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.array,
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
