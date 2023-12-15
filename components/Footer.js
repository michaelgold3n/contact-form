import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="integrityAiLogo.svg" alt="does this change?" className={styles.logo} />
      </footer>
    </>
  )
}
