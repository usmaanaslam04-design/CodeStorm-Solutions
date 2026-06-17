import styles from "./EmberGlow.module.css";

export default function EmberGlow() {
  return (
    <div className={styles.emberGlow} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
    </div>
  );
}