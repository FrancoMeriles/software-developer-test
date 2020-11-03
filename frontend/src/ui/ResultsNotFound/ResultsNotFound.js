import classes from './ResultsNotFound.module.scss';

const ResultsNotFound = ({ keyword }) => <div className={classes.ResultsNotFound}>{`No hay publicaciones que coincidan con tu búsqueda (${keyword}).`}</div>;

export default ResultsNotFound;
