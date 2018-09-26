import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from '../../pages-style/our-team.module.scss'
import defaultPicture from '../../pages-images/our-team/default.png'
// import heartIcon from '../../pages-images/our-team/heart.svg'
import yuanPicture from '../../pages-images/our-team/people/yuan.jpeg'
import arisPicture from '../../pages-images/our-team/people/aris.jpeg'
import clarissePicture from '../../pages-images/our-team/people/clarisse.jpeg'
import sudPicture from '../../pages-images/our-team/people/sud.jpeg'
import Modal from '../../components/modal'

const pageVariables = {
  pageCode: 'our-team-yuan',
  pageTitle: 'Our Team',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
  userName: "Yuan",
}

class OurTeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      modalUserName: "",
      modalUserTitle: "",
      modalUserDescription: "",
      modalUserImage: ""
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
  RowItem = ({ name, title, description, image }) => {
    return (
      <div className={styles.blockTeamMembersRowItem} onClick={() => this.setState({ modalUserName: name, modalUserTitle: title, modalUserDescription: description, modalUserImage: image })}>
        <div className={styles.blockTeamMembersRowItemImage}>
          <img src={image} alt="Default" />
        </div>
        <h4 className="m-0 p-0">{name}</h4>
        <span>{title}</span>
        <a href="#" onClick={this.openModal} className="global-button text-lowercase">Read More</a>
      </div>
    )
  }
  render() {
    const { RowItem } = this;
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{pageVariables.pageTitle} ({pageVariables.userName}) - {this.props.siteTitle}</title>
          <meta name='description' content={pageVariables.pageDescription} />
          <meta property='og:description' content={pageVariables.pageDescription} />
        </Helmet>
        {this.state.modalStatus && <Modal closeModal={this.closeModal} maxWidth="500" name={this.state.modalUserName} position={this.state.modalUserTitle} content={this.state.modalUserDescription} profilePicture={this.state.modalUserImage} />}
        <div className={styles.blockHeader}></div>
        <div className={styles.blockExperiences}>
          <div className="container">
            <div className={styles.blockExperiencesUserDetails}>
              <div className={styles.blockExperiencesUserDetailsImage}>
                <img src={yuanPicture} alt="Yuan Yim" />
              </div>
              <div className={styles.blockExperiencesUserDetailsData}>
                <h3 className="global-hero-green-glow p-0">Yuan Yim</h3>
                <p className="m-0 p-0">Head of Resource and Community</p>
              </div>
              {/* <div className={styles.blockExperiencesUserDetailsHeart}>
            <img src={heartIcon} alt="Heart" />
          </div> */}
            </div>
            <div className={styles.blockVideoHolder}>
              <div className={styles.blockVideoHolderVideo}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xuEFvv-ta4c" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className={styles.blockExperiencesSpeech}>
              <p>I joined Talkpush almost 3 years ago because of a good friend Bastian (Hi Basti!) referred me. The timing was perfect since I was exploring new opportunities and figuring out which direction I wanted my career to take. (Making smart career choices... a common dilemma for any 20- something-year-old).</p>
              <p>I previously worked in outsourcing, real estate and a couple of media companies. None of these previous jobs could really have prepared me for what was to come. Everything that I knew from the years of work just flew off the window, I was clueless. I knew that I got myself into something that I could have imagined. It was scary, but just went with it, because life is all about new experience, right?</p>
              <p>And so there I was sitting in our small office in Makati (we’ve moved to bigger place since) with a bunch of tasks that would have been enough to fill the agenda of 3 full-time staff... In my head a voice was screaming “Now is the time for you to wear different hats on the job”. In the office with me were a handful of stellar individuals, the beginning of a core team, trying to figure out exactly what our job entailed. We knew we had something promising, but there was no how-to guide on how to get it done.</p>
              <p>Fast forward to today.</p>
              <p>First of all I am no longer clueless. We were also able to grow the business 3x last year (and 3x the year before) and now have customers in 16 countries (and counting...), in the process growing our headcount from 10 to over 30 (by the way, we’re hiring!). Of course, it was not an easy process. From then till now, we have gone through rough patches and a lot of problems, challenges that kept us up at night, putting in long work hours, with the occasional feeling of dismay and frustration. That’s really how it’s like in the early phases: lots of trial and errors. I have had my fair share of shameful failures and sparkling achievements. I have also learned how to work more independently and autonomously because we are given the liberty to work from anywhere we want to. Not being tied to the desk has its perks — I can travel and work from different places and I don’t have to worry as much about the crazy traffic here in Manila.</p>
              <p>Working in a startup means finding solutions where you least expect it and having the ability to push your boundaries. You will also be able to explore your skill sets in a lot of unconventional ways — and even if you think you know enough, you don’t. You learn something new everyday, as the business grows.</p>
            </div>
          </div>
        </div>
        <div className={styles.blockTeam}>
          <div className="container">
            <h2 className="global-hero-glow-green m-0 p-0" style={{ textShadow: 'none' }}>Meet the team</h2>
            <div className={styles.blockTeamMembers}>
              <div className={styles.blockTeamMembersRow}>
                <RowItem name="Aristotle Ocampo" title="Sales Director" image={arisPicture} description="Aris has led large recruitment team before joining Talkpush. He helped Talkpush iterate through multiple versions of its services by implementing the technology in a wide area of industries and geographies, and was the key member in our transition into social media sourcing experts. He is also a natural talent at analyzing data, and presenting results." />
                <RowItem name="Clarisse Cunanan" title="Head of Finance" image={clarissePicture} description="Clarisse spent the first 4 years of her career at EY, reaching Senior Associate position, before moving to Lazada, the South East Asia e-commerce leader, in a Finance Manager role. She decided to leave the comfort of the corporate life to join the startup life in the summer of 2017, and is helping with all money related matters since." />
                <RowItem name="Sudeepta Parasar" title="Head of Customer Success" image={sudPicture} description="Sudeepta has over 10 years of experience servicing the BPO industry, where he was heading Quality Assurance and performance assurance programs for some of the large customer service team in India and in the Philippines. Originally from the North of India, he is now happily settled (and married!) in the Philippines." />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockJoin}>
          <div className="container">
            <div className={styles.blockJoinBox}>
              <div className={styles.blockJoinBoxDetails}>
                <h3>Join our growing team</h3>
                <p className="m-0 p-0">Join Talkpush and let's make recruitment fun together</p>
                <Link to="/jobs">Careers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  };
}

export default OurTeamPage
