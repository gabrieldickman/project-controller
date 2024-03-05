import styles from '../modules/Header.module.css'

export default function Header({pageTitle}){

  return(
    <div className={styles.header}>
      <h1>{pageTitle}</h1>
    </div>
  );
}