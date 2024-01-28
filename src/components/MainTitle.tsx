import mug from "../../images/Mug1.png";
export default function MainTitle() {
  return (
    <>
      <header className="container-fluid mb-5 mt-5 ps-5 pe-5" >
            <h1 className="title-words title_container" >
              <span className="first-line-title">LOREM</span>

              <span className="second-line-title" >IPSUM</span>

              <span className="third-line-title" >DOLOR</span>
              <img className="title-mug" src={mug}  ></img>
            </h1>
      </header>
    </>
  );
}
