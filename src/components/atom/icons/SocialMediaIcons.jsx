/* eslint-disable jsx-a11y/anchor-is-valid */

export const SocialMediaIcons = ({
    iconType,  //w | instragram | deviantrat | twitter | soundcloud | linkdin | m | facebook | paypol | play | codepen | pinterest
}) => {
  return (
    <>
        <a href="" className={`icon__social icon__social--${iconType}`}>{iconType}</a> 
    </>
  )
}
