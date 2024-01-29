import Tshirt from "../../images/Tshirt1.png";
import Bottle from "../../images/Bottle1.png";

export default function Items() {
  return (
    <>
      <section className="container-fluid">
        <article className="row items-container">
          <div className="col-sm-6 tshirt-article d-flex justify-content-end">
            <figure className="tshirt-image">
              <img src={Tshirt}></img>
            </figure>

            <div className="tshirt-information">
              <div className="row">
                <header className="col-8">
                  <h2 className="tshirt-title">T-shirt</h2>
                </header>
              </div>
              <div className="row">
                <p className="tshirt-description col-7">
                  Etiam vulputate dui efficitur ultrices pharetra. Praesent
                  tempor mollis purus.
                </p>
              </div>

              <div className="container">
                <section className="tshirt-options pb-3 row">
                  <span className="secondary-color-rectangle col-2 mt-1" />
                  <span className="primary-color-rectangle col-2 mt-1" />
                  <div className="col d-flex justify-content-end">
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

        {/* BOTTLE */}

        <article className="row d-flex justify-content-end">
          <div className="col-sm-6 bottle-article d-flex justify-content-start">
            <figure className="bottle-image">
              <img src={Bottle}></img>
            </figure>

            <div className="bottle-information">
              <div className="row">
                <header className="col-8">
                  <h2 className="bottle-title">Bottle</h2>
                </header>
              </div>

              <div className="row">
                <p className="bottle-description col-7">
                  Etiam vulputate dui efficitur ultrices pharetra. Praesent
                  tempor mollis purus.
                </p>
              </div>


              <div className="container">
                <section className="bottle-options pb-3 row">
                  <span className="primary-color-rectangle col-2 mt-1" />
                  <div className="col d-flex justify-content-end">
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
      </section>
    </>
  );
}
