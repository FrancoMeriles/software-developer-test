import { useState, useEffect } from 'react';
import { getItemById, getItemsBySearch } from '../axios/meli.service';

const useFetch = (type, options) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response;
        if (type === 'byQuery') {
          response = await getItemsBySearch(options);
          setData(response);
        } else if (type === 'byId') {
          response = await getItemById(options);
          setData(response.item);
        }
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [type, options]);

  return {
    data, isLoading, hasError, errorMessage,
  };
};

export default useFetch;
