import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Modal from '../components/modal'
import styles from '../pages-style/gallery.module.scss'
import joinIcon from '../pages-images/gallery/join-icon.svg'
// import heartIcon from '../pages-images/gallery/heart.svg'

import recHackFive001 from '../pages-images/gallery/albums/recruitment-hacks-5/001.jpg';
import recHackFive002 from '../pages-images/gallery/albums/recruitment-hacks-5/002.jpg';
import recHackFive003 from '../pages-images/gallery/albums/recruitment-hacks-5/003.jpg';
import recHackFive004 from '../pages-images/gallery/albums/recruitment-hacks-5/004.jpg';
import recHackFive005 from '../pages-images/gallery/albums/recruitment-hacks-5/005.jpg';
import recHackFive006 from '../pages-images/gallery/albums/recruitment-hacks-5/006.jpg';
import recHackFive007 from '../pages-images/gallery/albums/recruitment-hacks-5/007.jpg';
import recHackFive008 from '../pages-images/gallery/albums/recruitment-hacks-5/008.jpg';
import recHackFive009 from '../pages-images/gallery/albums/recruitment-hacks-5/009.jpg';
import recHackFive010 from '../pages-images/gallery/albums/recruitment-hacks-5/010.jpg';
import recHackFive011 from '../pages-images/gallery/albums/recruitment-hacks-5/011.jpg';
import recHackFive012 from '../pages-images/gallery/albums/recruitment-hacks-5/012.jpg';
import recHackFive013 from '../pages-images/gallery/albums/recruitment-hacks-5/013.jpg';
import recHackFive014 from '../pages-images/gallery/albums/recruitment-hacks-5/014.jpg';
import recHackFive015 from '../pages-images/gallery/albums/recruitment-hacks-5/015.jpg';

import recHackSix001 from '../pages-images/gallery/albums/recruitment-hacks-6/001.jpg';
import recHackSix002 from '../pages-images/gallery/albums/recruitment-hacks-6/002.jpg';
import recHackSix003 from '../pages-images/gallery/albums/recruitment-hacks-6/003.jpg';
import recHackSix004 from '../pages-images/gallery/albums/recruitment-hacks-6/004.jpg';
import recHackSix005 from '../pages-images/gallery/albums/recruitment-hacks-6/005.jpg';
import recHackSix006 from '../pages-images/gallery/albums/recruitment-hacks-6/006.jpg';
import recHackSix007 from '../pages-images/gallery/albums/recruitment-hacks-6/007.jpg';
import recHackSix008 from '../pages-images/gallery/albums/recruitment-hacks-6/008.jpg';
import recHackSix009 from '../pages-images/gallery/albums/recruitment-hacks-6/009.jpg';
import recHackSix010 from '../pages-images/gallery/albums/recruitment-hacks-6/010.jpg';
import recHackSix011 from '../pages-images/gallery/albums/recruitment-hacks-6/011.jpg';
import recHackSix012 from '../pages-images/gallery/albums/recruitment-hacks-6/012.jpg';
import recHackSix013 from '../pages-images/gallery/albums/recruitment-hacks-6/013.jpg';
import recHackSix014 from '../pages-images/gallery/albums/recruitment-hacks-6/014.jpg';
import recHackSix015 from '../pages-images/gallery/albums/recruitment-hacks-6/015.jpg';

import recHackSeven001 from '../pages-images/gallery/albums/recruitment-hacks-7/001.jpg';
import recHackSeven002 from '../pages-images/gallery/albums/recruitment-hacks-7/002.jpg';
import recHackSeven003 from '../pages-images/gallery/albums/recruitment-hacks-7/003.jpg';
import recHackSeven004 from '../pages-images/gallery/albums/recruitment-hacks-7/004.jpg';
import recHackSeven005 from '../pages-images/gallery/albums/recruitment-hacks-7/005.jpg';
import recHackSeven006 from '../pages-images/gallery/albums/recruitment-hacks-7/006.jpg';
import recHackSeven007 from '../pages-images/gallery/albums/recruitment-hacks-7/007.jpg';
import recHackSeven008 from '../pages-images/gallery/albums/recruitment-hacks-7/008.jpg';
import recHackSeven009 from '../pages-images/gallery/albums/recruitment-hacks-7/009.jpg';
import recHackSeven010 from '../pages-images/gallery/albums/recruitment-hacks-7/010.jpg';
import recHackSeven011 from '../pages-images/gallery/albums/recruitment-hacks-7/011.jpg';
import recHackSeven012 from '../pages-images/gallery/albums/recruitment-hacks-7/012.jpg';
import recHackSeven013 from '../pages-images/gallery/albums/recruitment-hacks-7/013.jpg';
import recHackSeven014 from '../pages-images/gallery/albums/recruitment-hacks-7/014.jpg';
import recHackSeven015 from '../pages-images/gallery/albums/recruitment-hacks-7/015.jpg';

