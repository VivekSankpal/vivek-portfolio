import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import heroImage from "./assets/hero.png";
import "./App.css";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header className="navbar">
              <a className="brand" href="#home" aria-label="Vivek Sankpal home">
                <span className="brand-mark">V</span>
                <span>Vivek Sankpal</span>
              </a>

              <button
                className="menu-toggle"
                type="button"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "✕" : "☰"}
              </button>

              <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </header>

            <main>
              <section className="hero-section" id="home">
                <div className="hero-content">
                  <p className="eyebrow">
                    <span className="status-dot" />
                    Welcome to my portfolio
                  </p>

                  <h1>
                    Hi, I’m <span>Vivek Sankpal</span>
                  </h1>

                  <h2>Aspiring Software Developer</h2>

                  <p className="hero-description">
                    Aspiring Software Developer focused on learning,
                    problem-solving, and building practical projects.
                  </p>

                  <div className="hero-actions resume-actions">
                    <button
                      className="button button-secondary"
                      type="button"
                      onClick={() => alert("Please add your resume PDF first.")}
                    >
                      View Resume
                    </button>

                    <button
                      className="button button-secondary"
                      type="button"
                      onClick={() => alert("Please add your resume PDF first.")}
                    >
                      Download Resume
                    </button>
                  </div>

                  <div className="hero-tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                  </div>
                </div>

                <div className="hero-visual">
                  <div className="photo-frame">
                    <img
                      src={heroImage}
                      alt="Vivek Sankpal profile"
                      className="profile-photo"
                    />
                  </div>
                  <span className="floating-badge badge-html">HTML</span>
                  <span className="floating-badge badge-css">CSS</span>
                  <span className="floating-badge badge-react">React.js</span>
                </div>
              </section>
              <section className="content-section" id="about">
                <p className="section-label">GET TO KNOW ME</p>
                <h2>About Me</h2>

                <div className="about-layout">
                  <div className="about-text">
                    <h3>Aspiring Software Developer</h3>

                    <p>
                      I’m an MCA student passionate about software development
                      and learning modern technologies. I enjoy exploring new
                      concepts, solving problems, and building practical
                      projects that help me improve my technical skills.
                    </p>

                    <p>
                      My current focus is on web development, writing clean
                      code, and strengthening my understanding of frontend
                      technologies and databases through hands-on practice.
                    </p>
                  </div>

                  <div className="about-strengths">
                    <article className="simple-card">
                      <h3>Quick Learner</h3>
                      <p>Always ready to learn new tools and technologies.</p>
                    </article>

                    <article className="simple-card">
                      <h3>Problem-Solving</h3>
                      <p>Enjoy breaking challenges into manageable steps.</p>
                    </article>

                    <article className="simple-card">
                      <h3>Consistency</h3>
                      <p>
                        Focused on regular practice and continuous improvement.
                      </p>
                    </article>

                    <article className="simple-card">
                      <h3>Teamwork</h3>
                      <p>
                        Value collaboration, communication, and shared learning.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section className="content-section" id="skills">
                <p className="section-label">WHAT I WORK WITH</p>
                <h2>Skills & Technologies</h2>
                <p>
                  Technologies and tools I’m learning and using in my projects.
                </p>

                <div className="skills-categories">
                  <article className="simple-card skill-category">
                    <h3>Frontend Development</h3>
                    <div className="skill-tags">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                      <span>Bootstrap</span>
                    </div>
                  </article>

                  <article className="simple-card skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skill-tags">
                      <span>React.js</span>
                    </div>
                  </article>

                  <article className="simple-card skill-category">
                    <h3>Database</h3>
                    <div className="skill-tags">
                      <span>SQL</span>
                      <span>MySQL</span>
                    </div>
                  </article>

                  <article className="simple-card skill-category">
                    <h3>Tools & Version Control</h3>
                    <div className="skill-tags">
                      <span>Git</span>
                      <span>GitHub</span>
                      <span>VS Code</span>
                    </div>
                  </article>
                </div>
              </section>
              <section className="content-section" id="projects">
                <p className="section-label">SELECTED WORK</p>
                <h2>Featured Project</h2>
                <p>
                  A look at a project I’m currently developing and learning
                  from.
                </p>

                <article className="project-card featured-project">
                  <div className="project-preview">
                    <div className="weather-preview-top">
                      <span className="weather-preview-logo">W</span>
                      <span className="weather-preview-label">WEATHERWISE</span>
                    </div>

                    <div className="weather-preview-content">
                      <span className="weather-symbol" aria-hidden="true">
                        ☁
                      </span>
                      <h3>Weather Safety</h3>
                      <p>Weather insights & safety recommendations</p>
                      <div className="weather-preview-bars">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <span className="weather-preview-status">
                      PROJECT PREVIEW
                    </span>
                  </div>

                  <div className="project-details">
                    <span className="project-status">In Development</span>
                    <h3>Weather Safety App</h3>

                    <p>
                      A web application project focused on weather monitoring
                      and helping users make informed safety decisions using
                      weather information.
                    </p>

                    <div className="project-tech">
                      <span>React</span>
                      <span>Weather Data</span>
                      <span>Safety Recommendations</span>
                    </div>

                    <p className="project-note">
                      Currently in development. More features will be added as
                      the project progresses.
                    </p>
                  </div>
                </article>
              </section>
              <section className="content-section" id="education">
                <p className="section-label">MY LEARNING JOURNEY</p>
                <h2>Education</h2>
                <article className="simple-card">
                  <h3>Master of Computer Applications (MCA)</h3>
                  <p>Sant Gajanan Maharaj College Of Engineering, Mahagaon</p>
                  <p>Shivaji University, Kolhapur</p>
                  <span className="project-status">Currently Pursuing</span>
                </article>
              </section>
              <section className="content-section" id="certifications">
                <p className="section-label">COURSES & LEARNING</p>
                <h2>Certifications</h2>
                <article className="simple-card">
                  <h3>Full Stack .NET Development</h3>
                  <p>
                    Certificate preview will be added when the certificate file
                    is provided.
                  </p>
                </article>
              </section>

              <section className="content-section contact-section" id="contact">
                <p className="section-label">LET’S CONNECT</p>
                <h2>Contact Me</h2>
                <p>Have a question or want to connect? Send me a message.</p>

                <div className="contact-layout">
                  <div className="contact-info">
                    <h3>Let’s talk about your ideas</h3>
                    <p>
                      I’m open to connecting with fellow learners, developers,
                      and people interested in technology.
                    </p>

                    <a href="mailto:viveksankpal22@gmail.com">
                      ✉️ viveksankpal22@gmail.com
                    </a>

                    <a
                      href="https://github.com/VivekSankpal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="https://www.linkedin.com/in/vivek-sankpal-13a17b386"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                  <form
                    className="contact-form"
                    onSubmit={async (event) => {
                      event.preventDefault();
                      setIsSubmitting(true);
                      setContactStatus("");

                      try {
                        const form = event.currentTarget;
                        const response = await fetch(
                          "https://formspree.io/f/xkjjnawe",
                          {
                            method: "POST",
                            body: new FormData(form),
                            headers: {
                              Accept: "application/json",
                            },
                          },
                        );

                        if (response.ok) {
                          form.reset();
                          setContactStatus(
                            "success:Thank you! Your message has been sent successfully.",
                          );
                        } else {
                          setContactStatus(
                            "error:Sorry, your message could not be sent. Please try again.",
                          );
                        }
                      } catch {
                        setContactStatus(
                          "error:Network error. Please check your internet and try again.",
                        );
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="form-field">
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="What would you like to discuss?"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        placeholder="Write your message..."
                        required
                      />
                    </div>

                    <button
                      className="button button-primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </button>

                    {contactStatus && (
                      <p
                        className="form-note"
                        role="status"
                        aria-live="polite"
                        style={{
                          color: contactStatus.startsWith("success:")
                            ? "#15803d"
                            : "#b91c1c",
                        }}
                      >
                        {contactStatus.substring(
                          contactStatus.indexOf(":") + 1,
                        )}
                      </p>
                    )}
                  </form>
                </div>
              </section>
            </main>
            {showBackToTop && (
              <button
                type="button"
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Back to top"
                title="Back to top"
              >
                ↑
              </button>
            )}
            <footer className="site-footer">...</footer>
          </>
        }
      />

      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
