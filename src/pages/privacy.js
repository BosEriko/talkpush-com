import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'privacy',
  pageDescription: 'In accordance with international data privacy laws, our privacy laws protect all candidate data from being shared, accessed or sold outside of their consent.',
}


const PrivacyPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default PrivacyPage
