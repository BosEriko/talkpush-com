import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './style/global.scss'

const facebookLiveChatScript = () => {
  if (typeof window !== 'undefined') {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '303226573347841',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.12'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}

const httpsRedirect = () => {
  if ((typeof window !== 'undefined') && (location.protocol != 'https:') && !(location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
}

const Layout = (props) => (
  <div>
    <Helmet>
      <title>{props.data.site.siteMetadata.title} - {props.data.site.siteMetadata.description}</title>
      <meta name='keywords' content={props.data.site.siteMetadata.metaKeywords} />
      <meta property='og:site_name' content={props.data.site.siteMetadata.title} />
      <meta property='og:title' content={props.data.site.siteMetadata.title} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={props.data.site.siteMetadata.image} itemprop='image' />
      <script>{facebookLiveChatScript()}</script>
      <script>{httpsRedirect()}</script>
    </Helmet>
    <Header title={props.data.site.siteMetadata.title} />
    <div>{props.children({ ...props, ...{ siteTitle: props.data.site.siteMetadata.title } })}</div>
    <Footer title={props.data.site.siteMetadata.title} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        metaKeywords
        image
      }
    }
  }
`
