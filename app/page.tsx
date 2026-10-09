import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.mainContent}>

        <div className={styles.buttonContainer}>
        <button className={styles.button}>T/B/L</button>
        <button className={styles.button}>T/B/L</button>
        <button className={styles.button}>T/B/L</button>
        </div>

        <div className={styles.profileContainer}>
        {/* pic and links */}
        </div>

        <div className={styles.cardsContainer}>
        <div className={styles.card}>Card 1</div>
        <div className={`${styles.card} ${styles.card2}`}>Card 2</div>
        </div>

        </section>
      </div>

      <footer className={styles.footer}>

      </footer>
    </main>
  );
}