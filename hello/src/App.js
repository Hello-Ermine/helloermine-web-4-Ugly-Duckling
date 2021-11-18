import './App.css';
import './style2.css';
import { useEffect } from 'react';
import logo from './logo/LOGOo-01.png';
import box1 from './img/แม่ไก่กกไข่.png';
import box2 from './img/ฟักไข่ออก-01-01.png';
import box3 from './img/เป็ดโดนล้อ-01.png';
import box4 from './img/หอบของหนี.png';
import box5 from './img/sswinterduck-02-01.png';
import box6 from './img/becomeหงษ์-01.png';
import fontcard from './img/font-01.png';
import aboutimg1 from './about_img/122483925_1328740147461399_4305538231536811199_n.jpg';
import aboutimg2 from './about_img/163595908_1100953177084969_8768397838978820791_n.png';
import aboutimg3 from './about_img/IMG_1553.jpg';
import aboutimg4 from './about_img/IMG_20200809_175257-01.jpeg';
import aboutimg5 from './about_img/IMG_7815.png';
import aboutimg6 from './about_img/unknown.png';

function App() {
    useEffect(() => {
        const card = document.querySelector(".card__inner");
    
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }, [])
    useEffect(() => {
        const card = document.querySelector(".card__inner1");
    
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }, [])
    useEffect(() => {
        const card = document.querySelector(".card__inner2");
    
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }, [])
    useEffect(() => {
        const card = document.querySelector(".card__inner3");
    
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }, [])
    useEffect(() => {
        const card = document.querySelector(".card__inner4");
    
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }, [])
    useEffect(() => {
        const card = document.querySelector(".card__inner5");
    
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }, [])
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="bg">
                    <nav>
                        <a href="#">Home</a>
                        <a href="#bg2">Story</a>
                        <a href="#"><img className="logo" src={logo} alt="logo" /></a>
                        <a href="#bg7">Moral</a>
                        <a href="#about">About us</a>
                    </nav>
                    <navbar/>
                    <h1 className="fontslogo">Ugly<br />Duckling</h1>
                </div>
                <div id="bg2">
                    <br />
                    <div className="center">
                        <div className="box">
                            <div className="main">
                                <div className="img">
                                    <img src={box1} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner">
                                <div class="card__face card__face--front">
                                    <img src={fontcard} alt="img" width="420px" />
                                </div>
                                <div class="card__face card__face--back">
                                    <div class="card__content">
                                        <div class="card__body">
                                            <p>
                                                A mother duck had her nest hidden in the long grass, safe from weasels and the fox. She sat on her eggs, waiting for the eggs to hatch. Finally, the eggs hatched, with a pop and peep!peep! Bunch of golden ducklings appeared.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg2-1">
                    <br />
                    <div className="center">
                        <div className="box">
                            <div className="main">
                                <div className="img">
                                    <img src={box2} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner1">
                                <div class="card__face card__face--front">
                                    <img src={fontcard} alt="img" width="420px" />
                                </div>
                                <div class="card__face card__face--back">
                                    <div class="card__content">
                                        <div class="card__body">
                                            <p>
                                            But the largest egg in the nest was still there. The mother duck didn't remember laying such a huge egg. Suddenly the large egg cracked open, the baby bird was big, Grey and ugly, didn't look like a duckling.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg3">
                    <br />
                    <div className="center">
                        <div className="box">
                            <div className="main">
                                <div className="img">
                                    <img src={box3} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner2">
                                <div class="card__face card__face--front">
                                    <img src={fontcard} alt="img" width="420px" />
                                </div>
                                <div class="card__face card__face--back">
                                    <div class="card__content">
                                        <div class="card__body">
                                            <p>
                                            Other ducklings don't like him as he was ugly. A few days later the mother duck took her ducklings for a swim. The Grey duckling also joined other ducklings.
Every day he was pecked and pushed by ducks and even by the chickens.  
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg4">
                    <br />
                    <div className="center">
                        <div className="box">
                            <div className="main">
                                <div className="img">
                                    <img src={box4} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner3">
                                <div class="card__face card__face--front">
                                    <img src={fontcard} alt="img" width="420px" />
                                </div>
                                <div class="card__face card__face--back">
                                    <div class="card__content">
                                        <div class="card__body">
                                            <p>
                                            One day the poor ugly duckling couldn't take it anymore, so he ran far away from his home.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg5">
                    <br />
                    <div className="center">
                        <div className="box">
                            <div className="main">
                                <div className="img">
                                    <img src={box5} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner4">
                                <div class="card__face card__face--front">
                                    <img src={fontcard} alt="img" width="420px" />
                                </div>
                                <div class="card__face card__face--back">
                                    <div class="card__content">
                                        <div class="card__body">
                                            <p>
                                            The duckling moved away from those ducks. The poor duckling felt very lonely. He didn't even move from that place. As it was winter, the water was so cold.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg6">
                    <br />
                    <div className="center">
                        <div className="box">
                            <div className="main">
                                <div className="img">
                                    <img src={box6} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner5">
                                <div class="card__face card__face--front">
                                    <img src={fontcard} alt="img" width="420px" />
                                </div>
                                <div class="card__face card__face--back">
                                    <div class="card__content">
                                        <div class="card__body">
                                            <p>
                                            At last, the snow melted away. It was spring and the duckling was big and stronger than before. He flew high in the air, and he landed by a lovely lake surrounded by magnificent, white and graceful swans. 
His ugly feathers were now snowy white. His neck was curved and slender. He had grown into a swan. The other swans came towards him and stroked him with their beaks. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bg7">
                    <br />
                    <h1 className="head">Moral</h1>
                    <br/>
                    <h1>we shouldn’t discriminate people, judging by their physical appearance.</h1>
                </div>
                <div id="about">
                    <br />
                    <h1>About Us</h1>
                    <div className="center2">
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
                                <img src={aboutimg3} alt="img" />
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
            </header>
        </div>
    );
}

export default App;
