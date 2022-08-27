import Card from '../card';
import styles from './styles.module.scss';

export default function Details(props) {
   const { name, description, thumbnail, comics, isLoading } = props.config;
   const { path, extension } = thumbnail;

   console.log('details comp', props.config);

   return (
      <div className={styles.container}>
         <img src={`${path}.${extension}`} />
         <div className={styles.group}>
            <h2>{name}</h2>
            <div>{description}</div>
            {isLoading && <div>Loading..</div>}
            {!isLoading && comics?.map(comic => <Card key={comic.id} config={comic} comic />)}
         </div>
      </div>
   );
}
