import React from 'react'
import Helmet from 'react-helmet'
import styles from '../pages-style/privacy.module.scss'

const pageVariables = {
  pageCode: 'privacy',
  pageDescription: 'In accordance with international data privacy laws, our privacy laws protect all candidate data from being shared, accessed or sold outside of their consent.',
  pageTitle: 'Privacy Policy',
}

class PrivacyPage extends React.Component {
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
          <h1 className="global-hero-glow-white text-uppercase">Privacy Policy</h1>
          <p>The automated interview process between the employers (“Employer”, “User”, “you”, “your”) and the applicants (“Applicant”) is facilitated by Talkpush (“we”, “us”, “our”). Personal data provided by the Applicant in the application process will be used by the Employer to process the job application or inquiry. Protecting the privacy of personal data, which has been submitted to our applicant screening platform, (the "Product", “Platform") is something we take seriously. Our privacy policy outlines the types of data we collect and how we process and disclose that data.</p>
          <h3 className="global-hero-glow-green text-uppercase">Types of Data Collected</h3>
          <p>During the account creation process we require users to provide their full names along with an email address. However, while using the Product, Users and Applicants may provide further personally identifiable data, such as their physical address, phone number, work experience, skills and more. Data can come in a range of formats, such as audio recordings, video recordings, and plain text.</p>
          <p>Talkpush uses cookie files to identify potential or existing customers for the operation of the Product. By using the Talkpush website or the Talkpush Product while having the cookie function enabled in your browser, you agree to have cookies stored on your computer. Talkpush uses temporary stored session cookies as well as permanently stored cookies. Cookies can be removed or completely blocked (see the "Help" section in your browser). Please note that if you delete, or choose not to accept cookies from the Talkpush, you may not be able to utilize all the features of the Product.</p>
          <p>By using the Product, you agree to this data being automatically recorded. Talkpush uses technologies such as "clear gif" and "web beacon". This "automatically collected" data includes the IP address or other device addresses / IDs, web browser, and/or device type, the web pages or sites that you visit just before or just after using the Product, the pages you view on the Product, and the dates and times that you visit, access, or use the Product.</p>
          <h3 className="global-hero-glow-green text-uppercase">Data processing</h3>
          <p>We use your personally identifiable data in a variety of ways for the operation of the Product and our business, specifically:</p>
          <ul>
            <li>We use the collected data to operate, maintain, enhance, personalize and provide all the features found in the Product. We use email addresses to allow the Employer to initiate contact with the Applicant.</li>
            <li>We use the collected data to aggregate data sets, which will allow the Employer to understand and analyze the trends, interests, and preferences of Applicants for the purposes of recruitment and other supporting processes.</li>
          </ul>
          <h3 className="global-hero-glow-green text-uppercase">Data Disclosure</h3>
          <p>Your Personally Identifiable data may be disclosed in a variety of ways to a limited and clearly defined audience in order to operate our business, such as:</p>
          <p>The Talkpush applicant screening platform, which connects the Applicant with the Employer. Thus, the Employer has access to your personally identifiable data that you provide in the interview process. No other party but the Employer has full access to your data. The Employer may request for support in their recruitment process from third parties, such as the employees of Talkpush, who are granted access to this data in these cases.</p>
          <p>Talkpush may employ other companies and people to perform tasks on our behalf and, in such cases, will need to share your information with these third parties to provide the Platform services to the Users. Unless we tell you differently, such third parties do not have any right to use the Personal Information we share with them beyond what is deemed necessary to assist us. This includes third party companies and individuals employed by us to facilitate our Services, including the provision of maintenance services, database management, web analytics, general improvement of the Services, and phone system (IVR) hosting.</p>
          <p>We may also disclose your data if required by Hong Kong law or in the good-faith belief that such action is necessary to comply with the law or to otherwise cooperate with investigative or law enforcement activity.</p>
          <p>We reserve the right to disclose your data that we believe, in good faith, is appropriate or necessary to take precautions against liability; to protect Talkpush and others from fraudulent, abusive, or unlawful uses or activity; to investigate and defend ourselves against any third party claims or allegations; to protect the security or integrity of the Product; or to protect the rights, property, security, and/or safety of Talkpush, our users, or others.</p>
          <h3 className="global-hero-glow-green text-uppercase">The Rights of Users</h3>
          <p>Nevertheless, should you at any point wish for your personal data to be deleted or suspended, you can simply request so from the “Superuser” of your company account, your Point of Contact at Talkpush, or by requesting via email at <a href="mailto:compliance@talkpush.com">compliance@talkpush.com</a> Employers may at all times view their personal data that we hold by reviewing their user profile inside the Platform.</p>
          <p>Applicants have the right, at any time, to know whether their Personal Data has been stored and can consult the Facebook Messenger Platform (should they have completed a screening interview through it) or else by requesting so via email to <a href="mailto:compliance@talkpush.com">compliance@talkpush.com</a> to learn about their contents, to verify their accuracy, or to ask for them to be supplemented, cancelled, updated or corrected.</p>
          <h3 className="global-hero-glow-green text-uppercase">Data security</h3>
          <p>We employ managerial, and technical safeguards to ensure the integrity and security of our systems and the data stored on our systems. As previously outlined, access to your data is restricted to the respective Employer you are submitting your application to, and the trusted third parties required to provide our services (view subsection Data Disclosure). However no physical or technical system is completely secure and provides perfect protection against attacks, flaws, or human error. Therefore, we cannot and do not ensure or warrant that data you transmit to us will not be lost or compromised. If we learn of a security systems breach, we may attempt to notify you electronically so that you can take appropriate protective steps. We may also post a notice through the Product if a security breach occurs.</p>
          <p>Data sent to us from within the European Union or by EU citizens will be hosted on servers in the EU.</p>
          <h3 className="global-hero-glow-green text-uppercase">Data Controller</h3>
          <p>By building and maintaining the Platform, Talkpush establishes the means of how the Applicant’s and the Employer’s personal data is processed and we are therefore the Data Controller. For additional details, concerns, or to submit a data privacy request, you may email us at <a href="mailto:compliance@talkpush.com">compliance@talkpush.com</a>.</p>
          <h3 className="global-hero-glow-green text-uppercase">Other Responsibilities</h3>
          <p>In case of declining to share certain data with Talkpush, Talkpush may not be able to provide to you some of the features and functionality found in the Product. You may contact the Employer that invited you to the Product or Talkpush (compliance@talkpush.com) for updating, correcting, or deleting your data.</p>
          <p style={{ fontWeight: "bold" }}>You are responsible for maintaining the secrecy of your unique password and account data at all times.</p>
          <p>The product contains links to third parties, such as the Employer. Any data provided to third parties (including data between Applicants and Employers through the Product) is provided directly to that third party and thus subject to that third party's privacy policy. We are not responsible for privacy policies of third parties to which links are displayed on the Talkpush Product. We encourage you to learn about third parties' privacy and security policies before providing them with personally identifiable data.</p>
          <h3 className="global-hero-glow-green text-uppercase">Affiliates: In the event of a merger or sale</h3>
          <p>Talkpush may now or in the future be affiliated with other companies, such as parent companies and subsidiaries (and their parent companies and subsidiaries). Talkpush reserves the right to transfer your data to any of these affiliated companies. In the event that all, or a portion of Talkpush or its assets is acquired by or merged with a third party entity, or is subject to a change of control, all or a portion of the data in Talkpush's systems may be one of the assets involved in such a transaction, we reserve the right, in any of these circumstances, to transfer or assign all the data that we have collected from users in connection with such a merger, acquisition, sale, or other change of control.</p>
          <h3 className="global-hero-glow-green text-uppercase">Changes and updates to this privacy policy:</h3>
          <p>Please revisit this page periodically to stay informed of any changes to this Privacy Policy, which may be revised periodically at Talkpush's discretion. Our amended Privacy Policy will automatically take effect once it is made available through the Product. Your continued use of the Product after the revised Privacy Policy has become effective indicates that you have read, understood and agreed to the current version of the Privacy Policy.</p>
        </div>
      </div>
    );
  }
}

export default PrivacyPage
