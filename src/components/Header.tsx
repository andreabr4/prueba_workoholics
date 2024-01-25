import logo from "../../images/logo.png"
import NavbarMenu from "./NavbarMenu";

export default function Header() {
    
    return (
        <>
        <header>
        <img src={logo} alt="logo-worköholics"></img>
        </header>
        <NavbarMenu></NavbarMenu>
        </>
    );
}
