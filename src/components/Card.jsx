import styles from '../modules/Card.module.css'

export default function Card ({cardTitle, valor}){
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>{cardTitle}</p>
      <p className={styles.card_valor}>{valor}</p>
    </div>
  );
}