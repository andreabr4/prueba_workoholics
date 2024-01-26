import mug from "../../images/Mug1.png";
import Contact from "./Contact";
export default function MainTitle() {
  return (
    <>
      <header className="container-fluid mb-5 mt-5">
        <div className="row">
        <div className="col-11">
        <h1 className="title-words title_container">
          <span className="first-line-title">LOREM</span>

          <span className="second-line-title">IPSUM</span>

          <span className="third-line-title">DOLOR</span>
          <img className="title-mug" src={mug}></img>
        </h1>
        </div>
        <div className="col-1">
        <Contact></Contact>
        </div>
        </div>
      </header>
    </>
  );
}
