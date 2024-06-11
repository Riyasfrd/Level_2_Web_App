/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header, Footer, ArticleSection, ArticleSectionMain, SocialMediaIconsBlock } from "./components/organisms";

const socialMediaIcons = ['w', 'instragram', 'deviantrat', 'twitter', 'soundcloud', 'linkdin', 'm', 'facebook', 'paypol', 'play', 'codepen', 'pinterest'];

function App() {
  return (
    <>
      <Header />
      <main className="main">
        
        <section>
          <ArticleSectionMain />
        </section>
        <section>
          <SocialMediaIconsBlock iconlist={socialMediaIcons} />
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
