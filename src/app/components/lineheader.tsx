import styles from "./lineheader.module.css";

export default function LineHeader() {
   return (
      <div className={styles.lineHeader}>
         <span className={styles.lineHeaderTxt}>Timetable valid for</span>
         <span className={`${styles.largetxt} ${styles.lineHeaderTxt}`}>
            <strong>01.03.2024 - 31.03.2024</strong>
         </span>
      </div>
   );
}
