import React from 'react'
import styles from './style/adapting-recruitment.module.scss'
import Link from 'gatsby-link'
import conversationIcon from './images/adapting-recruitment/conversation.svg'
import fasterIcon from './images/adapting-recruitment/faster.svg'
import multiplatformIcon from './images/adapting-recruitment/multiplatform.svg'

const AdaptingRecruitmentIndexPageSplit = () => (
  <div className={styles.block}>
    <div className="container">
      <h2 className="global-hero-glow-white m-0 p-0">Adapting Recruitment to New Behaviours</h2>
      <h4 className="p-0">Meet your candidates where they live and create engaging digital recruitment experiences</h4>
      <div className={styles.blockDivider}>
        <div className={styles.blockDividerItem}>
          <div className={styles.blockDividerItemImage}><img src={fasterIcon} alt="Faster Application" title="Faster Application" /></div>
          <h3 className="global-hero-glow-white m-0 p-0">Makes applications faster</h3>
          <p>In less than 5 minutes, candidates can apply, complete a first screening, and be told if they are shortlisted. This used to take days.</p>
          <div className={styles.blockDividerItemLink}><Link to="/crm" className="global-button text-lowercase">Read More</Link></div>
        </div>
        <div className={styles.blockDividerItem}>
          <div className={styles.blockDividerItemImage}><img src={conversationIcon} alt="Keep it Going" title="Keep it Going" /></div>
          <h3 className="global-hero-glow-white m-0 p-0">Keep the conversation going</h3>
          <p>Once a conversation is engaged with a candidate via Talkpush, it lives on. Using SMS and messaging, employers get a 99% read rate and 70%+ response rate.</p>
          <div className={styles.blockDividerItemLink}><Link to="/crm" className="global-button text-lowercase">Read More</Link></div>
        </div>
        <div className={styles.blockDividerItem}>
          <div className={styles.blockDividerItemImage}><img src={multiplatformIcon} alt="Multiplatform" title="Multiplatform" /></div>
          <h3 className="global-hero-glow-white m-0 p-0">Meet them where they live</h3>
          <p>Talkpush allows you to engage a conversation with candidates on the platform they live on: Facebook Messenger, WeChat, Line, etc.</p>
          <div className={styles.blockDividerItemLink}><Link to="/crm" className="global-button text-lowercase">Read More</Link></div>
        </div>
      </div>
    </div>
  </div>
)

export default AdaptingRecruitmentIndexPageSplit