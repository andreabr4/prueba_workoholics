import logo from "../../images/logo.png";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar-container p-2 ps-5 pe-5">
          <img className="img-fluid logo" src={logo} alt="logo-worköholics" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                viewBox="0 0 35 24"
                width="35"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_2">
                    <rect width="35" height="24" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_2)">
                  <g
                    transform="matrix(1,0,0,1,-600.6199951171875,410.197998046875)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="#212222"
                        strokeOpacity="1"
                        strokeWidth="2"
                        d="M602.3280029296875,-402.2619934082031 C602.3280029296875,-402.2619934082031 633.75,-402.2619934082031 633.75,-402.2619934082031"
                      ></path>
                    </g>
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="#212222"
                        strokeOpacity="1"
                        strokeWidth="2"
                        d="M602.3280029296875,-393.2929992675781 C602.3280029296875,-393.2929992675781 633.75,-393.2929992675781 633.75,-393.2929992675781"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbarMenu">
              <a className="nav-link" aria-current="page" href="#">
                Menu 1
              </a>

              <a className="nav-link" href="#">
                Menu 2
              </a>

              <a className="nav-link" href="#">
                Menu 3
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
