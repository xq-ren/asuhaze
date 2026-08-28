import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <section className={styles.mainContent}>
          <section className={styles.banner}>
            PICTURE
          </section>

          <section className={styles.intro}>
            TEXT TEXT TEXT
          </section>

          <section className={styles.bottomSection}>
            <div className={styles.character}>
              PICTURE
            </div>

            <div className={styles.text}>
              TEXT TEXT TEXT TEXT
            </div>
          </section>
        </section>

        <aside className={styles.sidebar}>
          <p className={styles.menuTitle}>SIDE MENU</p>

          <nav className={styles.nav}>
            <div className={styles.projectMenu}>
              <Link href="/projects">
                PROJECTS
              </Link>

              <div className={styles.projectDropdown}>
                <Link href="/projects/yoko">YOKO</Link>
                <Link href="/projects/rendar">RENDAR</Link>
              </div>
            </div>

            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </aside>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://github.com/xq-ren"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>

        <a href="#">SOCIALS</a>
      </footer>
    </main>
  );
}