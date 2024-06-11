import { SocialMediaIconsList } from "../../molecules"

export const SocialMediaIconsBlock = ({iconlist}) => {
  return (
    <>
        <div className="social_media_icon">
            <div className="social_media_icon__container">
                <SocialMediaIconsList iconList={iconlist} />
            </div>
        </div>
    </>
  )
}
