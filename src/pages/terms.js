import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/terms.module.scss'

const pageVariables = {
  pageCode: 'terms',
  pageDescription: 'Terms and Conditions',
  pageTitle: 'Terms and Conditions',
}

class TermsPage extends React.Component {
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
          Terms
        </div>
      </div>
    );
  }
}

export default TermsPage
