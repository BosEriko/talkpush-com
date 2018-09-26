import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'genpact-demo',
  pageDescription: 'Genpact Demo Page',
}

const GenpactDemoPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default GenpactDemoPage
