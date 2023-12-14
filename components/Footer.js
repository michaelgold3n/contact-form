import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/public/integrityAiLogo.svg" alt="IntegrityAI Logo" className={styles.logo} />
      </footer>
    </>
  )
}
