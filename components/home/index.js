import { useEffect, useState } from 'react';
import useHttpRequest from '../../hooks/use-http-request';
import { STRINGS } from '../../global/constants';
import Character from '../character';
import styles from './styles.module.scss';

const { FETCH_CHARS_URL } = STRINGS;

export default function Home() {
   const [characters, setCharacters] = useState([]);
   const { isLoading, sendRequest: fetchCharacters } = useHttpRequest();

   useEffect(() => {
      fetchCharacters({ url: FETCH_CHARS_URL }, data => data && setCharacters(data));
   }, []);

   if (isLoading) {
      return <h1>Loading..</h1>;
   }

   return (
      <div className={styles.container}>
         {characters.map(character => <Character key={character.id} config={character} />)}
      </div>
   );
}
