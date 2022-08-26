import { useEffect, useState } from 'react';
// import useHttpRequest from '../../hooks/use-http-request';
import axios from 'axios';
import { STRINGS } from '../../global/constants';
import Character from '../character';
import styles from './styles.module.scss';

const { FETCH_CHARS_URL } = STRINGS;

export default function Home() {
   const [characters, setCharacters] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   // const { isLoading, sendRequest: fetchCharacters } = useHttpRequest();

   async function fetchCharacters() {
      setIsLoading(true);
      const response = await axios.post(FETCH_CHARS_URL, { offset: 5 });
      const data = response.data;
      data && setCharacters(data);
      setIsLoading(false);
   }

   // let response;

   useEffect(() => {
      // fetchCharacters({ url: FETCH_CHARS_URL }, data => data && setCharacters(data));
      fetchCharacters();
   }, []);

   if (isLoading) {
      return <h1>Loading..</h1>;
   }

   return (
      <div className={styles.container}>
         {characters.length > 0 && characters.map(character => <Character key={character.id} config={character} />)}
      </div>
   );
}
