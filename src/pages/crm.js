import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/crm.module.scss'
import Link from 'gatsby-link'
import joinIcon from '../pages-images/crm/join-icon.svg'
import conversationsImage from '../pages-images/crm/conversations.png'
import overFormsIcon from '../pages-images/crm/over-forms.svg'
import talentTalkImage from '../pages-images/crm/talent-talk.png'
import talentTalkIcon from '../pages-images/crm/talent-talk.svg'
import multichannelImage from '../pages-images/crm/multichannel.gif'
import multichannelIcon from '../pages-images/crm/multichannel.svg'
import speedIcon from '../pages-images/crm/speed.svg'
import buildingImage from '../pages-images/crm/building.png'
import buildingIcon from '../pages-images/crm/building.svg'
import aiImage from '../pages-images/crm/ai.jpeg'
import aiIcon from '../pages-images/crm/ai.svg'
import chromeImage from '../pages-images/crm/chrome.png'
import chromeIcon from '../pages-images/crm/chrome.svg'
import recordImage from '../pages-images/crm/record.png'
import recordIcon from '../pages-images/crm/record.svg'
import apiImage from '../pages-images/crm/api.jpg'

const pageVariables = {
  pageCode: 'crm',
  pageDescription: 'Candidate Relationship Management for the messaging age',
  pageTitle: 'CRM',
}

const calendlyPopUp = () => {
  Calendly.showPopupWidget('https://calendly.com/talkpush-demo/talkpush-intro-demo/');
}

const crmItem = (reverse, photo, title, paragraph, icon, linkDestination, linkText, calendly) => {
  return (
    <div className={styles.blockContentItem} style={reverse === true ? { flexDirection: "row-reverse" } : null}>
      <div className={reverse === true ? styles.blockContentItemImageReverse : styles.blockContentItemImage}>
        {photo ? <img src={photo} alt={title} /> : <div><iframe width="560" height="315" src="https://www.youtube.com/embed/eXChER-YIGk" frameBorder="0" allowFullScreen=""></iframe></div>}
      </div>
      <div className={styles.blockContentItemDescription}>
        <div className={styles.blockContentItemDescriptionHero}>
          <h3 className="global-hero-glow-green m-0 p-0">{title}</h3>
          {icon ?
            <div className={styles.blockContentItemDescriptionHeroImage}>
              <img src={icon} alt="Over Forms" />
            </div>
            : null}
        </div>
        <p className="m-0 p-0">{paragraph}</p>
        {linkText ?
          <div className={reverse === true ? styles.blockContentItemDescriptionLinkReverse : styles.blockContentItemDescriptionLink}>
            <a onClick={calendly ? calendly : null} target={calendly ? null : "_blank"} className="global-button" href={linkDestination}>{linkText}</a>
          </div>
          : null}
      </div>
    </div>
  )
}

const CrmPage = ({ siteTitle }) => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageTitle} - {siteTitle}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}>
      <div className={styles.blockHeaderContent}>
        <div className="container">
          <h1 className="global-hero-glow-white">A CRM designed for <span>Messaging and Voice</span></h1>
        </div>
      </div>
    </div>
    <div className={styles.blockContent}>
      <div className="container">
        {crmItem(false, conversationsImage, "Conversations over forms", "Talkpush captures information from resumes or forms, but Talkpush goes beyond other recruitment systems. With the job application process handled like a conversation, your candidates can begin their journey with a simple “hello”. Conversations keep them engaged and improve your conversion rates.", overFormsIcon, "#", "See it in action", calendlyPopUp)}
        {crmItem(true, talentTalkImage, "Let the talent talk", "Resumes are nice, but they only tell a small part of the story. If you want to know a candidate, you need to listen to them. By asking candidates to record audio and video responses during the application, recruiters can evaluate communications and language skills as well as the ability to think on their feet.", talentTalkIcon, "#", "Request a Demo", calendlyPopUp)}
        {crmItem(false, multichannelImage, "Multichannel", "Don’t make it harder for good talent to find you. Open all communications channels: job boards, phone lines, social media... On Talkpush, you can chat with thousands of candidates via SMS, Facebook or voice and automate as much or as little of that conversation as you’d like.", multichannelIcon, "#", "Talk to us about Marketing", calendlyPopUp)}
        {crmItem(true, false, "Speed is everything", "In recruitment, speed is everything. A candidate in high demand will most likely end up working for the employer who has responded first. Talkpush helps recruiters minimize the response time to candidates by 80%. Every time a candidate moves to a new stage of the process, new actions are triggered ensuring that the best candidates are fast tracked and that every candidate is kept informed.", speedIcon, "#", false, false)}
        {crmItem(false, buildingImage, "Building and maintaining relationships at scale", "With inboxes polluted with spam and poorly targeted offers, it’s no wonder that email marketing is on its last legs... Talkpush allows you to manage your talent pool via to personalized one-on-one conversations over SMS or messaging apps.", buildingIcon, "#", false, false)}
        {crmItem(true, aiImage, "Artificial Intelligence", "What if you could focus 100% of your time on the qualified candidates? That's the promise of the SmartFilter which lets you eliminate unsuitable candidates automatically right when they apply.", aiIcon, "#", false, false)}
        {crmItem(false, chromeImage, "LinkedIn lead capture", "If your team spends time searching applicants online, whether it be on LinkedIn, Facebook Groups, or job boards like Indeed or Monster, they will love the Talkpush Chrome Plugin, from which they can add candidates to campaign in a fraction of the time.", chromeIcon, "https://chrome.google.com/webstore/detail/talkpush/hikdfefkfklgdnhgkdfdddeaicbgebbg?hl=en-US", "Download Here", false)}
        {crmItem(true, recordImage, "Record everything", "With Talkpush your recruiters can make & receive calls with all candidates at the click of a button, moving their conversation past Emails & SMS. With every call recorded and all activity tracked, Talkpush is a tool for you to improve your technique and drive productivity.", recordIcon, "#", false, false)}
        {crmItem(false, apiImage, "Integrated with your ATS", "If your team spends time searching applicants online, whether it be on LinkedIn, Facebook groups, or job boards like Indeed or Monster, they will love the Talkpush Chrome Plugin, from which they can add candidates to campaign in a fraction of the time.", false, "#", false, false)}
        <div className={styles.blockContentJoin}>
          <div className={styles.blockContentJoinIcon}>
            <img src={joinIcon} alt="Join Us" />
          </div>
          <div className={styles.blockContentJoinDetails}>
            <h3>Join our growing team</h3>
            <p className="m-0 p-0">Join Talkpush and let's make recruitment fun together</p>
            <Link to="/jobs">Careers</Link>
          </div>
        </div>
      </div>
    </div>
    {/* <div className={styles.blockCTA}>
      <h3 className="global-hero-glow-green m-0 p-0">Ready to get started?</h3>
      <a href="#" onClick={calendlyPopUp} className="global-button">
        <i className="fa fa-send-o fa-fw" aria-hidden="true"></i>
        <span>Request a Demo</span>
      </a>
    </div> */}
  </div>
)

export default CrmPage
