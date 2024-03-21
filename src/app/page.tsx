import LineTitle from "./components/linetitle";
import styles from "./page.module.css";

export default function Home() {
   return (
      <>
         <LineTitle />
         <main className={styles.main}></main>
      </>
   );
}
