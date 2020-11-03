import useFetch from '../../hooks/useFetch';

import getFormattedPrice from '../../util/getFormattedPrice';
import getProductCondition from '../../util/getProductCondition';
import getSoldQuantityText from '../../util/getSoldQuantityText';

import Button from '../../ui/Button/Button';
import NewLineText from '../../ui/NewLineText/NewLineText';
import ErrorNetwork from '../../ui/ErrorNetwork/ErrorNetwork';
import Spinner from '../../ui/Spinner/Spinner';
import classes from './Product.module.scss';

const Product = (props) => {
  const productId = props.match.params.id;
  const {
    data, isLoading, hasError, errorMessage,
  } = useFetch('byId', productId);

  let contentProduct = <Spinner />;

  if (!isLoading) {
    if (hasError) {
      contentProduct = <ErrorNetwork error={errorMessage}/>;
    } else if (Object.keys(data).length) {
      contentProduct = <>
      <div className={classes.Wrapper}>
        <div className={classes.Image}>
          <img src={data.picture} alt={data.title}/>
        </div>
        <div className={classes.Text}>
          <span className={classes.Condition}>{getProductCondition(data.condition)}</span>
          <span className={classes.Qty}>{` - ${data.sold_quantity} ${getSoldQuantityText(data.sold_quantity)}`}</span>
          <h1 className={classes.Title}>{data.title}</h1>
          <div className={classes.Price}>
            <span className={classes.Amount}>{getFormattedPrice(data.price).amount}</span>
            <span className={classes.Decimals}>{getFormattedPrice(data.price).decimals}</span>
          </div>
          <Button text='Comprar' type='Primary'/>
        </div>
      </div>
      <div className={classes.Description}>
        <div className={classes.Content}>
          <span className={classes.TitleDescription}>Descripción del producto</span>
          <NewLineText text={data.description} />
        </div>
      </div>
    </>;
    }
  }

  return (
    <section className={classes.Product}>
      { contentProduct }
    </section>
  );
};

export default Product;
