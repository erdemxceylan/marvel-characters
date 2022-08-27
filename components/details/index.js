export default function Details(props) {
   console.log('details comp', props.config);

   const { id, name, description, /*thumbnail, comics, isLoading */ } = props.config;

   return (
      <>
         <div>Details</div>
         <div>{id}</div>
         <div>{name}</div>
         <div>{description}</div>
         {/* <div>{thumbnail}</div> */}
         {/* <div>{comics}</div> */}
      </>
   );
}
