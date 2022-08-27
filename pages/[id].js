import Head from 'next/head';
import CharacterDetails from '../components/character-details';

export default function CharacterDetailsPage(props) {
   const { name, description } = props.details;

   return (
      <>
         <Head>
            <title>{name}</title>
            <meta name='description' content={description} />
         </Head>
         <CharacterDetails
            // image={image}
            name={name}
            description={description}
         />
      </>
   );
}

export async function getStaticPaths() {
   // fetch chars -> current 30 chars is needed

   return {
      fallback: 'blocking',
      paths: characters.map(character => { return { params: { charId: character.id.toString() } }; })
   };
}

export async function getStaticProps(context) {
   const id = context.params.id;

   // fetch details for that charId

   return {
      props: {
         details: {
            id: id.toString(),
            name,
            // image,
            description
         }
      }
   };
}
