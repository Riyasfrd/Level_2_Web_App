import { SocialMediaIcons } from "../../atom"

export const SocialMediaIconsList = ({iconList=[]}) => {
  return (
    <>
        {
            iconList && iconList.map((icon, index) => {
                return (
                    <SocialMediaIcons key={index} iconType={icon}/>
                )
            })
        }
    </>
  )
}
