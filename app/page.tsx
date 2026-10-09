import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.mainContent}>
            <div className={styles.buttonContainer}>
                <button className={styles.button} disabled>Button</button>
                <button className={styles.button} disabled>Button</button>
                <button className={styles.button} disabled>Button</button>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.profileContainer}>
                    <div className={styles.profilePicture}>
                        {/* Add image here later */}

                    </div>
                    <div className={styles.socialLinks}>
                        {/* Add href here later */}
                            <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                    </div>
                </div>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}></div>
                    <div className={`${styles.card} ${styles.card2}`}></div>
                </div>
            </div>
        </section>
      </div>
      <footer className={styles.footer}>
          <p>2026 asuhaze. Third-party assets belong to their respective owners.</p>
      </footer>
    </main>
  );
}