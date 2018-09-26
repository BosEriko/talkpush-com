import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/jobs.module.scss'
import Modal from '../components/modal'
// import hiringIcon from '../pages-images/jobs/hiring.svg'
// import cultureIcon from '../pages-images/jobs/culture.svg'
// import locationIcon from '../pages-images/jobs/location.svg'
import hiringIconModal from '../pages-images/jobs/process_modal_icon.svg'
import cultureIconModal from '../pages-images/jobs/culture_modal_icon.svg'
import locationIconModal from '../pages-images/jobs/location_modal_icon.svg'
import floatingMessageIcon from '../pages-images/jobs/floating-message.svg'

class JobsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      modalDataValue: "hiring",
      modalData: {
        hiring: {
          title: "Our hiring process",
          icon: hiringIconModal,
          content: (
            <ol>
              <li>Have a chat with Stanley below to tell us a little about yourself</li>
              <li>We will review your answers and message you in the next 7 days if you are a potential fit</li>
              <li>We may ask you to do an audio/video screening as part of your evaluation</li>
            </ol>
          )
        },
        culture: {
          title: "Our culture",
          icon: cultureIconModal,
          content: (
            <div>Some of us work from the office, some of us work from home. We don’t keep track of time. We don’t count the amount of vacation we take. Some of us wear suits, some of us wear shorts and sandals. We don’t think the work/life balance debate makes much sense. We come to work because we want to change the world every day, a little bit at a time. Honestly, it’s the only way to Live.</div>
          )
        },
        location: {
          title: "Where are we",
          icon: locationIconModal,
          content: (
            <div>Talkpush has offices in 4 continents, with most of the team split between 4 offices: San Francisco, Manila (Philippines), Gurgaon (India) and San Jose (Costa Rica). We also have people in Berlin and Kuala Lumpur. And the rest of the world? We can’t wait to conquer it! The bottom line: if you’re a good fit, no matter where you are, we want to talk to you. We are 100% open to remote work.</div>
          )
        }
      }
    }
  }

  openModal = (e) => {
    e.preventDefault();
    document.getElementsByTagName("body")[0].classList.add("noScroll")
    this.setState({
      modalStatus: true
    })
  }

  closeModal = (e) => {
    e.preventDefault();
    document.getElementsByTagName("body")[0].classList.remove("noScroll")
    this.setState({
      modalStatus: false
    })
  }

  pageVariables = {
    pageCode: 'jobs',
    pageDescription: 'Ready to accelerate recruitment? Talkpush is the leading productivity platform and the most high-volume chatbot for hiring talent via Facebook, WeChat and messaging.',
    pageTitle: 'Jobs',
  }

  componentDidMount() {
    let botScrollFunction = () => window.scrollTo(0, document.body.scrollHeight)
    let talkpushFrame = document.getElementById("talkpush-bot-iframe")
    let talkpushFrameContent = talkpushFrame.contentWindow
    let setTalkpushFrameHeight = () => talkpushFrame.style.height = talkpushFrameContent.document.body.scrollHeight + "px"

    talkpushFrameContent.botOnReceive = () => {
      setTalkpushFrameHeight()
      botScrollFunction()
    }
    talkpushFrameContent.botOnSend = () => {
      setTalkpushFrameHeight()
      botScrollFunction()
    }

    document.getElementsByTagName("footer")[0].style.display = "none"
  }

  componentWillUnmount() {
    document.getElementsByTagName("footer")[0].style.display = "block"
  }

  render() {
    const { modalData, modalDataValue } = this.state;
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{this.pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        {this.state.modalStatus && <Modal closeModal={this.closeModal} middleIcon={modalData[modalDataValue].icon} maxWidth="400" title={modalData[modalDataValue].title} content={modalData[modalDataValue].content} />}
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderMessageIcon}>
            <img src={floatingMessageIcon} alt="Floating Message" />
          </div>
          <div className={styles.blockHeaderContent}>
            <div className={styles.blockHeaderContentFill}></div>
            <h1 className="global-hero-glow-white p-0 m-0">We're Hiring</h1>
            <p className="p-0">Thinking about working at Talkpush? We want to learn more about you so we can decide if there is a potential career for you at Talkpush. Talk to our recruitment agent Stanley below and start that conversation NOW.</p>
            <div className={styles.blockHeaderContentLink}>
              <a href="#" onClick={this.openModal} onMouseEnter={() => this.setState({ modalDataValue: "hiring" })} className="global-button">
                <i className="fa fa-users fa-fw" aria-hidden="true"></i>
                <span>Hiring Process</span>
              </a>
              <a href="#" onClick={this.openModal} onMouseEnter={() => this.setState({ modalDataValue: "culture" })} className="global-button">
                <i className="fa fa-coffee fa-fw" aria-hidden="true"></i>
                <span>Our Culture</span>
              </a>
              <a href="#" onClick={this.openModal} onMouseEnter={() => this.setState({ modalDataValue: "location" })} className="global-button">
                <i className="fa fa-globe fa-fw" aria-hidden="true"></i>
                <span>Our Locations</span>
              </a>
            </div>
            <div className={styles.blockHeaderContentFill}></div>
          </div>
        </div>
        <div className={styles.blockChat}>
          <div className="container">
            <div className={styles.blockChatNotice}>Talk to our recruitment team below</div>
            <iframe src="/talkpush-bot/index.html" style={{ width: '100%', minHeight: '300px' }} scrolling="no" frameBorder="0" id="talkpush-bot-iframe"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default JobsPage
