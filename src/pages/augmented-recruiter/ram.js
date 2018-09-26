import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'ram-augmented-recruiter',
  pageDescription: 'Ram Jakaria (Augmented Recruiter)',
}

const AugmentedRecruiterRam = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default AugmentedRecruiterRam
