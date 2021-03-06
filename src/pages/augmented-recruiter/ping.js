import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'ping-augmented-recruiter',
  pageDescription: 'Ping Catalina (Augmented Recruiter)',
}

const AugmentedRecruiterPing = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default AugmentedRecruiterPing
