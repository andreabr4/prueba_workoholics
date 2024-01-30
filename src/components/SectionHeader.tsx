export default function SectionHeader() {
  return (
    <>
      <header id="about" className="container-fluid">
        <div className="row-12">
          <div className="col-md-6 offset-md-5">
            <p className="about-paragraph">
              <span className="about-circle"></span>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam "
              }
              <b>vulputate dui efficitur</b>
              {
                " ultrices pharetra. Praesent tempor mollis purus nec fringilla. "
              }
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
