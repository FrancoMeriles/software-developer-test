import { useState, useEffect } from 'react';

import { getItemById } from '../../axios/meli.service';

import getFormattedPrice from '../../util/getFormattedPrice';
import getProductCondition from '../../util/getProductCondition';
import Button from '../../ui/Button/Button';
import NewLineText from '../../ui/NewLineText/NewLineText';
import Spinner from '../../ui/Spinner/Spinner';
import classes from './Product.module.scss';

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const productId = props.match.params.id;

  useEffect(() => {
    setLoading(true);
    const getProductInfo = async () => {
      const productData = await getItemById(productId);
      setProduct(productData.item);
      setLoading(false);
    };

    getProductInfo();
  }, [productId]);

  return (
    <section className={classes.Product}>
      {
        loading ? <Spinner /> : <>
        <div className={classes.Wrapper}>
          <div className={classes.Image}>
            <img src={product.picture} alt={product.title}/>
          </div>
          <div className={classes.Text}>
            <span className={classes.Condition}>{getProductCondition(product.condition)}</span>
            <h1 className={classes.Title}>{product.title}</h1>
            <div className={classes.Price}>
              <span className={classes.Amount}>{getFormattedPrice(product.price).amount}</span>
              <span className={classes.Decimals}>{getFormattedPrice(product.price).decimals}</span>
            </div>
            <Button text='Comprar' type='Primary'/>
          </div>
        </div>
        <div className={classes.Description}>
          <div className={classes.Content}>
            <span className={classes.TitleDescription}>Descripción del producto</span>
            <NewLineText text={product.description} />
          </div>
        </div>
      </>
      }
    </section>
  );
};

export default Product;