import talkpush2018AnnualOffsite001 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/001.jpg';
import talkpush2018AnnualOffsite002 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/002.jpg';
import talkpush2018AnnualOffsite003 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/003.jpg';
import talkpush2018AnnualOffsite004 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/004.jpg';
import talkpush2018AnnualOffsite005 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/005.jpg';
import talkpush2018AnnualOffsite006 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/006.jpg';
import talkpush2018AnnualOffsite007 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/007.jpg';
import talkpush2018AnnualOffsite008 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/008.jpg';
import talkpush2018AnnualOffsite009 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/009.jpg';
import talkpush2018AnnualOffsite010 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/010.jpg';
import talkpush2018AnnualOffsite011 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/011.jpg';
import talkpush2018AnnualOffsite012 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/012.jpg';
import talkpush2018AnnualOffsite013 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/013.jpg';
import talkpush2018AnnualOffsite014 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/014.jpg';
import talkpush2018AnnualOffsite015 from '../pages-images/gallery/albums/talkpush-annual-offsite-2018/015.jpg';

import talkpushWorkshopOne001 from '../pages-images/gallery/albums/talkpush-workshop-1/001.jpg';
import talkpushWorkshopOne002 from '../pages-images/gallery/albums/talkpush-workshop-1/002.jpg';
import talkpushWorkshopOne003 from '../pages-images/gallery/albums/talkpush-workshop-1/003.jpg';
import talkpushWorkshopOne004 from '../pages-images/gallery/albums/talkpush-workshop-1/004.jpg';
import talkpushWorkshopOne005 from '../pages-images/gallery/albums/talkpush-workshop-1/005.jpg';
import talkpushWorkshopOne006 from '../pages-images/gallery/albums/talkpush-workshop-1/006.jpg';
import talkpushWorkshopOne007 from '../pages-images/gallery/albums/talkpush-workshop-1/007.jpg';
import talkpushWorkshopOne008 from '../pages-images/gallery/albums/talkpush-workshop-1/008.jpg';
import talkpushWorkshopOne009 from '../pages-images/gallery/albums/talkpush-workshop-1/009.jpg';
import talkpushWorkshopOne010 from '../pages-images/gallery/albums/talkpush-workshop-1/010.jpg';
import talkpushWorkshopOne011 from '../pages-images/gallery/albums/talkpush-workshop-1/011.jpg';
import talkpushWorkshopOne012 from '../pages-images/gallery/albums/talkpush-workshop-1/012.jpg';
import talkpushWorkshopOne013 from '../pages-images/gallery/albums/talkpush-workshop-1/013.jpg';
import talkpushWorkshopOne014 from '../pages-images/gallery/albums/talkpush-workshop-1/014.jpg';
import talkpushWorkshopOne015 from '../pages-images/gallery/albums/talkpush-workshop-1/015.jpg';

