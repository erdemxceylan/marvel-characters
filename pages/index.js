import { fetchCharacters } from './api/functions';
import Home from '../components/home';

export default function HomePage(props) {
   const { characters } = props;

   return <Home initialCharacters={characters} />;
}

export async function getServerSideProps() {
   const characters = await fetchCharacters(0);

   return { props: { characters: JSON.parse(JSON.stringify(characters)) } };
}