import logo from "../../images/logo.png";
import NavbarMenu from "./NavbarMenu";

export default function Header() {
  return (
    <>
      <header className="container-fluid logo">
        <div className="row navRow">
          <div className="col-2">
            <img className="img-fluid ms-5" src={logo} alt="logo-worköholics" />
          </div>
          <NavbarMenu />
        </div>
      </header>
    </>
  );
}
