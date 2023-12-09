import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import styles from '../components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IntegrityAI Contact Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Meet With Our Business Team!" />
        <hr />
        <div className={styles.contentWrapper}>
          <section className={styles.textContent}>
            <h2 className={styles.subHeading}>See How IntegrityAI Can Work For You!</h2>
            <p className={styles.textItem}>
              We're aiming to have institutions in all 50 states partner with IntegrityAI to ensure authenticity in writing. 
            </p>
            <p className={styles.textItem}>
              Fill out this form to discover what IntegrityAI can do for you.
            </p>
            <p className={styles.subHeading}>
              Are you a IntegrityAI user looking for support? 
            </p>
            <p className={styles.textItem}>
              Check out our <a href="https://integrityai.app/#FAQ" target="_blank" rel="noopener noreferrer">FAQ!</a>
            </p>
          </section>
          <div className={styles.formSection}>
            <FeedbackForm />
          </div>
        </div>  
      </main>
      <Footer />
    </div>
  );
}