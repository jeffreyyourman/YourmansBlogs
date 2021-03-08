import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faTwitterSquare, faPinterestSquare, faGooglePlusG, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
// import { faCheckSquare, faTable, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebookSquare, faTwitterSquare, faPinterestSquare, faGooglePlusG)
const fbIcon = <FontAwesomeIcon style={{ 'margin': '0px 10px 10px 10px', 'fontSize': '25px' }} icon={faFacebookSquare} />
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
        <div style={{ 'margin': 'auto', 'width': '95%' }} className="columns is-mobile">
          <div className="column">
            <img src="https://via.placeholder.com/728x100?text=728x90+LeaderboardC/Ohttps://placeholder.com/banner-ads/" />
          </div>
          <div className="column">
            <div style={{ 'height': '75px' }}>
              <img src="https://via.placeholder.com/728x100?text=728x90+LeaderboardC/Ohttps://placeholder.com/banner-ads/" />
            </div>
          </div>
          <div className="column">
            <div >
              {fbIcon}
              {twitterIcon}
              {pinIcon}
              {instaIcon}
              {googleIcon}
            </div>
          </div>
        </div>
        <section className="section">
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
