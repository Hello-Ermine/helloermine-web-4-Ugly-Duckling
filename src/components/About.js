import React from "react";
import "./About.css"

import aboutimg1 from '../about_img/122483925_1328740147461399_4305538231536811199_n.jpg';
import aboutimg2 from '../about_img/163595908_1100953177084969_8768397838978820791_n.png';
import aboutimg33 from '../about_img/35D3E34B-02A3-40FB-84A6-DD137A1264CE2.jpg';
import aboutimg4 from '../about_img/IMG_20200809_175257-01.jpeg';
import aboutimg5 from '../about_img/IMG_7815.png';
import aboutimg6 from '../about_img/unknown.png';
// import aboutimg33 from '../about_img/test.jpg';
import {FiCode} from 'react-icons/fi';

function About(){
    return(
        <div id="about-id">
            <div className="about">
                <h1 className="about-text">About us</h1>
                <div className="container">
                    <div className="about-con">
                    <a href="https://www.instagram.com/your_ctrl/"><div className="cer">
                            <div className="cerimg">
                                <img src={aboutimg1} alt="img" />
                            </div>
                        </div></a>
                        <a href="https://www.instagram.com/boss_iiew/"><div className="cer">
                            <div className="cerimg">
                                <img src={aboutimg6} alt="img" />
                            </div>
                        </div></a>
                        <a href="https://www.instagram.com/nine_3500/"><div className="cer">
                            <div className="cerimg">
                                <img src={aboutimg33} alt="img" width="20vh"/>
                            </div>
                        </div></a>
                        <a href="https://www.instagram.com/y3ear/ "><div className="cer">
                            <div className="cerimg">
                                <img src={aboutimg5} alt="img" />
                            </div>
                        </div></a>
                        <a href="https://www.instagram.com/russsssana/"><div className="cer">
                            <div className="cerimg">
                                <img src={aboutimg4} alt="img" />
                            </div>
                        </div></a>
                        <a href="https://www.instagram.com/iaintneverplayfair/"><div className="cer">
                            <div className="cerimg">
                                <img src={aboutimg2} alt="img" />
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About