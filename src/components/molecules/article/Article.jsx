import { Button, ArticleTag, Picture, Typography } from "../../atom/index";

export const Article = ({
  articleContent,
  articleHeading,
  articleHeadingType = "h3", //it can be h1, h3.  default is h3
  imgMobileUrl,
  imgAltText,
  imgDesktopUrl,
  isMainArticle = false,
}) => {
  const handleArticleDetails = () => {
    return (
      <>
        <div className="article__picture">
          <Picture
            imgMobileUrl={imgMobileUrl}
            imgAltText={imgAltText}
            imgDesktopUrl={imgDesktopUrl}
          />
        </div>
        <div className="article__details">
          {articleHeading && (
            <Typography type={articleHeadingType} contend={articleHeading} />
          )}
  
          {articleContent && <Typography contend={articleContent} />}
  
          {!isMainArticle && (
            <div className="article__tags">
            <ArticleTag contend="UI & UX Design" />
            <ArticleTag contend="Development" />
            <ArticleTag contend="Marketing" />
          </div>
          )}
          
          <div className="article__actions">
            <Button buttonTitlte="Click me" buttonType="button__primary" />
            <Button buttonTitlte="Click me" buttonType="button__secondary" />
          </div>
        </div>
      </>
    );
  };

  return (
      <article className={`article ${isMainArticle ? 'article__with-no-padding' : ''}`}>
        {isMainArticle ? (
          <div className="article-section__container-main">
            {handleArticleDetails()}
          </div>
        ): (
          handleArticleDetails()
        )}
      </article>

   
  );
}
