/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header, Footer, ArticleSection, ArticleSectionMain } from "./components/organisms";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        
        <section>
          <ArticleSectionMain />
        </section>
        <section>
          <ArticleSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
