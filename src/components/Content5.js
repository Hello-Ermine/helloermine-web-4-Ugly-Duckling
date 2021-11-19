import React from "react";
import "./Content5.css";
import { useEffect } from "react";

import background5 from "../img/sswinterduck-02-01.png";
import frontCard from "../img/font-01.png";

function Content5() {
  useEffect(() => {
    const card = document.querySelector(".card__inner5");

    card.addEventListener("click", function (e) {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <div className="bg5">
      <div className="container">
        <section className="content-con">
          <div className="content-l">
            <img src={background5} alt="background5" />
          </div>
          <div className="content-r">
            <div className="card">
              <div className="card__inner5">
                <div className="card__face card__face--front">
                  <div className="front-size">
                  <img src={frontCard} alt="img" />
                  </div>
                </div>
                <div className="card__face card__face--back">
                  <div className="card__content">
                    <div className="card__body">
                      <p>
                      The duckling moved away from those ducks. The poor duckling felt very lonely. He didn't even move from that place. As it was winter, the water was so cold.
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
export default Content5
