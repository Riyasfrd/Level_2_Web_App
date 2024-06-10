export const Picture = ({
  imgMobileUrl, //Path to the image(String)
  imgAltText, //Alt text for the image(String)
  imgDesktopUrl, //Path to the image for the media query(String)
  isMainArticle = false, //Boolean to check if the article is the main article
}) => {
  return (
    <>
      <picture className={`article__image ${isMainArticle ? 'article__image--main' : ''}`}>
        <source media="{min-width: 768px}" srcset={imgDesktopUrl} />
        <img src={imgMobileUrl} alt={imgAltText} />
      </picture>
    </>
  );
};
