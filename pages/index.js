import { fetchCharacters } from './api/utils/functions';
import Home from '../components/home';
// import Card from '../components/card';

export default function HomePage(props) {
   const { characters } = props;

   // return <Card config={{ id: 1, title: 'Erdem', description: 'Erdem Ceylan', thumbnail: { path: 'hi', extension: 'jpg' } }} comic />;
   // return <Card config={{ id: 1, name: 'Erdem', description: 'Erdem Ceylan', thumbnail: { path: 'hi', extension: 'jpg' } }} />;

   return <Home initialCharacters={characters} />;
}

export async function getStaticProps() {
   const characters = await fetchCharacters(0);

   return { props: { characters } };
}