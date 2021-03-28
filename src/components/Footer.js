import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faTwitterSquare, faPinterestSquare, faGooglePlusG, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
// import { faCheckSquare, faTable, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebookSquare, faTwitterSquare, faPinterestSquare, faGooglePlusG)
const fbIcon = <FontAwesomeIcon style={{ color: '#4267B2', display: 'inline', verticalAlign: 'middle', 'fontSize': '25px' }} icon={faFacebookSquare} />
const twitterIcon = <FontAwesomeIcon style={{ color: '#1DA1F2', display: 'inline', verticalAlign: 'middle', 'fontSize': '25px' }} icon={faTwitterSquare} />
const pinIcon = <FontAwesomeIcon style={{ color: '#E60023', display: 'inline', verticalAlign: 'middle', 'fontSize': '25px' }} icon={faPinterestSquare} />
const googleIcon = <FontAwesomeIcon style={{ color: '#db4a39', display: 'inline', verticalAlign: 'middle', 'fontSize': '25px' }} className="googleIcon" icon={faGooglePlusG} />
const instaIcon = <FontAwesomeIcon style={{ color: '#833AB4', display: 'inline', verticalAlign: 'middle', 'fontSize': '25px' }} icon={faInstagramSquare} />

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div style={{paddingTop:'0px'}} className="column is-4">
                <section  className="menu">
                  <ul style={{marginTop: '0px'}} className="menu-list">
                    <li className="linksLiFooter">
                      <Link to="/" className="navbar-item footerNavbarItem">
                        Home
                      </Link>
                    </li>
                    <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/products">
                        Products
                      </Link>
                    </li>
                    <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li className="linksLiFooter">
                      <a
                        className="navbar-item footerNavbarItem"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div style={{paddingTop:'0px'}} className="column is-4">
                <section  className="menu">
                  <ul style={{marginTop: '0px'}} className="menu-list">
                    <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/blog">
                        Latest Stories footer
                      </Link>
                    </li>
                    <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <section className="menu">

                  {/* <div> */}
                  <a title="facebook" href="https://facebook.com">
                    {fbIcon}
                  </a>
                  {/* </div> */}

                  {/* <div> */}
                  <a title="twitter" href="https://twitter.com">
                    {twitterIcon}
                  </a>
                  {/* </div> */}

                  {/* <div> */}
                  <a title="instagram" href="https://instagram.com">
                    {instaIcon}
                  </a>
                  {/* </div> */}

                  {/* <div> */}
                  <a title="googlePlus" href="https://google.com">
                    {googleIcon}
                  </a>
                  {/* </div> */}

                  {/* <div> */}
                  <a title="pinterest" href="https://pinterest.com">
                    {pinIcon}
                  </a>
                  {/* </div> */}
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
