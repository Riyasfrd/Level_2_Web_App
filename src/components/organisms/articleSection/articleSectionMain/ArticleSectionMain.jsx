import { Article } from "../../../molecules"
import { ARTICLE_IMAGES as img } from "../../../../Assets/articles"

export const ArticleSectionMain = () => {
  return (
    <>
        <div className="article-section__main">
            <Article
            articleHeading={"Lorem ipsum dolor sit at"}
            articleHeadingType={"h1"}
            isMainArticle={true}
            articleContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniamullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in`}
            imgMobileUrl={img.MOBILE.ARTICLE_MAIN}
            imgAltText={"Article Image"}
            imgDesktopUrl={img.DESKTOP.ARTICLE_MAIN}
            />
        </div>
    </>
  )
}
