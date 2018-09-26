import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'career-bot-demo',
  pageDescription: 'Join a global team of disruptors, creators and futurists. Help define how machines and humans will interact tomorrow on the matter of recruitment.',
}

const CareerBotDemoPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default CareerBotDemoPage
