
export const Button = ({
    buttonTitlte,  //Title of the button(String)
    buttonType,
}) => {
  return (
    <button className={`button ${buttonType}`}>{buttonTitlte}</button>
  )
}