import talkpushWorkshopTwo001 from '../pages-images/gallery/albums/talkpush-workshop-2/001.jpg';
import talkpushWorkshopTwo002 from '../pages-images/gallery/albums/talkpush-workshop-2/002.jpg';
import talkpushWorkshopTwo003 from '../pages-images/gallery/albums/talkpush-workshop-2/003.jpg';
import talkpushWorkshopTwo004 from '../pages-images/gallery/albums/talkpush-workshop-2/004.jpg';
import talkpushWorkshopTwo005 from '../pages-images/gallery/albums/talkpush-workshop-2/005.jpg';
import talkpushWorkshopTwo006 from '../pages-images/gallery/albums/talkpush-workshop-2/006.jpg';
import talkpushWorkshopTwo007 from '../pages-images/gallery/albums/talkpush-workshop-2/007.jpg';
import talkpushWorkshopTwo008 from '../pages-images/gallery/albums/talkpush-workshop-2/008.jpg';
import talkpushWorkshopTwo009 from '../pages-images/gallery/albums/talkpush-workshop-2/009.jpg';
import talkpushWorkshopTwo010 from '../pages-images/gallery/albums/talkpush-workshop-2/010.jpg';
import talkpushWorkshopTwo011 from '../pages-images/gallery/albums/talkpush-workshop-2/011.jpg';
import talkpushWorkshopTwo012 from '../pages-images/gallery/albums/talkpush-workshop-2/012.jpg';
import talkpushWorkshopTwo013 from '../pages-images/gallery/albums/talkpush-workshop-2/013.jpg';
import talkpushWorkshopTwo014 from '../pages-images/gallery/albums/talkpush-workshop-2/014.jpg';
import talkpushWorkshopTwo015 from '../pages-images/gallery/albums/talkpush-workshop-2/015.jpg';

const recHackFive = [
  recHackFive001,
  recHackFive002,
  recHackFive003,
  recHackFive004,
  recHackFive005,
  recHackFive006,
  recHackFive007,
  recHackFive008,
  recHackFive009,
  recHackFive010,
  recHackFive011,
  recHackFive012,
  recHackFive013,
  recHackFive014,
  recHackFive015
]

const recHackSix = [
  recHackSix001,
  recHackSix002,
  recHackSix003,
  recHackSix004,
  recHackSix005,
  recHackSix006,
  recHackSix007,
  recHackSix008,
  recHackSix009,
  recHackSix010,
  recHackSix011,
  recHackSix012,
  recHackSix013,
  recHackSix014,
  recHackSix015
]

const recHackSeven = [
  recHackSeven001,
  recHackSeven002,
  recHackSeven003,
  recHackSeven004,
  recHackSeven005,
  recHackSeven006,
  recHackSeven007,
  recHackSeven008,
  recHackSeven009,
  recHackSeven010,
  recHackSeven011,
  recHackSeven012,
  recHackSeven013,
  recHackSeven014,
  recHackSeven015
]

const talkpush2018AnnualOffsite = [
  talkpush2018AnnualOffsite001,
  talkpush2018AnnualOffsite002,
  talkpush2018AnnualOffsite003,
  talkpush2018AnnualOffsite004,
  talkpush2018AnnualOffsite005,
  talkpush2018AnnualOffsite006,
  talkpush2018AnnualOffsite007,
  talkpush2018AnnualOffsite008,
  talkpush2018AnnualOffsite009,
  talkpush2018AnnualOffsite010,
  talkpush2018AnnualOffsite011,
  talkpush2018AnnualOffsite012,
  talkpush2018AnnualOffsite013,
  talkpush2018AnnualOffsite014,
  talkpush2018AnnualOffsite015
]

const talkpushWorkshopOne = [
  talkpushWorkshopOne001,
  talkpushWorkshopOne002,
  talkpushWorkshopOne003,
  talkpushWorkshopOne004,
  talkpushWorkshopOne005,
  talkpushWorkshopOne006,
  talkpushWorkshopOne007,
  talkpushWorkshopOne008,
  talkpushWorkshopOne009,
  talkpushWorkshopOne010,
  talkpushWorkshopOne011,
  talkpushWorkshopOne012,
  talkpushWorkshopOne013,
  talkpushWorkshopOne014,
  talkpushWorkshopOne015
]

