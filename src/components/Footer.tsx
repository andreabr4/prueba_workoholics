export default function Footer() {
  return (
    <>
      <div className="container-fluid footer-container p-5" id="page-footer">
        <div className="no-overflow">
        <div className="row mt-4 footer-content">
          <div className="col-md-7 order-sm-2">
            <div className="row-6 footer-slogan">
              <p>We love what we do.</p>
              <p>We are Worköholics.</p>
            </div>

            <form>
              <div className="row mb-3">
                <div className="col">
                  <input
                    className="footer-form form-control"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                  />

                  <div className="row mt-4 privacy-row">
                    <div className="col-auto form-check">
                      <input
                        type="checkbox"
                        className="form-check-privacy"
                        name="privacy"
                        id="privacy"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="privacy"
                      >
                        {"I have read and accepted the "}
                        <a href="" className="privacy-link">
                          Terms and Conditions.
                        </a>
                      </label>
                    </div>
                    <div className="col-auto mb-5 footer-submit-col">
                      <button type="submit" className="footer-submit-btn">
                        Submit
                        <svg
                          fill="none"
                          viewBox="0 0 34 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 0v15.5h29.808"
                            className="white-stroke"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M23.654 7.154L32 15.5l-8.346 8.346"
                            className="white-stroke"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5 mt-sm-5 order-sm-1 contact-information">
            <div className="row">
              <a href="mailto:hello@workoholics.es">hello@workoholics.es</a>
            </div>
            <div className="row">
              <a href="tel:+34 944 059 957">+34 944 059 957</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
