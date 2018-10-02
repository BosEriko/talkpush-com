import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/terms.module.scss'

const pageVariables = {
  pageCode: 'terms',
  pageDescription: 'Terms and Conditions',
  pageTitle: 'Terms and Conditions',
}

class TermsPage extends React.Component {
  componentDidMount() {
    window.headerAlwaysActive = true;
    document.getElementById("header").classList.add("active")
  }
  componentWillUnmount() {
    window.headerAlwaysActive = false;
  }
  render() {
    return (
      <div className={styles.block}>
        <Helmet>
          <title>{pageVariables.pageTitle} - {this.props.siteTitle}</title>
          <meta name='description' content={pageVariables.pageDescription} />
          <meta property='og:description' content={pageVariables.pageDescription} />
        </Helmet>
        <div className="container">
          <h1 className="global-hero-glow-white text-uppercase">{pageVariables.pageTitle} of Service</h1>
          <h3 className="global-hero-glow-green text-uppercase">1. Grant and Scope of Agreement</h3>
          <p>1.1. By accepting the creation of a Talkpush account, either created by you or on your behalf by a Talkpush team member, or a member (or associate) of your own company you agree to abide by the terms of this Agreement. Talkpush grants to you a non-exclusive, non-transferable licence to use the Service(s) selected by you on the terms of this Agreement.</p>
          <h3 className="global-hero-glow-green text-uppercase">2. Delivery of Service</h3>
          <p>2.1. You are responsible for any Customer responsibilities indicated in this Agreement.</p>
          <p>2.2. You shall not knowingly permit the Services to be used in violation of any applicable laws or regulations.</p>
          <p>2.3. Talkpush shall use commercially reasonable endeavours to provide 24/7 access to its online reporting through the Talkpush Portal. Talkpush shall provide, at your cost and expense, all such reporting as you may reasonably request.</p>
          <p>2.4. Talkpush shall host, operate, administer, and maintain the Service in accordance with the terms of the Agreement.</p>
          <p>2.5. Talkpush shall provide such other professional services for integration, customisation, training, or other purposes as may be ordered in an Order accepted by Talkpush.</p>
          <p>2.6. In order to deliver a better service, Talkpush may request administrative access to your online properties, examples of which are, but not limited to, Facebook, WeChat, Indeed, Jobstreet, etc. The purpose for this level of access is to seamlessly integrate your sourcing channels with the Talkpush CRM and for quick SLA resolutions pertaining to third-party integration issues. Access to your online properties will not be misused, and information collected will be kept strictly confidential. Additional control measures to grant access can include sign off on confidentiality documents (such as NDAs).</p>
          <p>Information collected will be used for the following objectives:</p>
          <ol type="A">
            <li>To keep you informed</li>
            <li>To improve our services in integrating with your channels</li>
            <li>Talkpush may use users feedback specific to recruitment to improve our products</li>
            <li>Information might be used to understand how users are using our products and services</li>
            <li>Information provided by you can help us provide better services and quicker solutions</li>
          </ol>
          <h3 className="global-hero-glow-green text-uppercase">3. Customer Responsibilities and Obligations</h3>
          <p>3.1. You shall not use the Services for any unlawful purpose whatsoever including the transmission or offering of any information or services which are unlawful, abusive, harmful, threatening, defamatory, or which in any way infringe copyright, intellectual property rights, trademarks, or which is pornographic, or any other material that may cause offence in any way.</p>
          <p>3.2. You specifically agree to indemnify Talkpush against all costs and liabilities arising out of all claims which result from, or involve an allegation of, any breach of clause.</p>
          <p>3.3. You shall co-operate with Talkpush in relation to any complaints, enquiries or investigations regarding services offered by you. You shall, at the discretion of Talkpush, without limitation bear in full any costs associated with such complaints, investigations, or enquiries or any action whether or not brought by or against Talkpush.</p>
          <p>3.4. You are responsible for ensuring that no third party Intellectual Property Rights are infringed by your choice of telephone number for a particular service and indemnify Talkpush against all costs and liabilities arising out of a breach or allegation of a breach of any such third party”s Intellectual Property Rights.</p>
          <p>3.5. You shall ensure that you have all necessary approvals, permissions or authorisations for the services operated through Talkpush. You shall be responsible for the content of services offered, and for ensuring that these services comply with the Code, the Act and this Agreement. Talkpush may recover from you as a debt immediately due and payable all fines, claims or administrative expenses resulting charged by carrier and service providers, resulting from a breach of the Code, unless the acts or omissions of Talkpush contributed to such breach in which case the amount which Talkpush shall be entitled to recover shall be reduced by reference to the seriousness and impact of such act or omission which contributed to such breach. The amount of such reduction shall be negotiated in good faith by the parties.</p>
          <h3 className="global-hero-glow-green text-uppercase">4. Confidentiality, Data Protection and Privacy</h3>
          <p>4.1. Confidentiality. Each party will refrain from using the other”s Confidential Information except as contemplated by this Agreement and from disclosing such Confidential Information to any third party. The parties will, in a commercially reasonable manner, store and protect the other party”s Confidential Information from unauthorised access. However, each party may disclose Confidential information of another party: (1) pursuant to the order or requirement of a court, administrative agency, or other government body, provided that such party give reasonable notice to the other party to contest such order or requirement; or (2) on a confidential basis to legal and financial advisers and institutional investors under appropriate non-disclosure agreements.</p>
          <p>4.2. You give permission for Talkpush to access your account and analyse data or call recordings for debugging or support purposes as is deemed necessary by Talkpush.</p>
          <p>4.3. You acknowledge that Talkpush is required to retain Call Detail Records for such period as Talkpush reasonably considers appropriate (subject to your right to request in writing that Talkpush removes any Caller ID from such Call Detail Records in which case Talkpush shall use reasonable commercial endeavours to remove such Caller ID from such Call Detail Records)</p>
          <p>4.4. Each party shall take appropriate technical and organisational measures against unauthorised or unlawful processing of the Personal Data or its accidental loss, destruction or damage.</p>
          <p>4.5. You acknowledge and agree to promptly provide to Talkpush, without charge, such information and Personal Data as may be reasonably requested in order to comply with any law or request from any law enforcement or other regulatory agency, provided that doing so will not cause you to be in violation of any contractual or legal obligations.</p>
          <p>5. Billing and Payment</p>
          <p>5.1. The Customer shall be invoiced in advance for any services to be rendered by Talkpush.</p>
          <p>5.2. The Customer shall be invoiced the Cost per Number Fees if applicable Monthly in arrears.</p>
          <p>5.3. The Customer shall be invoiced the Minute Charges Fees if applicable Monthly in arrears.</p>
          <p>5.4. Talkpush shall be entitled to raise an invoice for Additional Fees as and when they fall due.</p>
          <p>5.5. The Customer shall pay all invoices within fourteen (14) days’ of the date of the invoice.</p>
          <p>5.6. The Fees are payable in the currency detailed in the invoice, which shall be paid by the Customer at the rate and in the manner prescribed by law.</p>
          <p>5.7. If any Fees are not paid by the due date for payment, then (without prejudice to Talkpush”s other rights and remedies) Talkpush reserves the right to:</p>
          <p>5.7.1. Charge statutory interest on that sum on a daily compounded basis (before as well as after any judgment) at the then prevailing rate, and/or</p>
          <p>5.7.2. At Talkpush”s sole discretion, suspend any or all of the Service and / or Support.</p>
          <h3 className="global-hero-glow-green text-uppercase">6. Intellectual Property</h3>
          <p>6.1. Reservation of Rights. You acknowledge that Talkpush shall retain all Intellectual Property Rights in and to the Service, the Software used to provide the Service, and any Modifications and enhancements thereto, and you shall have no rights in or to the Service or the Software other than the right to use it in accordance with the terms of this Agreement. Except as expressly provided herein, nothing contained herein shall be interpreted so as to transfer any right, title or interest in any intellectual property right of Talkpush, nor to grant you any rights or licenses in any intellectual property right of Talkpush.</p>
          <h3 className="global-hero-glow-green text-uppercase">7. Other General Terms</h3>
          <p>7.1. Notices. All notices given by you to us must be given to Talkpush via our e-mail address hello@talkpush.com We may give notice to you at either the e-mail or postal address you provided to us when purchasing the Service. Notice will be deemed received and properly served immediately when posted on our website, 24 hours after an e-mail is sent, or three days after the date of posting of any letter. In proving the service of any notice, it will be sufficient to prove, in the case of a letter, that such letter was properly addressed, stamped and placed in the post and, in the case of an e-mail, that such e-mail was sent to the specified e-mail address of the addressee.</p>
          <p>7.2. Force Majeure. If the performance of any obligation hereunder is interrupted, delayed, fails and/or is interfered with by reason of any circumstances beyond a party”s reasonable control, including but not limited to acts of God, labour strikes and other labour disturbances, power surges or failures, disturbance to power supplies or the act or omission of any third party, non-performance by suppliers or subcontractors, inclement weather, storm, flood, drought, lightning, fire, shortage of power, disconnection damage or disturbance to telecommunications connections and cables, trade dispute, government action, embargoes, termination of or refusal to grant a licence, damage to or loss of equipment or interruption, failure or delay in any service provided to us by any third party including governmental or regulatory authority or telecommunications operator, war, military operations, or riot, the party shall be excused from such performance to the extent necessary, provided the party shall use reasonable efforts to remove such causes of non-performance.</p>
          <p>7.3. Governing Law. This Agreement will be governed by and construed in accordance with the laws of Hong Kong, without regard to its rules concerning conflicts of law; and shall be subject to the non-exclusive jurisdiction of the courts of Hong Kong.</p>
          <p>7.4. Entire Agreement. The terms and conditions of this Agreement and the Order(s) supersede all previous agreements, proposals, or representations related to the Services. This Agreement sets forth the entire agreement and understanding between the parties pertaining to the subject matter hereof and supersedes all prior written or oral agreements between them.</p>
          <p>7.5. Modification of Agreement. This Agreement may be amended, modified, or updated from time to time by Talkpush.</p>
          <p>7.6. Privacy. The parties to this agreement are independent contractors and nothing in this agreement shall be deemed to create a joint venture, partnership, or agency relationship between the parties in this Agreement.</p>
          <p>7.7. Order of Precedence. In the event of any conflict between this Agreement and the terms and conditions of any Order, the order of precedence is as follows: (1) this Agreement, and (2) the Order.</p>
          <p>7.8. No Waiver. The rights of each party hereto arising out of any provision of this Agreement or any breach thereof shall not be waived except in writing. Any waiver by a party to the Agreement of its rights under this Agreement or of any breach of this Agreement shall not be construed as a waiver of any other rights or remedies of any other or further breach.</p>
          <p>7.9. Partial Invalidity. If any provision of this Agreement shall be declared invalid or unenforceable under applicable law, such invalidity or unenforceability shall not invalidate or render this Agreement unenforceable, but rather this Agreement shall be construed as if not containing the invalid or unenforceable provision. However, if such provision is an essential element of this Agreement, the parties shall promptly attempt to negotiate a substitute therefore that would preserve, to the fullest extent possible, the respective rights and obligations imposed on each party under this Agreement as originally executed.</p>
          <p>7.10. No Third Party Beneficiaries. A person who is not a party to this agreement shall not have any rights under or in connection with it. The rights of the parties to terminate, rescind or agree any variation, waiver or settlement under this agreement is not subject to the consent of any person that is not a party to this agreement.</p>
          <p>7.11. Errors. Any error, omission or typographical error in any website page, quotation, offer, sales information, invoice, or document supplied by Talkpush shall be subject to correction from Talkpush and without liability.</p>
          <p>7.12. Modification. Talkpush may vary any provision in this Agreement, without prior consent from you, if such change is required because of regulatory, insurance, safety or statutory changes made after the date of this Agreement. Talkpush shall in such circumstances give you 30 days’ notice of such changes via the Talkpush website or portal. You shall have the right by giving notice in writing to Talkpush to terminate this Agreement, within 14 days of receiving such notice. This Agreement would then be terminated within 30 days of such notification, or on a later date specified by you.</p>
          <p>7.13. You grant Talkpush the right to refer to you as a “Client” and mention you and your brand, and company logos, in promotional material, both offline and online. You grant permission to do this during or after any Talkpush services have been rendered activated or terminated.</p>
        </div>
      </div>
    );
  }
}

export default TermsPage
