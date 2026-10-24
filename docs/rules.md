# Portfolio Project Rules

## 1. Scope and Truthfulness

-   Follow the approved PRD and design plan.
-   Do not add unrelated features without asking the user.
-   Do not invent employment history, achievements, academic dates,
    marks, certificate issuer/date, or project capabilities.
-   Public-facing website copy must be English-only.
-   Documentation can use Marathi with English technical terms.
-   The user is an MCA student and fresher; keep claims accurate and
    modest.
-   Weather Safety App must remain marked `In Development` until its
    status changes truthfully.

## 2. Technology and Structure

-   Use React + Vite + CSS.
-   Keep the folder structure organized: `components`, `sections`,
    `pages`, `assets`, `styles`, and `tests`.
-   Use reusable components where that improves maintainability.
-   Use ESLint for code issues and Prettier for formatting.
-   Keep dependencies appropriate for a beginner-maintainable portfolio.

## 3. Design

-   Light theme only.
-   Classic-blue accents, clean white/light-grey surfaces, restrained
    shadows.
-   Avoid excessive neon, unnecessary 3D, and distracting effects.
-   Use responsive layouts and consistent spacing/type hierarchy.
-   Respect `prefers-reduced-motion`.
-   No custom loading screen.

## 4. Accessibility

-   Use semantic HTML.
-   Support full keyboard navigation.
-   Provide visible focus indicators.
-   Label form fields properly.
-   Use accessible names for icon-only controls.
-   Provide useful alt text for meaningful images.
-   Keep sufficient contrast and touch-friendly controls.
-   Test before claiming accessibility compliance.

## 5. Content and Assets

-   Use only the profile photo, resume PDF, and certificate supplied by
    the user.
-   Do not fabricate project screenshots or preview images.
-   Do not show GitHub/live-demo buttons without real URLs.
-   Do not invent skill percentages or progress bars.
-   Show certificate issuer/date/credential link only if supported by
    the actual certificate.
-   Lazy-load below-the-fold images where appropriate.

## 6. Links and Privacy

-   External links open in a new tab with safe `rel` attributes where
    appropriate.
-   Internal section navigation stays in the same tab.
-   Do not add analytics/tracking in the initial version.
-   Privacy page must accurately describe the form and relevant
    Formspree processing.
-   Do not make unsupported legal or compliance claims.

## 7. Contact Form

-   Fields: Name, Email, Subject, Message.
-   Validate required fields and email format.
-   Use a honeypot and available Formspree spam protections.
-   Do not fabricate Formspree endpoint values.
-   Do not show a success message unless the submission actually
    succeeds.
-   Show actionable error feedback when submission fails.
-   Verify end-to-end before calling the form functional.

## 8. Secrets and Git

-   Never commit API keys, passwords, tokens, private credentials, or
    private environment files.
-   Do not place private secrets in client-side code.
-   Use Git commits before significant changes.
-   Run tests and production build before pushing verified changes to
    `main`.

## 9. Testing and Reporting

-   Test desktop/mobile responsiveness, navigation, form, keyboard
    behavior, reduced motion, and links.
-   Run automated tests and production build.
-   Record actual Lighthouse scores; do not promise 90+.
-   Never claim a test, deployment, domain, or integration was
    successful without verifying it.
-   Report limitations and failures honestly.

## 10. Deployment

-   Planned repository: `vivek-portfolio`.
-   Planned main branch: `main`.
-   Planned hosting: Vercel.
-   Preferred custom domain: `viveksankpal.com`, subject to availability
    and cost.
-   Only share a live URL after actual deployment and verification.
