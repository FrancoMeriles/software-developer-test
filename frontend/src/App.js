import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './ui/Layout/Layout';
import Container from './ui/Container/Container';

import ProductsBySearch from './containers/ProductsBySearch/ProductsBySearch';
import Product from './containers/Product/Product';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Container>
        <Route path='/items' exact component={ProductsBySearch} />
        <Route path='/items/:id' exact component={Product} />
      </Container>
    </Layout>
  </BrowserRouter>
);

export default App;
