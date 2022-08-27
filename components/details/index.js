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
         {!isLoading && comics?.map(comic => (
            <div key={comic.id}>
               <h4>{comic.title}</h4>
               <p>{comic.description}</p>
               <a href={comic.link}>link</a>
            </div>
         ))}
      </>
   );
}
