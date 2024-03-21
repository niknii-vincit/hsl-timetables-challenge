import styles from "./linetitle.module.css";

export default function LineTitle() {
   return (
      <div className={styles.titlebg}>
         <img src="bus-icon.svg" className={styles.busicon} />
         <h1 className={styles.title}>Line 641</h1>
      </div>
   );
}
