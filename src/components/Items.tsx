import Tshirt from "../../images/Tshirt1.png";
import Bottle from "../../images/Bottle1.png";

export default function Items() {
  return (
    <>
      <section className="container-fluid mt-5">
        <article className="row-12">
          <div className="col-7">
            <figure className="tshirt-image">
              <img src={Tshirt}></img>
            </figure>

            <div className="tshirt-information">
              <header className="col-sm-6">
                <h2 className="tshirt-title">T-shirt</h2>
              </header>

              <div className="col-sm-6 pb-3">
                <p className="tshirt-description">
                  Etiam vulputate dui efficitur ultrices pharetra. Praesent
                  tempor mollis purus.
                </p>
              </div>

              <div className="tshirt-options pb-5">
                <div className="secondary-color-rectangle"></div>
                <div className="primary-color-rectangle"></div>

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
            </div>
          </div>
        </article>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* DIV PARA ROW */}
        <article>
          <div>
            <header>
              <h2>Bottle</h2>
            </header>
            <div>
              <p>
                Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
                mollis purus.
              </p>
            </div>

            <div>
              <div>Cuadro de color</div>
            </div>

            <div>
              <p>Buy</p>
              <img></img>
              {/* img para la flecha */}
            </div>

            <figure>
              <img src={Bottle}></img>
            </figure>
          </div>
        </article>
      </section>
    </>
  );
}
