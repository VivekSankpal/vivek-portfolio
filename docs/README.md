# Vivek Sankpal --- Portfolio

> Personal portfolio for Vivek Sankpal, an MCA student and aspiring
> software developer.

## Project Status

Planning and documentation are prepared. Website implementation,
integrations, testing, and deployment are not yet complete.

## Overview

The portfolio will present: - Home and About - Skills - Projects -
Education - Certifications - Contact - Separate Privacy Policy and
custom 404 page

The initial project showcased will be the Weather Safety App, marked
**In Development**.

## Planned Technology Stack

-   React
-   Vite
-   CSS
-   ESLint
-   Prettier
-   Git and GitHub
-   Formspree for contact form delivery (pending configuration)
-   Vercel for hosting (pending configuration)

## Planned Folder Structure

``` text
vivek-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── styles/
│   ├── tests/
│   ├── App.jsx
│   └── main.jsx
├── PRD.md
├── architecture.md
├── design.md
├── README.md
├── tracker.md
├── rules.md
└── memory.md
```

## Windows Setup (Planned Instructions)

1.  Install or update Node.js only if required; use a supported LTS
    version.

2.  Confirm Node.js and npm versions in PowerShell:

    ``` powershell
    node -v
    npm -v
    ```

3.  Confirm Git is available:

    ``` powershell
    git --version
    ```

4.  Open the project folder in VS Code.

5.  After the React + Vite project has been created and its
    `package.json` exists, install dependencies:

    ``` powershell
    npm install
    ```

6.  Start the development server:

    ``` powershell
    npm run dev
    ```

7.  Open the local URL shown in the terminal.

These commands must be checked against the final generated project
scripts; do not run them before the project is initialized.

## Environment Configuration

The portfolio does not require a custom backend in the current plan.
Formspree will be used for contact delivery after setup. - Obtain the
real form endpoint from the user's Formspree account. - Configure it
according to Formspree's current instructions. - Do not invent an
endpoint or claim it is configured before the user completes setup. -
Never commit private credentials, API keys, or private environment files
to Git. - Client-side form endpoints are not secret credentials; follow
provider guidance for secure configuration.

## Contact Information

-   Email: `viveksankpal22@gmail.com`
-   GitHub: https://github.com/VivekSankpal
-   LinkedIn: https://www.linkedin.com/in/vivek-sankpal-13a17b386

## User Assets Needed

-   Profile photo
-   Resume PDF
-   Full Stack .NET Development certificate

These files should be added only after the user supplies them. Do not
invent file paths or placeholder URLs.

## Quality Checklist

-   Responsive desktop/tablet/mobile layouts.
-   Full keyboard accessibility and visible focus states.
-   Reduced-motion support.
-   Working internal navigation and genuine external links.
-   Contact form validation and real Formspree submission test.
-   Automated tests for important interactions.
-   Manual browser and mobile testing.
-   Production build.
-   Lighthouse audits for Performance, Accessibility, Best Practices,
    and SEO.
-   Report only tests and results that have actually been verified.

## Git Workflow

-   Planned repository name: `vivek-portfolio`.
-   Planned initial branch: `main`.
-   Make a Git commit before significant changes.
-   After changes, run tests and production build.
-   Push to `main` after checks.
-   Never commit secrets or private credentials.

## Vercel Deployment (Planned)

1.  Create the GitHub repository.
2.  Push the project to `main`.
3.  Connect the repository to Vercel.
4.  Verify the build settings and production build.
5.  Deploy and check the real deployment URL.
6.  Configure a custom domain only after checking availability and cost.

Preferred domain: `viveksankpal.com`. Its availability, purchase, and
DNS configuration are not yet verified.

## Documentation Language

This README uses Marathi-friendly explanations with English technical
terms in the broader documentation set. The public-facing website
content will remain English-only.
