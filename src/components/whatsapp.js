import React from 'react'
import styles from './style/whatsapp.module.scss'

class WhatsApp extends React.Component {
  render() {
    const WhatsHelp = () => {
      if (typeof window !== 'undefined') {
        (function () {
          var options = {
            whatsapp: "+ 1(650) 281 - 2190", // WhatsApp number
            call_to_action: "Say hello to our recruitment assistant!", // Call to action
            position: "right", // Position may be ‘right’ or ‘left’
          };
          var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
          var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
          s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
          var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })();
      }
    }
    return (
      <div className={styles.block}>
        {WhatsHelp()}
      </div>
    );
  }
}

export default WhatsApp