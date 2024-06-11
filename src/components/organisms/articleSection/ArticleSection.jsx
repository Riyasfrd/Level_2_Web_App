import { ArticleSectionList } from "./articleSectionList/ArticleSectionList";
import { ArticleSectionHeading } from "./articleSectionHeading/ArticleSectionHeading";

export const ArticleSection = () => {
  return (
    <>
      <section className="article-section">
        <div className="article-section__container">
          <ArticleSectionHeading articleSectionHeadingType="h2" articleSectionHeading="Our Work" />
          <ArticleSectionList />
        </div>
      </section>
    </>
  );
};
