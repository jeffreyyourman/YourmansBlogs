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
    posts.forEach((post) => {
      if (post.node.frontmatter.tags) {
        post.node.frontmatter.tags.forEach(element => {
          tags.push(element)
        });
      }
    });

    return (
      <div className="columns is-multiline is-mobile">
        <div className="column">
          {posts &&
            posts.map(({ node: post }) => (
              <div style={{ "display": "inline-block" }} className="is-parent column is-5" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >

                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                  </Link>
                  </p>
                </article>
              </div>
            ))}
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
                <div style={{marginBottom:'20px'}}>
                  <Link key={Math.random()} to={blogItem.node.fields.slug}>
                    <h3 style={{'marginBottom': 0}}>{blogItem.node.frontmatter.title}</h3>
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
                    {tag}
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
