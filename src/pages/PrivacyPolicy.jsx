import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <main className="content-section privacy-page">
      <p className="section-label">WEBSITE INFORMATION</p>
      <h1>Privacy Policy</h1>

      <p>
        This website is a personal portfolio created by Vivek Sankpal to
        showcase projects, skills, and educational information.
      </p>

      <h2>Information You Provide</h2>
      <p>
        If you use the contact form, the information you submit, such as your
        name, email address, subject, and message, is processed through
        Formspree to deliver your submission.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The contact form uses Formspree. Information submitted through the form
        may be processed according to Formspree’s own privacy policy and service
        terms.
      </p>

      <h2>Analytics and Tracking</h2>
      <p>
        This website does not intentionally add analytics or advertising
        trackers as part of the current implementation.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy-related questions, contact{" "}
        <a href="mailto:viveksankpal22@gmail.com">viveksankpal22@gmail.com</a>.
      </p>

      <p className="privacy-updated">Last updated: October 2026</p>

      <Link className="button button-primary" to="/">
        Back to Home
      </Link>
    </main>
  );
}

export default PrivacyPolicy;
