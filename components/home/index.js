import useHttpRequest from '../../hooks/use-http-request';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../global/redux/characters';
import { STRINGS } from '../../global/constants';
import Character from '../character';
import styles from './styles.module.scss';

const { FETCH_CHARS_URL } = STRINGS;

export default function Home() {
   const characters = useSelector(state => state.chars.characters);
   const offset = useSelector(state => state.chars.offset);
   const dispatch = useDispatch();
   const { isLoading, sendRequest: fetchCharacters } = useHttpRequest();

   function clickHandler() {
      fetchCharacters({
         url: FETCH_CHARS_URL,
         method: 'POST',
         body: { offset }
      }, data => data && dispatch(update({ newCharacters: data })));
   }

   return (
      <div className={styles.container}>
         {characters.length > 0 && characters.map(character => <Character key={character.id} config={character} />)}
         {isLoading && <h1>Loading..</h1>}
         <button onClick={clickHandler}>Load more</button>
      </div>
   );
}
