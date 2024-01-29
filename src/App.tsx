import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import SectionItems from "./components/SectionItems";


function App() {
  return (
    <>
      <header>
        <Header/> 
      </header>
      <Contact/>
      <main>
        <MainTitle/>
        <SectionItems/>
      </main>
      <footer>
        <Footer/>
      </footer>
      </>
  );
}

export default App;