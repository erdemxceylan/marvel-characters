import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Details from '../components/details';

export default function CharacterDetailsPage() {
   const router = useRouter();
   const characters = useSelector(state => state.chars.characters);
   const character = characters.find(char => char.id == router.query.id);
   const { name, description } = character;

   return (
      <>
         <Head>
            <title>{name}</title>
            <meta name='description' content={description} />
         </Head>
         <Details config={character} />
      </>
   );
}