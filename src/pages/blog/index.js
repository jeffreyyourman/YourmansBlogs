import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faTwitterSquare, faPinterestSquare, faGooglePlusG, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
// import { faCheckSquare, faTable, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebookSquare, faTwitterSquare, faPinterestSquare, faGooglePlusG)
const fbIcon = <FontAwesomeIcon style={{ 'margin': '0px 10px 10px 0px', 'fontSize': '25px' }} icon={faFacebookSquare} />
const twitterIcon = <FontAwesomeIcon style={{ 'margin': '0px 10px 10px 10px', 'fontSize': '25px' }} icon={faTwitterSquare} />
const pinIcon = <FontAwesomeIcon style={{ 'margin': '0px 10px 10px 10px', 'fontSize': '25px' }} icon={faPinterestSquare} />
const googleIcon = <FontAwesomeIcon style={{ 'margin': '0px 10px 10px 10px', 'fontSize': '25px' }} icon={faGooglePlusG} />
const instaIcon = <FontAwesomeIcon style={{ 'margin': '0px 10px 10px 10px', 'fontSize': '25px' }} icon={faInstagramSquare} />

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories index.js
          </h1>
        </div> */}
        <div style={{ 'margin': 'auto', 'width': '95%' }} className="columns is-desktop">
          <div className="column  is-desktop">
            <img src="https://via.placeholder.com/728x100?text=728x90+LeaderboardC/Ohttps://placeholder.com/banner-ads/" />
          </div>
          <div className="column  is-desktop">
            <div style={{ 'height': '75px' }}>
              <img src="https://via.placeholder.com/728x100?text=728x90+LeaderboardC/Ohttps://placeholder.com/banner-ads/" />
            </div>
          </div>
          <div className="column is-3">
            <div className="socialIconsDiv" >
              {fbIcon}
              {twitterIcon}
              {pinIcon}
              {instaIcon}
              {googleIcon}
            </div>
          </div>
        </div>

        {/* <div style={{ 'margin': 'auto', 'width': '95%' }} className="columns is-desktop">
          <div className="column">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main-navigation"
            >
              <div className="container">
                <div className="navbar-brand">
                  <div
                    data-target="navMenu"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div
                  id="navMenu"
                >
  
                  <div className="navbar-start has-text-centered">
                    <Link className="navbar-item" to="/about">
                      Arts & Crafts
                    </Link>
                    <Link className="navbar-item" to="/blog">
                      Photography
                    </Link>
                    <Link className="navbar-item" to="/blog">
                      SVG - Cricut Designing
                    </Link>
                    <Link className="navbar-item" to="/blog">
                      Mother of the Bride Tips
                    </Link>
                    <Link className="navbar-item" to="/contact">
                      Creative Crafts
                    </Link>
                  </div>
                  <div className="navbar-end has-text-centered">

                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="column is-3">
            <div >
              <input className="input is-medium" type="text" placeholder="Search blogs" />
            </div>
          </div>
        </div> */}

        <section className="section categoryNavbar  is-desktop">
          <div className="container">
            <div className="columns  is-desktop">
              <div className="column">
                <nav className="navbar" style={{'fontSize': '15px'}}rolrrre="navigation" ariaaa-label="main navigation">
                  <div className="navbar-brand">
                    {/* <a className="navbar-item" href="https://bulma.io">
                      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a> */}

                    {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a> */}
                  </div>

                  <div id="navbarBasicExample" classNameee="navbar-menu">
                    <div className="navbar-start">
                      <a className="navbar-item">
                        Arts & Crafts
                      </a>
                      <a className="navbar-item">
                        Photography
                      </a>
                      <a className="navbar-item">
                        SVG - Cricut Designing
                      </a>
                      <a className="navbar-item">
                        Mother of the Bride Tips
                      </a>
                      <a className="navbar-item">
                        Creative Crafts
                      </a>
                    </div>

                    {/* <div className="navbar-end">
                      <div className="navbar-item">
                        <div className="buttons">
                          <a className="button is-primary">
                            <strong>Sign up</strong>
                          </a>
                          <a className="button is-light">
                            Log in
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </nav>

                {/* <nav
                  className="navbar"
                  role="navigation"
                  aria-label="main-navigation"
                >
                  <div className="container">
          
                    <div
                      id="navMenu"
                    >

                      <div className="navbar-start">
                        <Link className="navbar-item" to="/about">
                          Arts & Crafts
                        </Link>
                        <Link className="navbar-item" to="/blog">
                          Photography
                        </Link>
                        <Link className="navbar-item" to="/blog">
                          SVG - Cricut Designing
                        </Link>
                        <Link className="navbar-item" to="/blog">
                          Mother of the Bride Tips
                        </Link>
                        <Link className="navbar-item" to="/contact">
                          Creative Crafts
                        </Link>
                      </div>
                      <div className="navbar-end has-text-centered">

                      </div>
                    </div>
                  </div>
                </nav> */}
              </div>
              <div className="column is-3 " style={{ 'paddingRight': '0px' }}>
                <div >
                  <input className="input" type="text" placeholder="Search blogs" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section blogSection is-desktop">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
