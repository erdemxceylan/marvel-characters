import Card from '../card';

export default function Details(props) {
   console.log('details comp', props.config);

   const { id, name, description, thumbnail, comics, isLoading } = props.config;
   const { path, extension } = thumbnail;

   return (
      <>
         <div>Details</div>
         <div>{id}</div>
         <div>{name}</div>
         <div>{description}</div>
         <img src={`${path}.${extension}`} />
         {isLoading && <div>Loading..</div>}
         {!isLoading && comics?.map(comic => <Card key={comic.id} config={comic} comic />)}
      </>
   );
}
