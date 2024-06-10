import { Article } from "../../../molecules";
import { ARTICLE_IMAGES as img } from "../../../../Assets/articles";

export const ArticleSectionList = () => {
  return (
    <>
      <div className="article-section__list">
        <Article
          articleHeading={"Lorem ipsum dolor sit at"}
          articleHeadingType={"h3"}
          articleContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniamullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in`}
          imgMobileUrl={img.MOBILE.ARTICLE_A}
          imgAltText={"Article Image"}
          imgDesktopUrl={img.DESKTOP.ARTICLE_A}
        />

        <Article
          articleHeading={"Lorem ipsum dolor sit at"}
          articleHeadingType={"h3"}
          articleContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniamullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in`}
          imgMobileUrl={img.MOBILE.ARTICLE_B}
          imgAltText={"Article Image"}
          imgDesktopUrl={img.DESKTOP.ARTICLE_B}
        />

        <Article
          articleHeading={"Lorem ipsum dolor sit at"}
          articleHeadingType={"h3"}
          articleContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniamullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in`}
          imgMobileUrl={img.MOBILE.ARTICLE_C}
          imgAltText={"Article Image"}
          imgDesktopUrl={img.DESKTOP.ARTICLE_C}
        />
      </div>
    </>
  );
};