import styles from "../NavItems/NavItems.module.css"

export default function NavItems() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn}>Home</button>
      <button className={styles.btn}>Attorneys</button>
      <button className={styles.btn}>Practice Areas</button>
      <button className={styles.btn}>About Us</button>
    </div>
  )
}
