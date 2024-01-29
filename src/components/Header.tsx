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
            <span className="navbar-toggler-icon"></span>
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
