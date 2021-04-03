import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faPinterest, faGooglePlusG, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faFacebook, faTwitter, faPinterest, faGooglePlusG, faInstagram)

const fbIcon = <FontAwesomeIcon style={{ color: '#4267B2', 'margin': '0px 20px 10px 0px', 'width': '35px' }} icon={faFacebook} />
const twitterIcon = <FontAwesomeIcon style={{ color: '#1DA1F2', 'margin': '0px 20px 10px 0px', 'width': '35px' }} icon={faTwitter} />
const pinIcon = <FontAwesomeIcon style={{ color: '#E60023', 'margin': '0px 20px 10px 0px', 'width': '35px' }} icon={faPinterest} />
const googleIcon = <FontAwesomeIcon style={{ color: '#db4a39', 'margin': '0px 20px 10px 0px', 'width': '35px' }} className="googleIcon" icon={faGooglePlusG} />
const instaIcon = <FontAwesomeIcon style={{ color: '#833AB4', 'margin': '0px 20px 10px 0px', 'width': '35px' }} icon={faInstagram} />


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
        {/* <> */}
        {/* <div stYYyle={{ marginTop: '5px', textAlign: 'center', marginBottom: '5px' }} >
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
        </div> */}
        {/* </> */}
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">

              <div style={{ paddingTop: '0px' }} className="column is-4">
                <section className="menu">
                  {/* <div style={{ marginLeft: '2em', paddingTop: '0px' }} className="column is-4"> */}
                  <section style={{ marginLeft: '2em', padding: '0.5em 0.75em' }} className="menu">

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
                  </section>
                  {/* </div> */}
                  <ul style={{ marginTop: '0px' }} className="menu-list">
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
                    {/* <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/products">
                        Products
                      </Link>
                    </li> */}
                    {/* <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    {/* <li className="linksLiFooter">
                      <a
                        className="navbar-item footerNavbarItem"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div style={{ paddingTop: '0px' }} className="column is-4">
                <section className="menu">
                  <ul style={{ marginTop: '0px' }} className="menu-list">
                    {/* <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/blog">
                        Latest Stories footer
                      </Link>
                    </li> */}
                    <li className="linksLiFooter">
                      <Link className="navbar-item footerNavbarItem" to="/contact">
                        Contact
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
              <div style={{ marginLeft: '2em', paddingTop: '0px' }} className="column is-4">
                <section style={{ padding: '0.5em 0.75em' }} className="menu">
                  <h3 style={{ color: 'whitesmoke' }}>About us</h3>
                  <p>
                    this is the about us section this is the about us section
                    this is the about us section this is the about us section
                    this is the about us section this is the about us section
                    this is the about us section this is the about us section
                    this is the about us section this is the about us section
                  </p>
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
