import styles from './styles.module.scss';
import Header from '../components/header';

export default function Layout(props) {
   return (
      <>
         <Header />
         <div className={styles.container}>
            {props.children}
         </div>
      </>
   );
}
