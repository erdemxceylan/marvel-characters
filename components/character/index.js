import styles from './styles.module.scss';

export default function Character(props) {
   const { config } = props;
   const { name/*, thumbnail*/ } = config;

   return (
      <div className={styles.container}>
         <h4>{name}</h4>
      </div>
   );
}
