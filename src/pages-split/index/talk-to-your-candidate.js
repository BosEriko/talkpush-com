import React from 'react'
import styles from './style/talk-to-your-candidate.module.scss'
import chatbotIcon from '../../icons/chatbot-white.svg'
import crmIcon from '../../icons/crm-white.svg'
import Link from 'gatsby-link'

const calendlyPopUp = () => {
  Calendly.showPopupWidget('https://calendly.com/talkpush-demo/talkpush-intro-demo/');
}

const TalkToYourCandidateIndexPageSplit = () => (
  <div className={styles.block}>
    <div className={styles.fillLeft}></div>
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        {/* Content Start */}
        <div className={styles.contentLeftContent}>
          <h1 className="global-hero-glow-white text-uppercase m-0 p-0">Level up</h1>
          <h1 className="global-hero-glow-green text-uppercase m-0 p-0">your Recruitment Experience</h1>
          <p>Recruiting is pretty simple: get your recruiters and your candidates to talk to each other and watch good things happen. Talkpush is the conversational Candidate Relationship Management (CRM) system.</p>
          <div className={styles.bigButtonHolder}><a onClick={calendlyPopUp} href="#" className="global-button"><i className="fa fa-send-o fa-fw" aria-hidden="true"></i>Request Demo</a></div>
          {/* <div className={styles.otherButtonHolder}>
            <Link activeClassName="activePage" to="/crm" className="global-button"><img src={crmIcon} alt="CRM" />Discover our CRM Features</Link>
            <a href="https://m.me/774293282630560?ref=apply_for_position(2667)" target="_blank" className="global-button"><img src={chatbotIcon} alt="Chatbot" />Check our Chatbot</a>
          </div> */}
        </div>
        {/* Content End */}
      </div>
      <div className={styles.contentRight}></div>
    </div>
    <div className={styles.fillRight}></div>
  </div>
)

export default TalkToYourCandidateIndexPageSplit