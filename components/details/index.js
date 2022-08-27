import Card from '../card';
import styles from './styles.module.scss';

export default function Details(props) {
   const { name, description, thumbnail, comics, isLoading } = props.config;
   const { path, extension } = thumbnail;
   const imageURL = `${path}.${extension}`;

   return (
      <div className={styles.container}>
         <h1>{name}</h1>
         {description && <h3>{description}</h3>}
         <div className={styles.group}>
            <img src={imageURL} onClick={() => window.open(imageURL, '_blank')} />
            <div className={styles['sub-group']}>
               <h2>Comics</h2>
               {isLoading && <div>Loading..</div>}
               {!isLoading && comics?.map(comic => <Card key={comic.id} config={comic} comic />)}
            </div>
         </div>
      </div>
   );
}
