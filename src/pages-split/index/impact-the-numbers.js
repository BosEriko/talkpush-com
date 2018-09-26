import React from 'react'
import styles from './style/impact-the-numbers.module.scss'
import Link from 'gatsby-link'
import hexagonIcon from './images/impact-the-numbers/hexagon.svg'
import reductionIcon from './images/impact-the-numbers/reduction.svg'
import satisfactionIcon from './images/impact-the-numbers/satisfaction.svg'
import processedIcon from './images/impact-the-numbers/processed.svg'
import automatedIcon from './images/impact-the-numbers/automated.svg'

const ImpactTheNumbersIndexPageSplit = () => (
  <div className={styles.block}>
    <div className={styles.blockFilter} style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="global-hero-glow-white m-0 p-0">Impact the numbers that matter</h2>
        <h4 className="p-0">Meet your candidates where they live and create engaging digital recruitment experiences</h4>
        <div className={styles.blockFilterDivider}>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={reductionIcon} alt="Reduction" title="Reduction" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0">65%</h3>
            <p className={styles.blockFilterDividerItemMessage}>Reduction in costs per hire</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="https://youtu.be/ciSB3gMpH_g" target="_blank" className="global-button text-lowercase">Case Study: Alorica</a>
            </div>
          </div>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={satisfactionIcon} alt="Satisfaction" title="Satisfaction" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0">35%</h3>
            <p className={styles.blockFilterDividerItemMessage}>Candidate satisfaction NPS</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="https://www.youtube.com/watch?v=aXTAjF8T-Kg" target="_blank" className="global-button text-lowercase">Case Study: Genpact</a>
            </div>
          </div>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={processedIcon} alt="Processed" title="Processed" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0">10x</h3>
            <p className={styles.blockFilterDividerItemMessage}>Candidates processed per recruiter</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <a href="https://www.youtube.com/watch?v=nFRDqo_rc3o" target="_blank" className="global-button text-lowercase">Case Study: Starwood</a>
            </div>
          </div>

          <div className={styles.blockFilterDividerItem}>
            <div className={styles.blockFilterDividerItemImage}>
              <img className={styles.blockFilterDividerItemImageHexagon} src={hexagonIcon} alt="Hexagon"/>
              <img className={styles.blockFilterDividerItemImageIcon} style={{ top: '3.5rem' }} src={automatedIcon} alt="Automated" title="Automated" />
            </div>
            <h3 className="global-hero-glow-white m-0 p-0" style={{ fontSize: '2.5rem', margin: '1rem 0' }}>1,328,921</h3>
            <p className={styles.blockFilterDividerItemMessage}>Automated conversations</p>
            <div className={styles.blockFilterDividerItemBottom}>
              <Link to="/our-style" className="global-button text-lowercase">More about Talkpush</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)

export default ImpactTheNumbersIndexPageSplit