import styles from './styles.module.scss';

export default function Character(props) {
   const { name/*, thumbnail*/ } = props.config;

   return (
      <div className={styles.container}>
         <h4>{name}</h4>
      </div>
   );
}
