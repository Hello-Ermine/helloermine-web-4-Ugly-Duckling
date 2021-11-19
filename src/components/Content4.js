import React from "react";
import "./Content4.css";
import { useEffect } from "react";

import background4 from "../img/หอบของหนี.png";
import frontCard from "../img/font-01.png";

function Content4() {
  useEffect(() => {
    const card = document.querySelector(".card__inner4");

    card.addEventListener("click", function (e) {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <div className="bg4">
      <div className="container">
        <section className="content-con">
          <div className="content-l">
            <img src={background4} alt="background4" />
          </div>
          <div className="content-r">
            <div className="card">
              <div className="card__inner4">
                <div className="card__face card__face--front">
                  <div className="front-size">
                  <img src={frontCard} alt="img" />
                  </div>
                </div>
                <div className="card__face card__face--back">
                  <div className="card__content">
                    <div className="card__body">
                      <p>
                      One day the poor ugly duckling couldn't take it anymore, so he ran far away from his home.
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
export default Content4
