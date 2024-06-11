import { Typography } from "../../../atom";

export const ArticleSectionHeading = ({
    articleSectionHeading,
    articleSectionHeadingType = "h2", //it can be h1, h2.  default is h2
}) => {
  return (
    <>
      <div className="article-section__heading">
        <Typography type={articleSectionHeadingType} contend={articleSectionHeading} />
      </div>
    </>
  );
};
