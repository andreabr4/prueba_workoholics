import mug from "../../images/Mug1.png"

export default function Test() {
  return (
    <>
      <div className="container">
        <h1 className="custom-header">
          <div className="text-behind">LOREM</div>
          <div className="image-container">
            <img src={mug} alt="An image" />
          </div>
          <div className="text-front">IPSUM</div>
          <div className="text-behind">DOLOR</div>
        </h1>
      </div>
    </>
  );
}
