import Tshirt from "./Tshirt";
import Bottle from "./Bottle"

export default function Items() {

  return (
    <>
      <section id="items" className="container-fluid section-items-container">
        <div className="no-overflow">
          <Tshirt />
          <Bottle />
        </div>
      </section>
    </>
  );
}
