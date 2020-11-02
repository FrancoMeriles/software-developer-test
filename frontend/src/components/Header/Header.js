import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import classes from './Header.module.scss';
import logo from '../../assets/img/Logo_ML.png';
import Container from '../../ui/Container/Container';
import Search from '../../containers/Search/Search';

const Header = () => (
    <header className={classes.Header}>
      <nav>
        <Container>
          <div className={classes.Content}>
            <Link to='/'>
              <img
                className={classes.BrandLogo}
                src={logo}
                alt='Mercado Libre'
              />
            </Link>
            <Search />
          </div>
        </Container>
      </nav>
    </header>
);

export default withRouter(Header);
