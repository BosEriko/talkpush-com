import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from '../pages-style/our-style.module.scss'
import phoneIcon from '../pages-images/our-style/phone-icon.svg'
import talentIcon from '../pages-images/our-style/talent-icon.png'
import cultureIcon from '../pages-images/our-style/culture-icon.svg'
import joinIcon from '../pages-images/our-style/join-icon.svg'

const pageVariables = {
  pageCode: 'our-style',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
  pageTitle: 'Our Style',
}

const OurStylePage = ({ siteTitle }) => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageTitle} - {siteTitle}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}></div>
    <div className={styles.blockContent}>
      <div className="container">
        <div className={styles.blockContentDivider}>
          <div className={styles.blockContentDividerLeft}>
            <img src={talentIcon} alt="Talent" />
          </div>
          <div className={styles.blockContentDividerRight}>
            <h2 className="global-hero-glow-green m-0 p-0">The world is our talent pool</h2>
            <p>We have offices in Hong Kong, Mexico City, Costa Rica, Delhi and Manila. All this traveling can be exhausting at times, but the effort is well worth it. First, it allows us to understand local markets better and to build recruitment experiences that are adapted to the local culture. Secondly, it means we attract a great diversity of talent. For each new role, we try to hire the best person, regardless of where he or she is located. Being so spread out also means we have to make an extra effort to stay connected, so we make extensive use of messaging and video to make sure everybody stays in the loop. We also get together a few times of year for some quality bonding time.</p>
          </div>
        </div>
        <div className={styles.blockContentDivider}>
          <div className={styles.blockContentDividerLeft}>
            <img src={phoneIcon} alt="Phone" />
          </div>
          <div className={styles.blockContentDividerRight}>
            <h2 className="global-hero-glow-green m-0 p-0">Things that we believe in</h2>
            <p>Everyone has a voice. Everyone has something to offer. So how come so many candidates never get a chance to be heard? At Talkpush, we take down the invisible wall that stands between candidates and recruiters. We make it easier for conversations to start. We do our part in making the world a more connected and productive place by starting thousands of recruitment conversations every day.</p>
            <p>We are technologists and humanists. We believe software is designed to serve humans, not the other way around. Automation should be a gradual process built around the user. We design software which is human-centric and mobile-first.</p>
            <p>We also love speech. Actual spoken words. Why limit yourselves to the written word if candidates want to speak to you? Speech is more natural, intuitive and data-rich. Messaging is our preferred communication technology, because it allows for more conversations to happen simultaneously.</p>
          </div>
        </div>
        <div className={styles.blockContentDivider}>
          <div className={styles.blockContentDividerLeft}>
            <img src={cultureIcon} alt="Culture" />
          </div>
          <div className={styles.blockContentDividerRight}>
            <h2 className="global-hero-glow-green m-0 p-0">Our work culture</h2>
            <p>Every day, Talkpush is making it easier for good companies to hire good people, and that makes us feel great. Admittedly, we have a short attention span but that’s because our days are packed. Making recruitment processes simple is a lot of work. We get it done, removing one barrier at a time.</p>
            <p>Some of us work from the office, some of us work from home. We don’t keep track of time. We don’t count the amount of vacation we take. Some of us wear suits, some of us wear shorts and sandals. We don’t think the work/life balance debate makes much sense. We come to work because we want to change the world every day, a little bit at a time. Honestly, it’s the only way to Live.</p>
          </div>
        </div>
        {/* <div className={styles.blockContentVideoHolder}>
          <h2 className="global-hero-glow-green m-0 p-0">A word from Max</h2>
          <div className={styles.blockContentVideoHolderVideo}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gNISmYgHKC4" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div> */}
        {/* <div className={styles.blockContentSpeech}>
          <span>Hi there. My name is Max Armbruster.</span>
          <p>"A decade ago, I used to interview hundreds of candidates over the phone every year. It was gruesome, unproductive, soul- drenching work but I could not find a technology that did not create an additional barrier between me and the candidates. So I just kept on calling...</p>
          <p>Eight years ago, I co-founded an Applicant Tracking Software company in Singapore. Meeting the largest employers in Asia, I noticed that many of them were choosing complicated job application processes with the specific purpose of limiting the number of candidates (less resumes to sift through...). It seemed like a wrong way to go about talent selection.</p>
          <p>Five years ago, I sold my company and joined SAP, the enterprise software leader. There, I got a better understanding on how complicated it is to make things simple, particularly for large enterprises. More stakeholders means more complexity, leaving everyone frustrated. I wanted to build a simple recruitment solution that made connecting with candidates as easy as making a phone call.</p>
          <p>In 2014, I partnered with experts in web and voice technology and we released the first Talkpush prototype. I founded the company and we signed our first client, a small call center. The rest, as they say, is history.</p>
          <p>Today, our software interviews more candidates than any chatbot in the world, and helps thousands of job seekers find work every year. The messaging revolution, allowing for asynchronous conversations to happen on Facebook Messenger, WeChat, WhatsApp and other chat platforms is fuelling new wave of productivity. We were very fortunate to be in this space at the right time.</p>
          <p>Tomorrow, we want to re-engineer your recruitment process. Do you wish to create more openness and more simplicity in your recruitment? If so, drop me a line!"</p>
          <span>Max</span>
        </div> */}
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
  </div>
)

export default OurStylePage