import { fetchCharacters, fetchCharById, fetchComics } from './api/functions';
import Head from 'next/head';
import Details from '../components/details';

export default function CharacterDetailsPage(props) {
   const { name, description } = props.details;

   return (
      <>
         <Head>
            <title>{name}</title>
            <meta name='description' content={description} />
         </Head>
         <Details
            // image={image}
            name={name}
            description={description}
         />
      </>
   );
}

export async function getStaticPaths() {
   const characters = await fetchCharacters(0);

   return {
      fallback: 'blocking',
      paths: characters.map(character => { return { params: { id: character.id.toString() } }; })
   };
}

export async function getStaticProps(context) {
   const id = context.params.id;
   const character = await fetchCharById(id);
   const { name, description, thumbnail } = character;
   const comics = await fetchComics(id);
   const details = { id, name, description, thumbnail, comics };

   return { props: { details } };
}
