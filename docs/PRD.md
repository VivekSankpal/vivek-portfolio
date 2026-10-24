# Portfolio Website --- Product Requirements Document (PRD)

## 1. Project Overview

-   **Project:** Personal Portfolio Website
-   **Owner:** Vivek Sankpal
-   **Professional title:** Aspiring Software Developer
-   **Primary goal:** Present skills, education, projects,
    certification, resume, and contact information in a clear,
    professional format suitable for recruiters.
-   **Website language:** English only.
-   **Documentation language:** Marathi with English technical terms.
-   **Status:** Planning finalized; implementation not started.

## 2. Goals

1.  Present an honest, recruiter-ready profile for an MCA student and
    aspiring software developer.
2.  Make skills, education, the Weather Safety App project,
    certification, and contact methods easy to find.
3.  Provide accessible navigation and a responsive experience on
    desktop, tablet, and mobile.
4.  Provide a working contact form after Formspree is configured and
    end-to-end tested.
5.  Deploy through GitHub and Vercel when setup and quality checks are
    complete.

## 3. Target Audience

-   Recruiters and hiring managers.
-   Developers and collaborators reviewing the user's work.
-   Visitors who want to contact the user about opportunities.

## 4. Technology

-   React
-   Vite
-   CSS
-   ESLint and Prettier
-   Git and GitHub
-   Formspree for contact form delivery, pending configuration
-   Vercel for deployment, pending configuration

## 5. Site Structure

Seven main sections: 1. Home 2. About 3. Skills 4. Projects 5. Education
6. Certifications 7. Contact

Separate pages: - Privacy Policy - Custom 404 / Page Not Found

## 6. Functional Requirements

### Home / Hero

-   Show "Hi, I'm Vivek Sankpal".
-   Show the role "Aspiring Software Developer".
-   Use the intro: "Aspiring Software Developer focused on learning,
    problem-solving, and building practical projects."
-   Include "View Projects" and "Contact Me" buttons that navigate to
    their relevant sections.
-   Display a rounded rectangular profile photo with a subtle
    classic-blue frame and light shadow. Use only a photo provided by
    the user.
-   Show small, restrained technology badges for HTML, CSS, JavaScript,
    and React.js.
-   Include "View Resume" and "Download Resume" actions. Link them only
    after the real resume PDF is provided.

### About

-   Write 4--6 sentences covering education, career goal, interests, and
    strengths.
-   Keep the tone clear and honest; do not invent work experience or
    achievements.
-   Include "View Resume" and "Download Resume" actions using the real
    user-provided PDF.

### Skills

-   Use categorized cards: Frontend, Frameworks, Database, Tools.
-   Confirmed skills: HTML, CSS, JavaScript, Bootstrap, React.js,
    Git/GitHub, SQL/MySQL.
-   Use recognizable icons/logos where available.
-   Do not show proficiency percentages, progress bars, or unsupported
    claims of expertise.

### Projects

-   Start with one project: **Weather Safety App**.
-   Status: **In Development**.
-   Describe it as a web app intended to help people make safer
    decisions based on weather information.
-   Use a clean professional placeholder while the project is in
    development; do not invent a screenshot.
-   Do not display GitHub or live-demo buttons until real links exist.
-   Structure the section so more projects can be added later.
-   Lazy-load project imagery when appropriate.

### Education

Display one education card with these confirmed details: - Course:
Master of Computer Applications (MCA) - College: Sant Gajanan Maharaj
College Of Engineering, Mahagaon - University: Shivaji University,
Kolhapur - Status: Currently Pursuing - Do not invent dates, academic
year, marks, or graduation status.

### Certifications

-   Certificate: **Full Stack .NET Development**.
-   The user will provide the certificate file.
-   Show a thumbnail/preview that opens an enlarged view when clicked.
-   Show issuer, date, or credential URL only if present and verifiable
    in the supplied certificate.
-   Do not add a download button unless later requested.

### Contact

-   Contact methods: email, GitHub, LinkedIn, and contact form.
-   Email: `viveksankpal22@gmail.com`
-   GitHub: `https://github.com/VivekSankpal`
-   LinkedIn: `https://www.linkedin.com/in/vivek-sankpal-13a17b386`
-   Make the email clickable using `mailto:` and include a Copy button.
-   Form fields: Name, Email, Subject, Message.
-   Provide accessible required-field validation and inline
    success/error feedback.
