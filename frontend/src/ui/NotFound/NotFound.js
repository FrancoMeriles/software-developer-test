import classes from './NotFound.module.scss';

const NotFound = ({ keyword }) => <div className={classes.NotFound}>{`No hay publicaciones que coincidan con tu búsqueda (${keyword}).`}</div>;

export default NotFound;
