import styles from "./page.module.css";
import { defaultProfile } from "../data/defaultProfile";
import Image from "next/image";
import type { CSSProperties } from "react";

export default function Home() {
  const theme = defaultProfile.theme;

  const themeStyle = {
    "--container-color": theme.containerColor,
    "--border-color": theme.borderColor,
    "--layout-shadow-color": theme.layoutShadowColor,
    "--button-color": theme.buttonColor,
    "--card-color": theme.cardColor,
    "--card-shadow-color": theme.cardShadowColor,
    "--text-outline-color": theme.textOutlineColor,
  } as CSSProperties;

  return (
    <main className={styles.page} style={themeStyle}>
      <div className={styles.layout}>
        <section className={styles.mainContent}>
            <div className={styles.buttonContainer}>
              {defaultProfile.navigation.map((button) => (
                <button key={button.id} className={styles.button} disabled>
                    {button.label}
                </button> ))}
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.profileContainer}>
                    <div className={styles.profilePicture}>
                      {defaultProfile.profile.imageUrl && (
                        <Image src={defaultProfile.profile.imageUrl} alt="Image" width={200} height={200}/>
                      )}
                    </div>

                    <div className={styles.socialLinks}>
                      {defaultProfile.socialLinks.map((link) => (
                          <span key={link.id}>{link.label}</span> )
                      )}
                    </div>
                </div>

                <div className={styles.cardsContainer}>
                  {defaultProfile.cards.map((card, index) => (
                    <div key={card.id} className={ index === 1 ? `${styles.card} ${styles.card2}` : styles.card }>
                      <p>{card.content}</p>
                    </div>))}
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