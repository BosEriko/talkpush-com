import React from 'react'
import Helmet from 'react-helmet'
import TalkToYourCandidateIndexPageSplit from '../pages-split/index/talk-to-your-candidate'
import CrmIndexPageSplit from '../pages-split/index/crm'
// import AdaptingRecruitmentIndexPageSplit from '../pages-split/index/adapting-recruitment'
import ImpactTheNumbersIndexPageSplit from '../pages-split/index/impact-the-numbers'
import AugmentedRecruitersIndexPageSplit from '../pages-split/index/augmented-recruiters'

const pageVariables = {
  pageCode: 'index',
  animationSpeed: '800',
  animationOnce: 'true',
  pageDescription: 'Ready to accelerate recruitment? Talkpush is the leading productivity platform and the most high-volume chatbot for hiring talent via Facebook, WeChat and messaging.',
  pageTitle: 'Let your talent talk | Recruitment Chatbot Platform',
}

const IndexPage = ({ siteTitle }) => (
  <div>
    <Helmet>
      <title>{siteTitle} - {pageVariables.pageTitle}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div>
      <TalkToYourCandidateIndexPageSplit />
      <CrmIndexPageSplit />
      {/* <AdaptingRecruitmentIndexPageSplit /> */}
      <ImpactTheNumbersIndexPageSplit />
      <AugmentedRecruitersIndexPageSplit />
    </div>
  </div>
)

export default IndexPage