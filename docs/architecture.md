# Portfolio Architecture

## 1. Overview

This document defines the planned React + Vite architecture for Vivek
Sankpal's portfolio. It is a design plan, not proof that files or
integrations already exist.

## 2. Technology Choices

-   **React:** reusable UI components and section composition.
-   **Vite:** development server and production build.
-   **CSS:** custom styling with a small, consistent design system.
-   **ESLint:** catches common code issues.
-   **Prettier:** consistent formatting.
-   **Testing tools:** choose a maintainable React testing setup during
    implementation.
-   **Git/GitHub:** version control and remote repository.
-   **Formspree:** contact-form delivery, pending setup.
-   **Vercel:** hosting and automatic deployment, pending setup.

## 3. Planned Folder Structure

``` text
vivek-portfolio/
├── public/
│   └── favicon assets and other static files
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── documents/
│   ├── components/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── Button
│   │   ├── SectionHeading
│   │   └── BackToTop
│   ├── sections/
│   │   ├── Home
│   │   ├── About
│   │   ├── Skills
│   │   ├── Projects
│   │   ├── Education
│   │   ├── Certifications
│   │   └── Contact
│   ├── pages/
│   │   ├── Privacy
│   │   └── NotFound
│   ├── styles/
│   │   ├── global styles
│   │   ├── design tokens
│   │   └── responsive styles
│   ├── tests/
│   ├── App.jsx
│   └── main.jsx
├── PRD.md
├── architecture.md
├── design.md
├── README.md
├── tracker.md
├── rules.md
├── memory.md
├── package.json
└── Vite/ESLint configuration files
```

The tree is illustrative. Final filenames and component granularity can
be adjusted during implementation, without changing the approved
requirements.

## 4. Application Composition

-   `main.jsx` mounts the React application and imports global styles.
-   `App.jsx` composes the main page, navigation, seven sections,
    footer, and separate page routes.
-   Reusable UI belongs in `components/`.
-   Main portfolio content sections belong in `sections/`.
-   Privacy and Not Found views belong in `pages/`.
-   Images and the user's supplied resume/certificate assets belong in
    `src/assets/` when imported by React.
-   Shared CSS and design tokens belong in `styles/`.
-   Automated tests belong in `tests/` or adjacent test files, depending
    on the selected test tooling.

## 5. Data and Content Flow

-   Portfolio content should be authored from verified user details.
-   The initial Projects data contains only the Weather Safety App,
    status `In Development`.
-   Links to external projects appear only when the user provides real
    URLs.
-   Resume and certificate references must point to the supplied files.
-   Skill cards display confirmed skill names and recognizable icons; no
    percentage data is needed.
-   Avoid adding a backend solely for this static portfolio unless a
    later requirement justifies it.

## 6. Contact Form Flow

1.  Visitor enters Name, Email, Subject, and Message.
2.  Client-side validation gives immediate accessible feedback.
3.  A honeypot field helps identify automated spam.
4.  Form data is sent to the configured Formspree endpoint.
5.  The UI displays success only after a confirmed successful response;
    otherwise it displays an error and retry guidance.
6.  Formspree's available spam protections are enabled and tested.
7.  The endpoint and provider configuration must not be fabricated or
    reported as configured before setup.

## 7. Routing and Navigation

-   Section navigation scrolls within the main page.
-   Privacy Policy and Not Found are separate page views/routes.
-   Mobile navigation closes after a section is selected.
-   External links open in a new tab with appropriate `rel` attributes.
-   Back-to-Top appears after scrolling and remains keyboard accessible.

## 8. State Management

Keep state local where practical: - Mobile menu open/closed. - Contact
form field values and submission state. - Certificate preview
open/closed. - Back-to-Top visibility based on scroll behavior. Avoid
introducing a global state library unless future needs justify it.

## 9. Testing Architecture

-   Unit/component tests for key components and interactions.
-   Navigation tests for section links and mobile menu.
-   Form validation tests and submission success/error paths.
-   Accessibility-oriented checks plus manual keyboard tests.
-   Production build check.
-   Manual browser/responsive testing.
-   Lighthouse audit after the site is deployable.

## 10. Build, Version Control, and Deployment

-   Verify Node.js, npm, VS Code, and Git on Windows.
-   Use Git commits before significant changes.
-   Run tests and production build after changes.
-   Push to `main` only after checks.
-   Configure GitHub-connected Vercel deployment.
-   Verify each deployment and report only real deployment URLs.
-   Domain `viveksankpal.com` is a preference; availability and DNS
    setup remain unverified.

## 11. Security and Privacy Boundaries

-   Do not commit secrets, credentials, tokens, or private environment
    files.
-   Do not put private credentials in client-side code.
-   Collect only the fields required by the contact form.
-   Describe Formspree data handling accurately in the Privacy page.
-   Do not add analytics/tracking to the initial version.
