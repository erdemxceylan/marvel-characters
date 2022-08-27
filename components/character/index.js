import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export default function Character(props) {
   const { id, name/*, thumbnail*/ } = props.config;
   const router = useRouter();

   return (
      <div className={styles.container} onClick={() => router.push(`/${id}`)}>
         <h4>{name}</h4>
      </div>
   );
}
