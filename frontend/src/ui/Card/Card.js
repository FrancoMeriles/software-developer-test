import { Link } from 'react-router-dom';
import getFormattedPrice from '../../util/getFormattedPrice';

import ic_shipping from '../../assets/img/ic_shipping.png';
import classes from './Card.module.scss';

const Card = ({ product }) => {
  const {
    id, title, price, free_shipping, picture,
  } = product;
  return (
    <div className={classes.Card}>
      <Link to={`/items/${id}`} className={classes.Wrapper} title={title}>
        <div className={classes.Image}>
          <img src={picture} alt={title} />
        </div>
        <div className={classes.Content}>
          <span className={classes.Price}>{getFormattedPrice(price).amount}</span>
          { free_shipping && <img className={classes.Icon} src={ic_shipping} alt='free shipping'/> }
          <h2 className={classes.Title}>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
