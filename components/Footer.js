import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="contact-form/public/integrityAiLogo.svg" alt="IntegrityAI Logo" className={styles.logo} />
      </footer>
    </>
  )
}
