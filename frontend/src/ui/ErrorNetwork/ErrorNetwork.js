import classes from './ErrorNetwork.module.scss';

const ErrorNetwork = ({ error }) => (
  <div className={classes.ErrorNetwork}>
    <b>{error}</b>
    <p>Lo sentimos hubo un error al intentar acceder al backend.</p>
    <p>- El servicio del backend se encuentra disponible ?</p>
  </div>
);

export default ErrorNetwork;
