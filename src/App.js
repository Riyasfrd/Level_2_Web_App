/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header, Footer, ArticleSection } from "./components/organisms";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section></section>
        <section>
          <ArticleSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