const talkpushWorkshopTwo = [
  talkpushWorkshopTwo001,
  talkpushWorkshopTwo002,
  talkpushWorkshopTwo003,
  talkpushWorkshopTwo004,
  talkpushWorkshopTwo005,
  talkpushWorkshopTwo006,
  talkpushWorkshopTwo007,
  talkpushWorkshopTwo008,
  talkpushWorkshopTwo009,
  talkpushWorkshopTwo010,
  talkpushWorkshopTwo011,
  talkpushWorkshopTwo012,
  talkpushWorkshopTwo013,
  talkpushWorkshopTwo014,
  talkpushWorkshopTwo015
]

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      modalGalleryImage: "",
      modalGallerySet: {},
      modalGalleryTitle: "",
      modalGalleryDescription: ""
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

  changeImage = (image) => {
    this.setState({ modalGalleryImage: image });
  }

  pageVariables = {
    pageCode: 'gallery',
    pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
    activeLink: {
      color: '#72de2f',
      textShadow: '0 0 10px #72de2f'
    },
    pageTitle: 'Gallery',
  }

  galleryItem = (image, name, description, imageSet) => {
    return (
      <li className={styles.blockContentGalleryRowItem} onClick={() => this.setState({ modalGalleryImage: image, modalGallerySet: imageSet, modalGalleryTitle: name, modalGalleryDescription: description })}>
        <div className={styles.blockContentGalleryRowItemImage}>
          <a href="#" onClick={this.openModal}>
            <div style={{ backgroundImage: `url('${image}')` }}></div>
          </a>
        </div>
        <div className={styles.blockContentGalleryRowItemName}>
          <a href="#" onClick={this.openModal}>
            <h3 className="m-0 p-0">{name}</h3>
          </a>
          {/* <div className={styles.blockContentGalleryRowItemNameHeart}>
            <img src={heartIcon} alt="Heart Icon" />
          </div> */}
        </div>
        <p className={styles.blockContentGalleryRowItemDescription}>{description}</p>
      </li>
    )
  }

  render() {
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{this.pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        {this.state.modalStatus ? <Modal closeModal={this.closeModal} maxWidth="800" image={this.state.modalGalleryImage} imageSet={this.state.modalGallerySet} title={this.state.modalGalleryTitle} content={this.state.modalGalleryDescription } changeImage={this.changeImage} /> : null}
        <div className={styles.blockHeader}></div>
        <div className={styles.blockContent}>
          <div className="container">
            <h3 className="global-hero-glow-white m-0 p-0">Galleries</h3>
            <div className={styles.blockContentMenuSearch}>
              <ul className="m-0 p-0">
                {/* <li className="m-0 p-0"><a href="#" style={this.pageVariables.activeLink}>Our Team</a></li> */}
                <li className="m-0 p-0"><a href="#" style={this.pageVariables.activeLink}>Our Events</a></li>
              </ul>
              {/* <input type="text" placeholder="Search" /> */}
            </div>
            <div className={styles.blockContentGallery}>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem(recHackSeven[5], "August 17, 2018", "The recruitment hacks series launches its first event in LATAM, Held at WeWork last August 15th the event had guest speakers from Sykes, Manpower Group Mexico and Básico fm.", recHackSeven)}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(recHackSix[14], "June 7, 2018", 'The 6th leg of the recruitment hacks series! with the theme of "Turning Talent into Ambassadors" Referral is the #1 source for candidates, both in quantity and quality.', recHackSix)}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(talkpush2018AnnualOffsite[13], "Talkpush Annual Offsite 2018", "Yearly get together.", talkpush2018AnnualOffsite)}
              </ul>
              <ul className={styles.blockContentGalleryRow}>
                {this.galleryItem(recHackFive[13], "November 19, 2017", "The 5th instalment of the Recruitment Hacks Series held last November 16th at Acclr8 Paseo Thank you to our Speakers, Panelists and everyone who joined us!", recHackFive)}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(talkpushWorkshopTwo[7], "September 13, 2017", "Second Talkpush workshop.", talkpushWorkshopTwo)}
                <div className={styles.blockContentGalleryRowSpacing}></div>
                {this.galleryItem(talkpushWorkshopOne[0], "April 7, 2017", "A fantastic turnout for our very first end user workshop! Many thanks to the Accler8 team and Kuppa coffee for supporting our event.", talkpushWorkshopOne)}
              </ul>
            </div>
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
  }
}

export default GalleryPage
