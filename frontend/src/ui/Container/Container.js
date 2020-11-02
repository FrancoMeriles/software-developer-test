import { forwardRef } from 'react';
import classes from './Container.module.scss';

const Container = forwardRef((props, ref) => (
  <div ref={ref} className={classes.container}>
    { props.children }
  </div>
));

export default Container;
