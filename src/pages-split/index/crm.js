import React from 'react'
import styles from './style/crm.module.scss'
import Link from 'gatsby-link'
import crmIcon from '../../icons/crm-white.svg'
import laptop from './images/crm/laptop.png'
import mobile from './images/crm/mobile.svg'

class CrmIndexPageSplit extends React.Component {
  render() {
    return (
      <div className={styles.block}>
        <div className="container">
          <div className={styles.blockDivider}>
            <div className={styles.blockDividerLeft}>
              <img className={styles.blockDividerLeftLaptop} src={laptop}  alt="Laptop" title="Laptop"/>
              <img className={styles.blockDividerLeftMobile} src={mobile}  alt="Mobile" title="Mobile"/>
            </div>
            <div className={styles.blockDividerRight}>
              <h2 className="global-hero-glow-white m-0 p-0">Finally a CRM that<br />Lets You Talk</h2>
              <p>Recruitment is not about tracking, it's about talking. Talkpush initiates thousands of conversations between recruiters and candidates via chat, social media and voice to build a pre-qualified talent pool that is engaged and responsive.</p>
              <div className={styles.blockDividerRightCrmButton}><Link to="/crm" className="global-button text-lowercase"><img src={crmIcon} alt="CRM" />Discover our CRM Features</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CrmIndexPageSplit