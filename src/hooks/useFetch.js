import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

export default function useFetch() {
  const url = 'https://random-data-api.com/api/users/random_user?size=20';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url);
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch]);
  return {data, loading};
}
