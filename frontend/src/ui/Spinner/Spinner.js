import classes from './Spinner.module.scss';

const Spinner = () => (
  <div className={classes.LoaderContainer}>
    <div className={classes.Loader}></div>
  </div>
);

export default Spinner;
