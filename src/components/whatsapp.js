import React from 'react'
import styles from './style/whatsapp.module.scss'

class WhatsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speechBubbleVisible: false,
    }
  }
  render() {
    return (
      <div className={styles.block}>
        { this.state.speechBubbleVisible && <div className={styles.blockSpeechBubble}>
          Say hello to our recruitment assistant!
        </div> }
        <a href="https://api.whatsapp.com/send?phone=16502812190" target="_blank" className={styles.blockButton} onMouseEnter={() => this.setState({ speechBubbleVisible: true })} onMouseLeave={() => this.setState({ speechBubbleVisible: false })}>
          <span><i className="fa fa-whatsapp fa-fw"></i></span>
        </a>
      </div>
    );
  }
}

export default WhatsApp