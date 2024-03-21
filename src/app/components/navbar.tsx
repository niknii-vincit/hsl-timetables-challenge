import styles from "./navbar.module.css";

export default function Navbar() {
   return (
      <nav className={styles.nav}>
         <a href="" title="Helsingin Seudun Liikenne">
            <img src="/hsl-logo.svg" className={styles.logo} />
         </a>
         <a
            href="https://www.hsl.fi/"
            title="Navigate to the HSL journey planner"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
         >
            Travelling
         </a>
         <a href="" className={styles.link}>
            Timetables
         </a>
      </nav>
   );
}
