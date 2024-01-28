export default function Footer() {
  return (
    <>
      <div className="container-fluid footer-container">
        {/* LEFT:COL1 */}
        <div className="col-3 contact-information">
          <p>hello@workoholics.es</p>
          <p>+34 944 059 957</p>
        </div>

        {/* RIGHT:COL2 */}
        <div>
          {/* ROW1 */}
          <div>
            <p>We love what we do.</p>
            <p>We are Worköholics.</p>
          </div>

          {/* ROW2 */}

          <form>
            {/* POSIBILIDAD DE FORMULARIO */}
            <input type="text" name="email" placeholder="Email"></input>

            <input
              type="checkbox"
              name="termsConditions"
              id="termsConditions"
            ></input>

            <label htmlFor="termsConditions">
              I have read and accepted the Terms and Conditions.
            </label>

            <button type="submit">
              Submit{" "}
              <svg
                className="icon"
                fill="none"
                viewBox="0 0 34 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0v15.5h29.808" className="s" stroke-width="2"></path>
                <path
                  d="M23.654 7.154L32 15.5l-8.346 8.346"
                  className="s"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
