import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/customers.module.scss'
import '../pages-style/customers.scss'

import prudentialNeon from '../pages-images/customers/prudential/neon.svg'
import prudentialBlack from '../pages-images/customers/prudential/black.svg'
import starwoodNeon from '../pages-images/customers/starwood/neon.svg'
import starwoodBlack from '../pages-images/customers/starwood/black.svg'
import alexanderNeon from '../pages-images/customers/alexander/neon.svg'
import alexanderBlack from '../pages-images/customers/alexander/black.svg'
import psgNeon from '../pages-images/customers/psg/neon.svg'
import psgBlack from '../pages-images/customers/psg/black.svg'
import sykesNeon from '../pages-images/customers/sykes/neon.png'
import sykesBlack from '../pages-images/customers/sykes/black.png'
import aloricaNeon from '../pages-images/customers/alorica/neon.svg'
import aloricaBlack from '../pages-images/customers/alorica/black.svg'
import genpactNeon from '../pages-images/customers/genpact/neon.svg'
import genpactBlack from '../pages-images/customers/genpact/black.svg'
import afniNeon from '../pages-images/customers/afni/neon.png'
import afniBlack from '../pages-images/customers/afni/black.png'
import hgsNeon from '../pages-images/customers/hgs/neon.svg'
import hgsBlack from '../pages-images/customers/hgs/black.svg'
import exlNeon from '../pages-images/customers/exl/neon.svg'
import exlBlack from '../pages-images/customers/exl/black.svg'
import _247Neon from '../pages-images/customers/247/neon.svg'
import _247Black from '../pages-images/customers/247/black.svg'
import valorglobalNeon from '../pages-images/customers/valorglobal/neon.svg'
import valorglobalBlack from '../pages-images/customers/valorglobal/black.svg'
import accentureNeon from '../pages-images/customers/accenture/neon.png'
import accentureBlack from '../pages-images/customers/accenture/black.png'
import teleperformanceNeon from '../pages-images/customers/teleperformance/neon.png'
import teleperformanceBlack from '../pages-images/customers/teleperformance/black.png'
import aiaNeon from '../pages-images/customers/aia/neon.png'
import aiaBlack from '../pages-images/customers/aia/black.png'
import adeccoNeon from '../pages-images/customers/adecco/neon.png'
import adeccoBlack from '../pages-images/customers/adecco/black.png'
import walmartNeon from '../pages-images/customers/walmart/neon.png'
import walmartBlack from '../pages-images/customers/walmart/black.png'
import amazonNeon from '../pages-images/customers/amazon/neon.png'
import amazonBlack from '../pages-images/customers/amazon/black.png'

class CustomersPage extends React.Component {
  pageVariables = {
    pageCode: 'customers',
    pageDescription: 'Customers who want to accelerate their hiring turn to Talkpush',
    pageTitle: 'Customers',
  }

  enterCDB = (id) => {
    document.getElementById("item-preview-" + id).style.display = "block"
    document.getElementById("customer-shadow").style.display = "block"
  }

  leaveCDB = (id) => {
    document.getElementById("item-preview-" + id).style.display = "none"
    document.getElementById("customer-shadow").style.display = "none"
  }

  blockItem = (id, logoNeon, logoBlack, companyName, region, videoID, articleLink) => {
    return (
      <div className="block">
        <div className="dimension-holder customer-dimension-box" onMouseEnter={() => this.enterCDB(id)} onMouseLeave={() => this.leaveCDB(id)}>
          <div className="dimension">
            <div className="item">
              <div className="logo-dimension">
                <div className="logo-holder">
                  <div className="logo-center">
                    <img src={logoNeon} alt={id} />
                  </div>
                </div>
              </div>
            </div>
            <div className="item preview" id={"item-preview-" + id}>
              <div className="logo-dimension">
                <div className="logo-holder">
                  <div className="logo-center">
                    <img src={logoBlack} alt={id} />
                  </div>
                </div>
              </div>
              <h3>{companyName}</h3>
              <h4>
                <i className="fa fa-globe fa-fw" aria-hidden='true'></i>
                <span>{region}</span>
              </h4>
              { videoID && <a className="button" href={ "https://www.youtube.com/watch?v=" + videoID } target="_blank">Watch Video</a> }
              { articleLink && <a className="button gray" href={ articleLink } target="_blank">Read Case Study</a> }
            </div>
          </div>
        </div>
      </div>
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
        <div className={styles.blockHeader}>
          <div className={styles.blockHeaderContent}>
            <h1 className="global-hero-glow-white">Customers who let their talent talk</h1>
            <p>Customers come to us when they want to remove any barrier that stands between them and their next great hire.</p>
          </div>
        </div>
        <div className="customers-icons">
          <div className="container">
            <div className="divider">
              <div className="shadow" id="customer-shadow"></div>
              {this.blockItem("accenture", accentureNeon, accentureBlack, "Accenture", "Global", false, false)}
              {this.blockItem("adecco", adeccoNeon, adeccoBlack, "Adecco", "Global", false, false)}
              {this.blockItem("aia", aiaNeon, aiaBlack, "AIA", "Global", false, false)}
              {this.blockItem("prudential", prudentialNeon, prudentialBlack, "The Real Life Company", "South East Asia", false, false)}
              {this.blockItem("starwood", starwoodNeon, starwoodBlack, "Starwood", "China", "nFRDqo_rc3o", false)}
              {this.blockItem("alexander", alexanderNeon, alexanderBlack, "Alexander Mann", "South East Asia", false, false)}
              {this.blockItem("psg", psgNeon, psgBlack, "PSG Global Solutions", "Global", false, false)}
              {this.blockItem("sykes", sykesNeon, sykesBlack, "Sykes", "Philippines, Latin America", false, "https://medium.com/@perrine.issachar/a7641b6e1285")}
              {this.blockItem("alorica", aloricaNeon, aloricaBlack, "Alorica", "Global", "ciSB3gMpH_g", false)}
              {this.blockItem("genpact", genpactNeon, genpactBlack, "Genpact", "Global", "g4i0vKSu0f4", false)}
              {this.blockItem("afni", afniNeon, afniBlack, "Afni", "Philippines", "lvYOmb8OVPE", "https://blog.talkpush.com/afni-welcomes-stanley-the-chatbot-9032c8e1b5f0")}
              {this.blockItem("hgs", hgsNeon, hgsBlack, "HGS", "US, India", false, false)}
              {this.blockItem("exl", exlNeon, exlBlack, "EXL", "Philippines", false, false)}
              {this.blockItem("247", _247Neon, _247Black, "[24]7.ai", "Philippines", "Vpu8HkBHShw", false)}
              {this.blockItem("valorglobal", valorglobalNeon, valorglobalBlack, "Valor Global", "Costa Rica", "_swxOnvC0go", false)}
              {this.blockItem("teleperformance", teleperformanceNeon, teleperformanceBlack, "Teleperformance", "Global", "h3LbzyAl2q8", false)}
              {this.blockItem("walmart", walmartNeon, walmartBlack, "Walmart", "Global", false, false)}
              {this.blockItem("amazon", amazonNeon, amazonBlack, "Amazon", "Global", false, false)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomersPage
