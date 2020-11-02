import classes from './Button.module.scss';

const Button = (props) => (
    <button className={`${classes.Button} ${classes[props.type]}`}>
      {props.text}
    </button>
);

export default Button;
