import LineHeader from "./components/lineheader";
import LineTitle from "./components/linetitle";
import Timetables from "./components/timetables";
import styles from "./page.module.css";

export default function Home() {
   return (
      <main className={styles.main}>
         <h1 className={styles.mainpageTitle}>
            Creating a better commuting experience with a user-friendly public
            transportation registry:{" "}
            <span className={styles.codeEmphasis}>Jore</span>
         </h1>
         <p>
            HSL manages public transport in the Helsinki metropolitan area.
            Jore, HSL’s public transport registry, is a vital piece of the
            puzzle to connect the planning and operation of public transport.
            The Jore registry dates back to the 1970s, which creates issues with
            compatibility and ease of use. Thanks to Vincit, a new and more
            user-friendly version of the Jore registry is being developed that
            will make public transport more reliable.
         </p>
         <h2 className={styles.mainpageSubtitle}>Challenge</h2>
         <p>
            HSL's mission is to provide top-notch public transport. Their
            priorities are ensuring an excellent customer experience, an
            efficient network, foresight and renewal, active cooperation, and
            efficient finances. The Jore registry is essential for HSL’s
            strategy as it functions as the master database that serves multiple
            other operations and functions. For example, Jore transfers data to
            other systems like the HSL app which is widely used by end users for
            journey planning and ticket purchasing. The registry is also used
            for contract management and compensation calculation. The current
            version of Jore dates back to the 1970s. An update of the system,
            called Jore4, was needed to reduce data integrity problems in the
            system, streamline processes, facilitate workflows, and reduce
            errors caused by manual work.
         </p>
      </main>
   );
}
