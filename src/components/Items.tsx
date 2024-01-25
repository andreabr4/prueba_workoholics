import Tshirt from "../../images/Tshirt1.png"
import Bottle from "../../images/Bottle1.png"

export default function Items() {
  return (
    <>
      <section>
        {/* DIV PARA ROW */}
        <article>
        <div>
            <header>
              <h2>T-shirt</h2>
            </header>
            <div>
              <p>
                Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
                mollis purus.
              </p>
            </div>
            
            <div>
            <div>Cuadro de color</div>
            <div>Cuadro de color</div>
            </div>

            <div>
            <p>Buy</p>
            <img></img>
            {/* img para la flecha */}
            </div>

            <figure>
            <img src={Tshirt}></img>
            </figure>

        </div>
        </article>

    {/* DIV PARA ROW */}
    <article>
        <div>
            <header>
              <h2>Bottle</h2>
            </header>
            <div>
              <p>
                Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor
                mollis purus.
              </p>
            </div>
            
            <div>
            <div>Cuadro de color</div>
            </div>

            <div>
            <p>Buy</p>
            <img></img>
              {/* img para la flecha */}
            </div>

            <figure>
            <img src={Bottle}></img>
            </figure>

            </div>
            </article>
       

      </section>
    </>
  );
}
