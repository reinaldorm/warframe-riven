import Riven from "@/components/Riven";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Insert the weapon's name</h1>
      <Riven />
    </main>
  );
}
