import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faPinterest, faGooglePlusG, faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { faCheckSquare, faTable, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebook, faTwitter, faPinterest, faGooglePlusG,faInstagram)
const fbIcon = <FontAwesomeIcon style={{ color: '#4267B2', 'margin': '0px 10px 10px 0px', 'width': '35px' }} icon={faFacebook} />
const twitterIcon = <FontAwesomeIcon style={{ color: '#1DA1F2', 'margin': '0px 10px 10px 10px', 'width': '35px' }} icon={faTwitter} />
const pinIcon = <FontAwesomeIcon style={{ color: '#E60023', 'margin': '0px 10px 10px 10px', 'width': '35px' }} icon={faPinterest} />
const googleIcon = <FontAwesomeIcon style={{ color: '#db4a39', 'margin': '0px 10px 10px 10px', 'width': '35px' }} className="googleIcon" icon={faGooglePlusG} />
const instaIcon = <FontAwesomeIcon style={{ color: '#833AB4', 'margin': '0px 10px 10px 10px', 'width': '35px' }} icon={faInstagram} />

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
        <div style={{ 'margin': 'auto', 'width': '95%', "textAlign": 'center' }} className="columns">
          <div className="column ">
            <img src="https://via.placeholder.com/728x100?text=728x90+LeaderboardC/Ohttps://placeholder.com/banner-ads/" />
          </div>
          <div className="column ">
            <div style={{ 'height': '75px' }}>
              <img src="https://via.placeholder.com/728x100?text=728x90+LeaderboardC/Ohttps://placeholder.com/banner-ads/" />
            </div>
          </div>
          <div className="column">
            <div className="socialIconsDiv" >
              <a title="facebook" target="_blank" href="https://facebook.com">
                {fbIcon}
              </a>
              <a title="twitter" target="_blank" href="https://twitter.com">
                {twitterIcon}
              </a>
              <a title="instagram" target="_blank" href="https://instagram.com">
                {instaIcon}
              </a>

              <a title="googlePlus" target="_blank" href="https://google.com">
                {googleIcon}
              </a>

              <a title="pinterest" target="_blank" href="https://pinterest.com">
                {pinIcon}
              </a>
            </div>
          </div>
        </div>




        <div style={{ 'margin': 'auto', 'width': '95%' }} className="columns is-desktop">
          <nav className="navbar" style={{ backgroundColor: 'transparent', fontSize: '15px' }} rolrrre="navigation" ariaaa-label="main navigation">
            <div id="navbarBasicExample" >
              {/* THIS GOES ABOVE DIV classNameee="navbar-menu" */}
              <div className="navbar-start categoryStartItem">
                <a className="navbar-item categoryItem">
                  Arts & Crafts
                </a>
                <a className="navbar-item categoryItem">
                  Photography
                </a>
                <a className="navbar-item categoryItem">
                  SVG - Cricut Designing
                </a>
                <a className="navbar-item categoryItem">
                  Mother of the Bride Tips
                </a>
                <a className="navbar-item categoryItem">
                  Creative Crafts
                </a>
              </div>
            </div>
          </nav>
        </div>
        <section className="section blogSection is-desktop">
          <div className="container-fluid">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
