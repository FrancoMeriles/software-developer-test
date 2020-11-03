import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from './ui/Layout/Layout';
import Container from './ui/Container/Container';

import Home from './components/Home/Home';
import ProductsBySearch from './containers/ProductsBySearch/ProductsBySearch';
import Product from './containers/Product/Product';
import RouteNotFound from './components/RouteNotFound/RouteNotFound';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Container>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/items' exact component={ProductsBySearch} />
          <Route path='/items/:id' exact component={Product} />
          <Route component={RouteNotFound} />
        </Switch>
      </Container>
    </Layout>
  </BrowserRouter>
);

export default App;
