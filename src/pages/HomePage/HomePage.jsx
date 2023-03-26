import './HomePage.css';
import React from 'react';
import Header from '../../components/Header/Header';
import SCSSContainer from '../../components/SCSSContainer/SCSSContainer';
import QRCodeContainer from '../../components/QRCodeContainer/QRCodeContainer';
import ContainerPixelTracking from '../../components/ContainerPixelTracking/ContainerPixelTracking';
import AudienceAnalyzerContainer from '../../components/AudienceAnalyzerContainer/AudienceAnalyzerContainer';
import LinkContainer from '../../components/LinkContainer/LinkContainer';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="div">
                <div className="div1">
                    <div className="scsscomvn">SCSS.com.vn</div>
                    <Header />
                </div>
                <div className="div2">
                    <SCSSContainer />
                    <img className="heropng-icon" alt="" src="/heropng@2x.png" />
                </div>
            </div>
            <div className="div3">
                <img className="bio-linkpng-icon" alt="" src="/biolinkpng@2x.png" />
                <div className="div4">
                    <div className="scss-pages">Scss pages</div>
                    <div className="create-your-own">
                        Create your own unique and highly customizable BioLink site easily.
                    </div>
                    <div className="ul">
                        <div className="li">
                            <img className="frame-icon" alt="" src="/frame3.svg" />
                            <div className="custom-colors-and">Custom colors and brands</div>
                        </div>
                        <div className="li1">
                            <img className="frame-icon" alt="" src="/frame3.svg" />
                            <div className="custom-colors-and">Many easy-to-use blocks</div>
                        </div>
                        <div className="li2">
                            <img className="frame-icon" alt="" src="/frame3.svg" />
                            <div className="custom-colors-and">SEO Settings</div>
                        </div>
                        <div className="li3">
                            <img className="frame-icon3" alt="" src="/frame4.svg" />
                            <div className="password-protection-sensitive">
                                Password protection, sensitive content alert
                            </div>
                        </div>
                    </div>
                    <img className="span-icon" alt="" src="/span.svg" />
                </div>
            </div>
            <div className="div5">
                <div className="div6">
                    <div className="scss-pages">Shortened link</div>
                    <div className="correct-you-can">Correct! You can also use our service as a shortener.</div>
                    <div className="ul">
                        <div className="li4">
                            <img className="frame-icon" alt="" src="/frame5.svg" />
                            <div className="custom-colors-and">Scheduling and Expiration Limits</div>
                        </div>
                        <div className="li5">
                            <img className="frame-icon" alt="" src="/frame5.svg" />
                            <div className="custom-colors-and">Targeting by country, device and language</div>
                        </div>
                        <div className="li6">
                            <img className="frame-icon" alt="" src="/frame5.svg" />
                            <div className="custom-colors-and">Rotate A/B</div>
                        </div>
                        <div className="li3">
                            <img className="frame-icon3" alt="" src="/frame6.svg" />
                            <div className="password-protection-sensitive">
                                Password protection, sensitive content alert
                            </div>
                        </div>
                    </div>
                    <img className="span-icon" alt="" src="/span1.svg" />
                </div>
                <img className="short-linkpng-icon" alt="" src="/shortlinkpng@2x.png" />
            </div>
            <div className="div7">
                <img className="bio-linkpng-icon" alt="" src="/qrcodepng@2x.png" />
                <QRCodeContainer />
            </div>
            <div className="div8">
                <div className="div9">
                    <div className="integrated-analytics">Integrated Analytics</div>
                    <div className="daily-analytics-referrer">
                        Daily analytics, referrer, country, operating system, language and more.
                    </div>
                    <img className="span-icon" alt="" src="/span3.svg" />
                </div>
                <img className="analyticspng-icon" alt="" src="/analyticspng@2x.png" />
            </div>
            <div className="div10">
                <div className="div11">
                    <div className="div12">
                        <div className="div13">
                            <div className="link">Link</div>
                            <div className="div14">142,882+</div>
                        </div>
                    </div>
                    <div className="div15">
                        <div className="div16">
                            <div className="qr-code">QR code</div>
                            <div className="div17">14194+</div>
                        </div>
                    </div>
                    <div className="div18">
                        <div className="div19">
                            <div className="qr-code">Pageviews</div>
                            <div className="div17">1124,149,413+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div21">
                <div className="div22">
                    <div className="div23">
                        <div className="div24">
                            <img className="frame-icon8" alt="" src="/frame7.svg" />
                            <div className="project">Project</div>
                        </div>
                        <div className="the-easiest-way">The easiest way to categorize your managed resources.</div>
                    </div>
                </div>
                <ContainerPixelTracking
                    pixelTrackingId="/frame8.svg"
                    pixelTrackingText="Pixel tracking"
                    socialMediaPixelTrackingT="Facebook, Google Analytics, Google Tag Manager, LinkedIn, Pinterest, Twitter, Quora, TikTok pixel tracking available."
                />
                <ContainerPixelTracking
                    pixelTrackingId="/frame9.svg"
                    pixelTrackingText="Custom domains"
                    socialMediaPixelTrackingT="Connect your own domain or use our predefined ones."
                    propLeft="782px"
                    propPadding="var(--padding-xl) var(--padding-xl) var(--padding-25xl)"
                    propWidth="283.56px"
                />
            </div>
            <AudienceAnalyzerContainer />
            <LinkContainer />
            <div className="team-13-parent">
                <div className="team-13">TEAM 13</div>
                <img className="group-child" alt="" src="/ellipse-5.svg" />
                <img className="users-icon" alt="" src="/users.svg" />
                <img className="users-icon" alt="" src="/users.svg" />
            </div>
            <button className="div25">
                <b className="thank-you">THANK YOU</b>
            </button>
            <Footer />
        </div>
    );
};

export default HomePage;
