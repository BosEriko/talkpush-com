import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'angeni-augmented-recruiter',
  pageDescription: 'Angeni Kirsten Miranda (Augmented Recruiter)',
}

const AugmentedRecruiterAngeni = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default AugmentedRecruiterAngeni
