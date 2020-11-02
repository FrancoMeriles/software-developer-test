import { useEffect, useState } from 'react';
import useQuery from '../../util/getQueryString';
import { getItemsBySearch } from '../../axios/meli.service';

import Card from '../../ui/Card/Card';
import Spinner from '../../ui/Spinner/Spinner';
import classes from './ProductsBySearch.module.scss';

const ProductsBySearch = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchKeyword = useQuery().get('search');

  useEffect(() => {
    setLoading(true);
    const getTournamentData = async () => {
      const data = await getItemsBySearch(searchKeyword);
      setProducts(data.items);
      setLoading(false);
    };
    getTournamentData();
  }, [searchKeyword]);

  let contentProducts = <Spinner />;

  if (!loading) {
    contentProducts = products.map((prd) => <Card product={prd} key={prd.id} />);
  }

  return <section className={classes.ProductsBySearch}>
    { contentProducts }
  </section>;
};
export default ProductsBySearch;
