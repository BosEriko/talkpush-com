import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/privacy.module.scss'

const pageVariables = {
  pageCode: 'privacy',
  pageDescription: 'In accordance with international data privacy laws, our privacy laws protect all candidate data from being shared, accessed or sold outside of their consent.',
  pageTitle: 'Privacy Policy',
}

class PrivacyPage extends React.Component {
  componentDidMount() {
    window.headerAlwaysActive = true;
    document.getElementById("header").classList.add("active")
  }
  componentWillUnmount() {
    window.headerAlwaysActive = false;
  }
  render() {
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={pageVariables.pageDescription} />
          <meta property='og:description' content={pageVariables.pageDescription} />
        </Helmet>
        <div className="container">
          Privacy
        </div>
      </div>
    );
  }
}

export default PrivacyPage
