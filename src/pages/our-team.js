import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/our-team.module.scss'
import defaultPicture from '../pages-images/our-team/default.png'
import Link from 'gatsby-link'
import Modal from '../components/modal'

import yuanPicture from '../pages-images/our-team/people/yuan.jpeg'
import bosPicture from '../pages-images/our-team/people/bos.jpeg'
import clarissePicture from '../pages-images/our-team/people/clarisse.jpeg'
import sudPicture from '../pages-images/our-team/people/sud.jpeg'
import romainPicture from '../pages-images/our-team/people/romain.jpeg'
import christinaPicture from '../pages-images/our-team/people/christina.jpeg'
import noelPicture from '../pages-images/our-team/people/noel.jpeg'
import qenPicture from '../pages-images/our-team/people/qen.jpeg'
import arisPicture from '../pages-images/our-team/people/aris.jpeg'
import lukasPicture from '../pages-images/our-team/people/lukas.jpeg'
import rajPicture from '../pages-images/our-team/people/raj.png'
import maxPicture from '../pages-images/our-team/people/max.jpeg'

const pageVariables = {
  pageCode: 'our-team',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
  pageTitle: 'Our Team',
}

class OurTeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      modalUserName: "",
      modalUserTitle: "",
      modalUserDescription: "",
      modalUserImage: "",
      modalListOfUsers: [
        {
          name: "Max Armbruster",
          title: "CEO",
          image: maxPicture,
          description: "Max Armbruster is the founder and CEO of Talkpush, the leading conversational recruitment software. Max is a serial entrepreneur, having co-founded and sold three companies before Talkpush, most recently a recruitment SaaS company. In his career both as a recruitmetn practitionner, and a recruiter tech leader, Max had experienced the frustration of recruiters and is looking to save them time, connect them with great talent effortlessly and generally make recruitment more fun. Max has two decades of international experience in the US, Europe and Asia, holding strategic roles at SAP, CNET Networks and AT Kearney.",
        },
        {
          name: "Aristotle Ocampo",
          title: "Sales Director",
          image: arisPicture,
          description: "Aris has led large recruitment team before joining Talkpush. He helped Talkpush iterate through multiple versions of its services by implementing the technology in a wide area of industries and geographies, and was the key member in our transition into social media sourcing experts. He is also a natural talent at analyzing data, and presenting results.",
        },
        {
          name: "Yuan Yim",
          title: "Head of Talent and Community",
          image: yuanPicture,
          description: "Yuan is an experienced Marketing, Training and Business Development professional, her role is to help shape the culture and structure of the company and find the perfect rockstars to join the team the constantly growing team. Prior to joining Talkpush she has previously worked for  BPO leaders such as  Cognizant, Thomson Reuters and Omniglobe International.",
        },
        {
          name: "Sudeepta Parasar",
          title: "Head of Customer Success",
          image: sudPicture,
          description: "Sudeepta has over 10 years of experience servicing the BPO industry, where he was heading Quality Assurance and performance assurance programs for some of the large customer service team in India and in the Philippines. Originally from the North of India, he is now happily settled (and married!) in the Philippines.",
        },
        {
          name: "Clarisse Cunanan",
          title: "Head of Finance",
          image: clarissePicture,
          description: "Clarisse spent the first 4 years of her career at EY, reaching Senior Associate position, before moving to Lazada, the South East Asia e-commerce leader, in a Finance Manager role. She decided to leave the comfort of the corporate life to join the startup life in the summer of 2017, and is helping with all money related matters since.",
        },
        {
          name: "Christina Adamidou",
          title: "Product Manager",
          image: christinaPicture,
          description: "Christina is an experienced technical writer with exposure in account and product management. She has previously worked for Value Exchange Intl. a CRM platform in China and Hong Kong and Gensler an integrated architecture, design, planning and consulting firm.",
        },
        {
          name: "Lukas Bierfreund",
          title: "Product Manager",
          image: lukasPicture,
          description: "Lukas speaks fluently 4 languages and has lived just about everywhere on the planet. He joined the Customer success team in early 2017 and helped to automate some of the tam’s activity with smart script. He was promoted to Product Manager later that year, where his roles is to define the product roadmap and vision and create better experiences for recruiters and candidates alike.",
        },
        {
          name: "Raj Baruah",
          title: "VP for Growth",
          image: rajPicture,
          description: "Raj has been in the Sales industry for over 15 years, He has previously worked for Adobe, Iyogi and most recently Wingfy, He is highly experienced in B2B Sales for SaaS. Raj’s dream is to transform Talkpush into a billion dollar company that is admired globally. He believes that if a team that is treated well, treats our customers even better.",
        },
        {
          name: "Romain Verbeke",
          title: "Head of Engineering",
          image: romainPicture,
          description: "Romain leads our software development effort. He has over 4 years of experience leading software development efforts, including one in a startup in Hong Kong. He is our resident Ruby on Rail expert and is always on the look-out for ways to make the software run better and faster.",
        },
        {
          name: "Qen Empaces",
          title: "Sr Software Developer",
          image: qenPicture,
          description: "Qen joined in August 2017 with a bag full of ideas and tricks on how to make Talkpush more high  performance than ever. He has over 12 years of experience in software development, building algorithms, analytics dashboards, and other enterprise-level application. In his previous gig, working for one of the major telecom operators in the Philippines, he helped to lead the foray into the world of chatbots.",
        },
        {
          name: "Noel Bacnis",
          title: "Software Engineer",
          image: noelPicture,
          description: "Noel is a graduate from the Far Eastern University where he specialized in mobile and web applications and developed a broad skillset in programming and design. Noel designs the web interface and user experiences to make the candidate journey more effortless.",
        },
        {
          name: "Bos Eriko Reyes",
          title: "Designer",
          image: bosPicture,
          description: "Bos (aka Eriko) is our lead on UI and design. He is a self-taught programmer and designer who dropped out of college to pursue his passion in design and started his own freelance business at the tender age of 19. We are lucky to have this precocious genius leading our design efforts.",
        },
      ]
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
          <img src={image} alt="Default" onClick={this.openModal} />
        </div>
        <h4 className="m-0 p-0">{name}</h4>
        <span>{title}</span>
        <a href="#" onClick={this.openModal} className="global-button text-lowercase">Read More</a>
      </div>
    )
  }
  render() {
    const { RowItem } = this;
    const userChunk = [];
    this.state.modalListOfUsers.map((user, index) => {
      if ((index % 3) === 0) userChunk.push([]);
    });
    this.state.modalListOfUsers.map((user, index) => {
      userChunk[index % 4].push([]);
    });
    this.state.modalListOfUsers.map((user, index) => {
      userChunk[Math.floor(index / 3)][index % 3] = user;
    });
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={pageVariables.pageDescription} />
          <meta property='og:description' content={pageVariables.pageDescription} />
        </Helmet>
        {this.state.modalStatus && <Modal closeModal={this.closeModal} maxWidth="500" name={this.state.modalUserName} position={this.state.modalUserTitle} content={this.state.modalUserDescription} profilePicture={this.state.modalUserImage} />}
        <div className={styles.blockHeader}></div>
        <div className={styles.blockExperiences}>
          <div className="container">
            <h2 className="global-hero-glow-white m-0 p-0" style={{ textShadow: "0 0 20px #e800ff" }}>Meet Yuan</h2>
            <div className={styles.blockExperiencesDivider}>
              <div className={styles.blockExperiencesDividerLeft}>
                <div className={styles.blockExperiencesDividerLeftImage}>
                  <img src={yuanPicture} alt="Yuan" />
                </div>
              </div>
              <div className={styles.blockExperiencesDividerRight}>
                {/* <div className={styles.blockExperiencesDividerRightNamePosition}>
                  <h3 className="global-hero-glow-green m-0 p-0">Yuan Yim</h3>
                  <span>Head of Resource and Community</span>
                </div> */}
                <p className="m-0">I have always wanted to show people what it’s like to work for a company like ours and to share my experience of the start-up adventure, so I’ve put together this vlog, which I hope you’ll get some inspiration from and maybe even get you excited about exploring career opportunities at Talkpush.</p>
                <div className={styles.blockExperiencesDividerRightReadMore}>
                  <Link to="/our-team/yuan" className="global-button text-lowercase">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockTeam}>
          <div className="container">
            <h2 className="global-hero-glow-green m-0 p-0" style={{ textShadow: 'none' }}>Meet the team</h2>
            <div className={styles.blockTeamMembers}>
              {userChunk.map((row, index) => {
                return (
                  <div className={styles.blockTeamMembersRow} key={index}>
                    {userChunk[index].map((user, index) => {
                      return (
                        <RowItem key={index} name={user.name} title={user.title} image={user.image} description={user.description} />
                      )
                    })}
                  </div>
                )
              })}
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
    )
  }
}

export default OurTeamPage
