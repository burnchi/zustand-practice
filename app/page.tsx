import Counter from "./Counter";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Counter />
    </main>
  );
}
