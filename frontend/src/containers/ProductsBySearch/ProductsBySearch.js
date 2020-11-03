import { Helmet } from 'react-helmet';
import useFetch from '../../hooks/useFetch';
import useQuery from '../../util/getQueryString';

import Card from '../../ui/Card/Card';
import Spinner from '../../ui/Spinner/Spinner';
import ResultsNotFound from '../../ui/ResultsNotFound/ResultsNotFound';
import ErrorNetwork from '../../ui/ErrorNetwork/ErrorNetwork';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import classes from './ProductsBySearch.module.scss';

const ProductsBySearch = () => {
  const searchKeyword = useQuery().get('search');
  const {
    data, isLoading, hasError, errorMessage,
  } = useFetch(
    'byQuery',
    searchKeyword,
  );

  let contentProducts = <Spinner />;
  let helmetData;

  if (!isLoading) {
    if (hasError) {
      contentProducts = <ErrorNetwork error={errorMessage} />;
    } else if (data.items && data.items.length > 0) {
      const contentDescription = data.categories.map(
        (categorie) => `${categorie}, `,
      );
      helmetData = (
        <Helmet>
          <title>{`${searchKeyword} en Mercado Libre Argentina`}</title>
          <meta
            name='description'
            content={`${searchKeyword}, ${contentDescription}`}
          />
        </Helmet>
      );
      contentProducts = data.items.map((prd) => (
        <Card product={prd} key={prd.id} />
      ));
    } else {
      contentProducts = <ResultsNotFound keyword={searchKeyword} />;
    }
  }

  return (
    <>
      {helmetData}
      {data.categories && <Breadcrumb categories={data.categories} />}
      <section className={classes.ProductsBySearch}>{contentProducts}</section>
    </>
  );
};
export default ProductsBySearch;
