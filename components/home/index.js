import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../global/redux/characters';
import { CONSTANTS } from '../../global/constants';
import useHttpRequest from '../../hooks/use-http-request';
import Character from '../character';
import styles from './styles.module.scss';

const { FETCH_CHARS_URL } = CONSTANTS;

export default function Home(props) {
   const { initialCharacters } = props;
   const characters = useSelector(state => state.chars.characters);
   const isEmpty = useSelector(state => state.chars.isEmpty);
   const offset = useSelector(state => state.chars.offset);
   const dispatch = useDispatch();
   const { isLoading, sendRequest: fetchCharacters } = useHttpRequest();

   useEffect(() => {
      isEmpty && dispatch(update({ newCharacters: initialCharacters }));
   }, []);

   function clickHandler() {
      fetchCharacters({
         url: FETCH_CHARS_URL,
         method: 'POST',
         body: { offset }
      }, data => data && dispatch(update({ newCharacters: data })));
   }

   return (
      <div className={styles.container}>
         {!isEmpty && characters.map(character => <Character key={character.id} config={character} />)}
         {isLoading && <h1>Loading..</h1>}
         <button onClick={clickHandler}>Load more</button>
      </div>
   );
}
