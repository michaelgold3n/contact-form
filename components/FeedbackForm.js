import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" className={styles['form-field']} type="text" name="full-name" required />

        <label htmlFor="company-name">Company Name</label>
        <input id="company-name" className={styles['form-field']} type="text" name="company-name" required />

        <label htmlFor="company-email">Business Email</label>
        <input id="company-email" className={styles['form-field']} type="text" name="company-email" required/>

        <label htmlFor="phone-number">Phone Number</label>
        <input id="phone-number" className={styles['form-field']} type="text" name="phone-number" required/>

        <label htmlFor="job-title">Role/Position</label>
        <input id="job-title" className={styles['form-field']} type="text" name="job-title" required/>

        <label htmlFor="how-did-you-hear">How Did You Hear About Us?</label>
        <select id="how-did-you-hear" className={styles['form-field']} type="dropdown" name="how-did-you-hear" required>
            <option value="search-engine">Search Engine</option>
            <option value="friend">Recommended by a friend or colleague</option>
            <option value="social-media">Social Media</option>
            <option value="blog">Blog or Publication</option>
            <option value="other">Other</option>
        </select>

        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
