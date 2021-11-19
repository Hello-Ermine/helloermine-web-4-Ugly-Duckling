import React from "react";
import "./Content2.css";
import { useEffect } from "react";

import background2 from "../img/ฟักไข่ออก-01-01.png";
import frontCard from "../img/font-01.png";

function Content2() {
  useEffect(() => {
    const card = document.querySelector(".card__inner1");

    card.addEventListener("click", function (e) {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <div className="bg2">
      <div className="container">
        <section className="content-con">
          <div className="content-l">
            <img src={background2} alt="background2" />
          </div>
          <div className="content-r">
            <div className="card">
              <div className="card__inner1">
                <div className="card__face card__face--front">
                  <div className="front-size">
                  <img src={frontCard} alt="img" />
                  </div>
                </div>
                <div className="card__face card__face--back">
                  <div className="card__content">
                    <div className="card__body">
                      <p>
                      But the largest egg in the nest was still there. The mother duck didn't remember laying such a huge egg. Suddenly the large egg cracked open, the baby bird was big, Grey and ugly, didn't look like a duckling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="card">
              <div class="card__inner1">
                <div class="card__face card__face--front">
                  <img src={frontCard} alt="img"/>
                </div>
                <div class="card__face card__face--back">
                  <div class="card__content">
                    <div class="card__body">
                      <p>
                        But the largest egg in the nest was still there. The
                        mother duck didn't remember laying such a huge egg.
                        Suddenly the large egg cracked open, the baby bird was
                        big, Grey and ugly, didn't look like a duckling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <script src="main.js"></script> */}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Content2;
