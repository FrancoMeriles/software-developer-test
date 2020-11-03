import { useState } from 'react';
import { withRouter } from 'react-router';

import classes from './Search.module.scss';

import icSearch from '../../assets/svg/ic_Search.svg';

const Search = (props) => {
  const [textValue, setTextValue] = useState('');
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (textValue.trim().length > 0) {
      props.history.push(`/items?search=${textValue}`);
    }
  };

  const inputHandler = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className={classes.Form}
      id='search-form'
      role='search'
    >
      <input
        id='searchKeyword'
        aria-label='Ingresa lo que quieras buscar'
        className={classes.Input}
        autoCapitalize='off'
        autoCorrect='off'
        type='text'
        value={textValue}
        onChange={inputHandler}
        placeholder='Nunca dejes de buscar'
      />
      <button type='submit' className={classes.Button} name='Buscar'>
        <img src={icSearch} alt='Buscar' aria-label='Buscar' />
      </button>
    </form>
  );
};

export default withRouter(Search);
