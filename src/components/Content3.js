import React from "react";
import "./Content3.css";
import { useEffect } from "react";

import background3 from "../img/เป็ดโดนล้อ-01.png";
import frontCard from "../img/font-01.png";

function Content3() {
  useEffect(() => {
    const card = document.querySelector(".card__inner3");

    card.addEventListener("click", function (e) {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <div className="bg3">
      <div className="container">
        <section className="content-con">
          <div className="content-l">
            <img src={background3} alt="background3" />
          </div>
          <div className="content-r">
            <div className="card">
              <div className="card__inner3">
                <div className="card__face card__face--front">
                  <div className="front-size">
                  <img src={frontCard} alt="img" />
                  </div>
                </div>
                <div className="card__face card__face--back">
                  <div className="card__content">
                    <div className="card__body">
                      <p>
                      Other ducklings don't like him as he was ugly. A few days later the mother duck took her ducklings for a swim. The Grey duckling also joined other ducklings. Every day he was pecked and pushed by ducks and even by the chickens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Content3
