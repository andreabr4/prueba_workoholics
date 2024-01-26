import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import SectionItems from "./components/SectionItems";

function App() {
  return (
    <>
      {/* <Contact></Contact> */}
      <header>
        <Header></Header>
      </header>
      <main>
        <MainTitle></MainTitle>
        <SectionItems></SectionItems>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
}
