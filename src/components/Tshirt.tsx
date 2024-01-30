import PinkTshirt from "../../images/Tshirt1.png";
import BlackTshirt from "../../images/Tshirt2.png";
import { useState } from "react";

export default function Tshirt() {
  const [tshirtImage, setTshirtImage] = useState(PinkTshirt);

  const selectBlackTshirt = () => setTshirtImage(BlackTshirt);
  const selectPinkTshirt = () => setTshirtImage(PinkTshirt);

  return (
    <>
      <article className="row tshirt-article">
        <div className="col-sm-6 tshirt-container d-flex justify-content-end">
          <figure className="tshirt-image">
            <img src={tshirtImage} alt="t-shirt-image"></img>
          </figure>

          <div className="tshirt-information">
            <div className="row">
              <header className="col-8">
                <h2 className="tshirt-title">T-shirt</h2>
              </header>
            </div>
            <div className="row">
              <p className="tshirt-description col-7">
                Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
                mollis purus.
              </p>
            </div>

            <div className="container">
              <section className="tshirt-options pb-3 row">
                <span
                  className="secondary-color-rectangle col-2 mt-1"
                  onClick={selectBlackTshirt}
                />
                <span
                  className="primary-color-rectangle col-2 mt-1"
                  onClick={selectPinkTshirt}
                />
                <div className="col order-sm-3 d-flex justify-content-end buy-button-col">
                  <button className="buy-button">
                    <p>Buy</p>
                    <svg
                      fill="none"
                      viewBox="0 0 34 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0v15.5h29.808"
                        className="black-stroke"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M23.654 7.154L32 15.5l-8.346 8.346"
                        className="black-stroke"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