-   Planned delivery provider: Formspree, sending to the confirmed email
    address.
-   Use a honeypot field, appropriate server-side validation where
    supported, and Formspree's available spam protection.
-   Do not show success unless the actual submission result confirms
    success.
-   Do not claim the form works until configured and tested end-to-end.

### Navigation and Footer

-   Sticky navbar with Home, About, Skills, Projects, Education,
    Certifications, Contact.
-   Active section indicator: light-blue background and classic-blue
    underline.
-   Mobile hamburger menu below the navbar; close it after selecting a
    section.
-   Full keyboard access, visible focus indicators, and accessible
    labels.
-   Footer text:
    -   `© 2026 Vivek Sankpal. All rights reserved.`
    -   `Built with passion for learning and creating.`
-   Footer includes GitHub, LinkedIn, and Privacy Policy links.
-   External links open in a new tab with safe `rel` attributes;
    internal section links stay in the same tab.
-   Show a floating Back-to-Top button after scrolling.
-   Custom 404 page includes "404", "Page Not Found", and "Back to
    Home".

## 7. Design Requirements

-   Light theme only; white/light-grey surfaces with classic-blue
    accents.
-   Clean, professional, minimal design with generous spacing and
    restrained shadows.
-   Use Inter or Manrope, with consistent type hierarchy.
-   Responsive layout for desktop, tablet, and mobile.
-   Balanced entrance and scroll-reveal animations; respect
    `prefers-reduced-motion`.
-   No custom loading screen.
-   Do not add analytics or visitor-tracking tools in the initial
    version.

## 8. Privacy and Security

-   Create a concise separate Privacy page that accurately explains
    contact-form data collection, intended use, and relevant third-party
    processing by Formspree.
-   Do not invent legal claims or claim compliance without review.
-   Do not collect unnecessary personal information.
-   Never commit API keys, credentials, or private configuration to Git.
-   No secrets are required to be exposed in client-side code; follow
    the provider's setup guidance.

## 9. Quality Requirements

-   Full keyboard accessibility and visible focus states.
-   Semantic HTML, sufficient contrast, accessible form labels, and
    reduced-motion support.
-   Test modern Chrome, Edge, Firefox, and Safari where available.
-   Run automated tests for key UI interactions, navigation, form
    validation, and related behavior.
-   Perform manual desktop/mobile checks.
-   Verify production build.
-   Run Lighthouse audits for Performance, Accessibility, Best
    Practices, and SEO.
-   Aim for 90+ scores where practical; this is a target, not a
    guarantee.
-   Do not report tests or scores as passing until actually run.

## 10. SEO

-   Title: `Vivek Sankpal — Aspiring Software Developer`
-   Basic meta description, Open Graph/social-sharing metadata, semantic
    HTML, and favicon.
-   Favicon and navbar brand use a minimalist classic-blue "V" icon.
-   Do not claim SEO or social previews are verified until tested after
    deployment.

## 11. Repository and Deployment Plan

-   Planned repository name: `vivek-portfolio`
-   Planned visibility: Public
-   Initial branch: `main`
-   GitHub push to `main` should trigger Vercel automatic deployment
    after integration is configured.
-   Custom domain preference: `viveksankpal.com`; availability, cost,
    and DNS setup must be checked later.
-   Verify Node.js, npm, VS Code, and Git on Windows before setup;
    install/update only if needed.

## 12. User-Provided Assets Required

-   Profile photo.
-   Resume PDF.
-   Full Stack .NET Development certificate file.
-   Actual Weather Safety App repository/demo links later, once they
    exist.

## 13. Acceptance Criteria

-   All seven main sections and separate Privacy/404 pages are present.
-   Profile content and education are accurate and do not invent facts.
-   Skills use names/icons without percentages or progress bars.
-   Weather Safety App is labelled In Development and has no fabricated
    links or screenshots.
-   Resume and certificate use only user-provided files.
-   Contact form is configured and verified end-to-end before being
    described as working.
-   Keyboard navigation, mobile layout, links, tests, and production
    build are checked.
-   Deployment URL and custom domain are reported only after actual
    verification.
