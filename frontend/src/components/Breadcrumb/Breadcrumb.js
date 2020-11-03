import classes from './Breadcrumb.module.scss';

const Breadcrumb = (props) => <div className={classes.Breadcrumb}>
    <ul>
      {
        props.categories.map((categorie, i) => <li key={i}>{categorie}</li>)
      }
    </ul>
  </div>;

export default Breadcrumb;
