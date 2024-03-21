import LineHeader from "./components/lineheader";
import LineTitle from "./components/linetitle";
import Timetables from "./components/timetables";
import styles from "./page.module.css";

export default function Home() {
   return (
      <>
         <LineTitle />
         <main className={styles.main}>
            <LineHeader />
            <Timetables />
         </main>
      </>
   );
}
