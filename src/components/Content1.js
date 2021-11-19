import React from "react";
import "./Content1.css";
import { useEffect } from "react";

import background2 from "../img/แม่ไก่กกไข่.png";
import frontCard from "../img/font-01.png";

function Content1() {
  useEffect(() => {
    const card = document.querySelector(".card__inner");

    card.addEventListener("click", function (e) {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <div id="bg">
      <div className="container">
        <section className="content-con">
          <div className="content-l">
            <img src={background2} alt="background2" />
          </div>
          <div className="content-r">
            <div className="card">
              <div className="card__inner">
                <div className="card__face card__face--front"><div className="front-size">
                  <img src={frontCard} alt="fornCard" /*width="500px"*/ /></div>
                </div>
                <div className="card__face card__face--back">
                  <div className="card__content">
                    <div className="card__body">
                      <p>
                        A mother duck had her nest hidden in the long grass,
                        safe from weasels and the fox. She sat on her eggs,
                        waiting for the eggs to hatch. Finally, the eggs
                        hatched, with a pop and peep!peep! Bunch of golden
                        ducklings appeared.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <script src="main.js"></script> */}
          </div>
        </section>
      </div>
      
    </div>


    

    
  );
}
export default Content1;
