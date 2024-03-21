import styles from "./timetables.module.css";
import { promises } from "fs";

export default async function LineTitle() {
   const stops = await promises.readFile(
      process.cwd() + "/src/app/stops.json",
      "utf8",
   );
   return (
      <div style={{ border: "1px blue solid" }}>
         <span>Pysäkki</span> <span>Lähdöt</span>
         {stops}
      </div>
   );
}
