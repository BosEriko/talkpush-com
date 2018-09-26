import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/chatbot.module.scss'
import logoIcon from '../pages-images/chatbot/logo.svg'
import conversation from '../pages-images/chatbot/conversation.svg'
import context from '../pages-images/chatbot/context.svg'
import moreThanWords from '../pages-images/chatbot/more-than-words.svg'

class ChatbotPage extends React.Component {
  pageVariables = {
    pageCode: 'chatbot',
    pageDescription: 'Our chatbots creates Augmented Recruiters by automating every recruitment step from scheduling interviews, to collecting referrals, to onboarding new hires.',
    pageTitle: 'Chatbot',
  }

  pageItem = (reverse, photo, title, paragraph) => {
    return (
      <div className={styles.blockContentItem} style={reverse === true ? { flexDirection: "row-reverse" } : null}>
        <div className={reverse === true ? styles.blockContentItemImageReverse : styles.blockContentItemImage}>
          {photo ? <img src={photo} alt={title} /> : <div><iframe width="560" height="315" src="https://www.youtube.com/embed/FQ2iZ4qvcg4" frameBorder="0" allowFullScreen=""></iframe></div>}
        </div>
        <div className={styles.blockContentItemDescription}>
          <div className={styles.blockContentItemDescriptionHero}>
            <h3 className="global-hero-glow-green m-0 p-0">{title}</h3>
          </div>
          <p className="m-0 p-0">{paragraph}</p>
        </div>
      </div>
    )
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
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{this.pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderContent}>
            <div className="container">
              <h1 className="global-hero-glow-white">Conversational agents that<br />augment recruiters</h1>
            </div>
          </div>
        </div>
        <div className={styles.blockContent}>
          <div className="container">
            {this.pageItem(false, false, "Expert at handing over to the right recruiter", "Recruitment is a profoundly human art, which requires intuition, empathy and salesmanship. Our chatbots do not pretend to outperform human recruiters on any of these, but they assist for the part of the conversation which is standardized and repeatable. Using certain NLP triggers, our AI-powered chatbots recognize conversations which should deserve the attention of the recruiters.")}
            {this.pageItem(true, conversation, "Start a conversation anywhere, anytime", "We make candidates’ lives easier by meeting them where they are. Our chatbots can engage and keep conversation going on the communication channels your candidates are already using, including career sites, job landing pages, SMS, Facebook Messenger, WhatsApp, WeChat, Line Messenger, and Slack.")}
            {this.pageItem(false, context, "Context-aware for seamless experiences", "Context is the secret behind any great conversation. When it comes to the many conversation paths in a candidate’s journey, there are a lot of intermediary steps than apply and hire. Talkpush has mastered the art of maintaining the context in conversations as a way to optimize every step of the candidate journey, from click to hire, all the way until their first day on the job.")}
            {this.pageItem(true, moreThanWords, "More than words", "Don’t limit yourself to text conversations. Our chatbots usual rich communications to engage with audiences and can collect audio responses, pictures, videos, documents, and any other type of content that helps candidates get to the next stage in the recruitment process. Using voice transcription technology, our chatbots can continue a conversation with the audio input, while capturing rich data about the candidate’s communication skills.")}
          </div>
        </div>
        <div className={styles.blockBot}>

        </div>
        <div className={styles.blockChat}>
          <div className="container">
            <div className={styles.blockChatLogo}>
              <img src={logoIcon} alt="Logo" />
            </div>
            <div className={styles.blockChatTitle}>Talk to the bot</div>
            <div className={styles.blockChatMessage}>Feel free to ask Stanley our FAQ bot any question you may have about how to use conversational intelligence in your recruitment process:</div>
            <div className={styles.blockChatNotice}>Talk to Stanley below</div>
            <iframe src="/talkpush-bot/index.html" style={{ width: '100%', minHeight: '300px' }} scrolling="no" frameBorder="0" id="talkpush-bot-iframe"></iframe>
          </div>
        </div>
      </div>

    )
  }
}

export default ChatbotPage
