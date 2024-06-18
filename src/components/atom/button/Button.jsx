import PropTypes from 'prop-types';

export const Button = ({
    buttonTitle,  //Title of the button(String)
    buttonType = 'button__primary',
}) => {

  
  return (
    <button className={`button ${buttonType}`}>
      {buttonTitle}
    </button>
  )
}

Button.propTypes = {
    /**
     * Title of the button
     */
    buttonTitle: PropTypes.string,
    /**
     * Type of the button primary | secondary
     */
    buttonType: PropTypes.oneOf(['button__primary', 'button__secondary']),
};

Button.defaultProps = {
    buttonTitle: 'Button',
    buttonType: 'button__primary',
};