import { useEffect, useState } from 'react';
import useHttpRequest from '../../hooks/use-http-request';
import { STRINGS } from '../../global/constants';

const { FETCH_CHARS_URL } = STRINGS;

export default function Home() {
   const [characters, setCharacters] = useState([]);
   const { sendRequest: fetchCharacters } = useHttpRequest();

   useEffect(() => {
      fetchCharacters({ url: FETCH_CHARS_URL }, data => data && setCharacters(data));
   }, []);

   return (
      <>
         {characters.map(character => (
            <div key={character.id}>
               <h4>{character.name}</h4>
               <p>{character.description}</p>
            </div>
         ))}
      </>
   );
}
