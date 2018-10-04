import React from 'react'
import styles from './style/augmented-recruiters.module.scss'
import userIcon from './images/augmented-recruiters/user.svg'

import keithCheung from './images/augmented-recruiters/keith_cheung.jpeg'
import lynBautista from './images/augmented-recruiters/lyn_bautista.png'
import matthewJohnson from './images/augmented-recruiters/matthew_johnson.jpeg'
import jackieBarrios from './images/augmented-recruiters/jackie_barrios.png'
import marvinVinluan from './images/augmented-recruiters/marvin_vinluan.png'
import federicoJimenez from './images/augmented-recruiters/federico_jimenez.jpeg'

class AugmentedRecruitersIndexPageSplit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationWorking: true,
    }
  }
  quoteBlock(videoID, message, name, position, company, picture = userIcon) {
    return (
      <li className="testimonial-section-divide-item">
        <div className={styles.blockDivideItemVideo}>
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoID} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className={styles.blockDivideItemDetails}>
          <div className={styles.blockDivideItemDetailsMessage}>
            {message}
          </div>
          <div className={styles.blockDivideItemDetailsUser}>
            <img src={picture} className={styles.blockDivideItemDetailsUserPicture} alt={name} title={name} />
            <div className={styles.blockDivideItemDetailsUserDetails}>
              <div className={styles.blockDivideItemDetailsUserDetailsName}>{name}</div>
              <div className={styles.blockDivideItemDetailsUserDetailsPosition}>{position}</div>
              <div className={styles.blockDivideItemDetailsUserDetailsCompany}>{company}</div>
            </div>
          </div>
        </div>
      </li>
    )
  }
  componentDidMount() {
    let testimonialSection = document.getElementById('testimonial-section')
    let testimonialSectionDivideItems = document.getElementsByClassName('testimonial-section-divide-item')
    let testimonialSectionDivideItemWidth = document.getElementById('testimonial-section-divide').offsetWidth / 3
    let testimonialSectionDivide = document.getElementById('testimonial-section-divide')
    if (window.innerWidth >= 961 && typeof (testimonialSection) != 'undefined' && testimonialSection != null) {
      Array.from(testimonialSectionDivideItems).forEach(item => {
        item.style.width = testimonialSectionDivideItemWidth + "px"
      })
    }
    testimonialSectionDivide.addEventListener("scroll", () => {
      let factor = testimonialSectionDivide.scrollLeft / (testimonialSectionDivide.scrollWidth - testimonialSectionDivide.offsetWidth);
      if(factor < 0.2) {
        let move = testimonialSectionDivide.lastChild;
        move.remove();
        testimonialSectionDivide.prepend(move);
        testimonialSectionDivide.scrollLeft += move.offsetWidth;
      } else if(factor > 0.8) {
        let move = testimonialSectionDivide.firstChild;
        move.remove();
        testimonialSectionDivide.append(move);
        testimonialSectionDivide.scrollLeft -= move.offsetWidth;
      }
    });
    setInterval(() => {
      if(this.state.animationWorking) testimonialScroll(1);
    }, 5000);
    let testimonialScroll = (speed) => {
      let animateFinishLine = 0;
      let animate = setInterval(() => {
        testimonialSectionDivide.scrollLeft++;
        animateFinishLine++;
        if((testimonialSectionDivide.offsetWidth / 3) <= animateFinishLine) animateStop();
      }, speed);
      let animateStop = () => {
        clearInterval(animate);
      }
    }
  }
  render() {
    return (
      <div className={styles.block} id="testimonial-section">

        <div className="container">
          <h2 className="global-hero-glow-white m-0 p-0">Meet the Augmented Recruiters</h2>
          <h4 className="p-0">They build more engaging experiences and increase recruitment outputs through automation and AI</h4>
          <ul className={styles.blockDivide} id="testimonial-section-divide" onMouseOver={() => this.setState({ animationWorking: false })} onMouseOut={() => this.setState({ animationWorking: true })}>
            {this.quoteBlock("ciSB3gMpH_g", "With Talkpush, our hire rate has gone up considerably and we are able to handle much more volume with our existing team.", "Marvin Vinluan", "Director / Strategic Sourcing / Recruitment Marketing", "Alorica", marvinVinluan)}
            {this.quoteBlock("aXTAjF8T-Kg", "Talkpush has been a great partner for Genpact, particularly when it comes to build a great and strong following on Facebook.  Since using Talkpush, we have greatly increased our show rate and hire rate.", "Jackie Barrios", "VP HR", "Genpact", jackieBarrios)}
            {this.quoteBlock("2cj1nKFZQDA", "We partnered with Talkpush to get ahead on social media, use Facebook as a sourcing channel and drive a faster candidate response time, lowering our cost per hire by 60%.", "Matthew Johnson", "Global Director", "Valor Global Services", matthewJohnson)}
            {this.quoteBlock("Vpu8HkBHShw", "We partnered with Talkpush for a fast and easy recruitment experience, allowing us to engage with twice as many people.", "Lyn Bautista", "Sourcing and Branding Manager", "[24]7.ai", lynBautista)}
            {this.quoteBlock("nFRDqo_rc3o", "We have been using Talkpush since 2014 and it has streamlined our recruitment tremendously. We are able to spend more time with the quality candidates and have increased our interview to hire ratio.", "Keith Cheung", "Head of Talent Acquisition", "Sheraton and St. Regis Macau", keithCheung)}
            {this.quoteBlock("nz34thb5qPs", "By partnering with Talkpush, Teleperformance has been able to increase recruiter productivity and efficiency by having define targets and saving over 700 manpower hours.", "Federico Jimenez", "Talent Acquisition Manager", "Teleperformance", federicoJimenez)}
          </ul>
        </div>
      </div>
    )
  }
}

export default AugmentedRecruitersIndexPageSplit