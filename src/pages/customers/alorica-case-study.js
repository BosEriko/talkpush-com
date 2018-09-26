import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'alorica-case-study',
  pageDescription: 'Alorica\'s Case Study',
}

const AboutPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default AboutPage