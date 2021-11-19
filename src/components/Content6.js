import React from "react";
import "./Content6.css";
import { useEffect } from "react";

import background6 from "../img/becomeหงษ์-01.png";
import frontCard from "../img/font-01.png";

function Content6() {
  useEffect(() => {
    const card = document.querySelector(".card__inner6");

    card.addEventListener("click", function (e) {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <div className="bg6">
      <div className="container">
        <section className="content-con">
          <div className="content-l">
            <img src={background6} alt="background6" />
          </div>
          <div className="content-r">
            <div className="card">
              <div className="card__inner6">
                <div className="card__face card__face--front">
                  <div className="front-size">
                  <img src={frontCard} alt="img" />
                  </div>
                </div>
                <div className="card__face card__face--back">
                  <div className="card__content">
                    <div className="card__body">
                      <p>
                      At last, the snow melted away. It was spring and the duckling was big and stronger than before. He flew high in the air, and he landed by a lovely lake surrounded by magnificent, white and graceful swans. His ugly feathers were now snowy white. His neck was curved and slender. He had grown into a swan. The other swans came towards him and stroked him with their beaks.
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
export default Content6
