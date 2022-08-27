import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const variant = 'portrait_uncanny';  // move to constants

export default function Character(props) {
   const { id, name, thumbnail } = props.config;
   const { path, extension } = thumbnail;
   const router = useRouter();


   return (
      <div className={styles.container} onClick={() => router.push(`/${id}`)}>
         <img src={`${path}/${variant}.${extension}`} />
         <h4>{name}</h4>
      </div>
   );
}
