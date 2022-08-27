import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CONSTANTS } from '../global/constants';
import useHttpRequest from '../hooks/use-http-request';
import Head from 'next/head';
import Details from '../components/details';

const { FETCH_COMICS_URL } = CONSTANTS;

export default function CharacterDetailsPage() {
   const router = useRouter();
   const id = router.query.id;
   const characters = useSelector(state => state.chars.characters);
   const character = characters.find(char => char.id == id);
   const { name, description } = character;
   const [comics, setComics] = useState(null);
   const { isLoading, sendRequest: fetchComics } = useHttpRequest();

   useEffect(() => {
      fetchComics({
         url: FETCH_COMICS_URL,
         method: 'POST',
         body: { id }
      }, data => data && setComics(data));
   }, []);

   return (
      <>
         <Head>
            <title>{name}</title>
            <meta name='description' content={description} />
         </Head>
         <Details config={{ ...character, comics, isLoading }} />
      </>
   );
}