import React from 'react'
import Link from 'gatsby-link'
import './style/footer.scss'
import './style/aweber.scss'
import FooterLogo from '../images/logo-neon.svg'

const Footer = ({ title }) => (
    <footer>
        <div className="container">
            <div className="divider">
                <div className="section bigger">
                    <h4>About {title}</h4>
                    <p>Talkpush is making volume hiring fun and personal again. Talkpush is a recruitment platform that leverages the power of messaging and social media. The solution consists of Stanley, a recruitment chatbot compatible with Facebook and WeChat, which conducts interviews and an application management tool, which allows recruiters to evaluate and hire candidates faster than ever before.</p>
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="Footer Logo" />
                    </div>
                </div>
                <div className="section">
                    <h4>Contact Details</h4>
                    <ul>
                        <li><i className="fa fa-send fa-fw" aria-hidden="true"></i><a href="mailto:hello@talkpush.com">hello@talkpush.com</a></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(852) 9188 7562 &mdash;<strong>&nbsp;<span className="country-code">HK</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(63) 2 639 6788 &mdash;<strong>&nbsp;<span className="country-code">PH</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(33) 7 82 96 83 16 &mdash;<strong>&nbsp;<span className="country-code">FR</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(52) 55 1168 9643 &mdash;<strong>&nbsp;<span className="country-code">MX</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(1) 415 818 5083 &mdash;<strong>&nbsp;<span className="country-code">US</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(91) 96503 49306 &mdash;<strong>&nbsp;<span className="country-code">IN</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(61) 2 8417 1097 &mdash;<strong>&nbsp;<span className="country-code">AU</span></strong></li>
                        <li><i className="fa fa-hashtag fa-fw" aria-hidden="true"></i>+(60) 3 9212 5976 &mdash;<strong>&nbsp;<span className="country-code">MY</span></strong></li>
                    </ul>
                </div>
                <div className="section">
                    {/* Begin AWeber Signup Form */}
                    <form className="af-form-wrapper" method="post" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl" target="_blank">
                        <div style={{ display: 'none' }}>
                            <input type="hidden" name="meta_web_form_id" value="565122839" />
                            <input type="hidden" name="meta_split_id" value="" />
                            <input type="hidden" name="listname" value="awlist4867061" />
                            <input id="redirect_e7ec99d1cc0795da9338f4cb35e59b1b" type="hidden" name="redirect" value="https://www.aweber.com/thankyou-coi.htm?m=text" />
                            <input type="hidden" name="meta_adtracking" value="Website_Form" />
                            <input type="hidden" name="meta_message" value="1" />
                            <input type="hidden" name="meta_required" value="email,name" />
                            <input type="hidden" name="meta_tooltip" value="" />
                        </div>
                        <div className="af-form" id="af-form-565122839">
                            <h4>Subscribe</h4>
                            <div className="af-body af-standards" id="af-body-565122839">
                                <div className="af-element">
                                    <label className="previewLabel" htmlFor="awf_field-94336136">Read our newsletter as soon as it gets out. You can unsubscribe anytime you want after subscribing.</label>
                                    <div className="af-textWrap">
                                        <input className="text" id="awf_field-95695296" placeholder="Full Name" type="text" name="name" tabIndex="500" />
                                        <input className="text" id="awf_field-95695295" placeholder="E-mail Address" type="text" name="email" tabIndex="501" />
                                    </div>
                                    <div className="af-clear">
                                    </div>
                                </div>
                                <div className="af-element buttonContainer">
                                    <input className="button" id="af-submit-image-565122839" value="Subscribe" name="submit" type="submit" alt="Submit Form" tabIndex="501" />
                                    <div className="af-clear">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }}>
                            <img src="https://forms.aweber.com/form/displays.htm?id=rGysjExMHMyc" alt="" />
                        </div>
                    </form>
                    {/* End AWeber Signup Form */}
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/letthetalenttalk" target="_blank" title="Facebook"><span className="fa-stack"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-facebook fa-stack-1x fa-inverse"></i></span><span>Facebook</span></a></li>
                        <li><a href="https://www.twitter.com/talkpush" target="_blank" title="Twitter"><span className="fa-stack"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-twitter fa-stack-1x fa-inverse"></i></span><span>Twitter</span></a></li>
                        <li><a href="https://www.linkedin.com/company/talkpush" target="_blank" title="LinkedIn"><span className="fa-stack"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-linkedin fa-stack-1x fa-inverse"></i></span><span>LinkedIn</span></a></li>
                        <li><a href="https://www.youtube.com/c/Talkpush" target="_blank" title="YouTube"><span className="fa-stack"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i></span><span>YouTube</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div>All rights reserved &copy; {title} {(new Date().getFullYear())}</div>
            <ul>
                <li><a href="https://help.talkpush.com/" target="_blank">Documentation</a></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
        </div>
    </footer>
)

export default Footer
