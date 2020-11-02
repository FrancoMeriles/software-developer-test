import Header from '../../components/Header/Header';

const Layout = (props) => <>
    <Header />
    <main>
      { props.children }
    </main>
  </>;

export default Layout;
