import { useEffect, useState } from 'react';
import useHttpRequest from '../../hooks/use-http-request';
import { STRINGS } from '../../global/constants';
import Character from '../character';

const { FETCH_CHARS_URL } = STRINGS;

export default function Home() {
   const [characters, setCharacters] = useState([]);
   const { sendRequest: fetchCharacters } = useHttpRequest();

   useEffect(() => {
      fetchCharacters({ url: FETCH_CHARS_URL }, data => data && setCharacters(data));
   }, []);

   return (
      <>
         {characters.map(character => <Character key={character.id} config={character} />)}
      </>
   );
}
