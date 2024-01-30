import BottleImg from "../../images/Bottle1.png";

export default function Bottle() {
  return (
    <>
      <article className="row bottle-container">
        <div className="col-sm-6 bottle-article d-flex justify-content-start">
          <figure className="bottle-image">
            <img src={BottleImg} alt="bottle-image"></img>
          </figure>

          <div className="bottle-information">
            <div className="row">
              <header className="col-8">
                <h2 className="bottle-title">Bottle</h2>
              </header>
            </div>

            <div className="row">
              <p className="bottle-description col-7">
                Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
                mollis purus.
              </p>
            </div>

            <div className="container">
              <section className="bottle-options pb-3 row">
                <span className="primary-color-rectangle col-2 mt-1" />
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
