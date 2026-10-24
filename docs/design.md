# Portfolio Design Specification

## 1. Design Direction

Create an independent, professional design inspired by the user's
supplied `picto-v1.0.0.zip` reference, without copying it directly.

-   Theme: light only.
-   Main surfaces: white and light grey.
-   Accent: classic blue with restrained light-blue supporting states.
-   Mood: clean, professional, minimal, confident, and
    recruiter-friendly.
-   Avoid excessive neon, gaming aesthetics, and unnecessary 3D effects.
-   Use generous spacing, subtle borders, and restrained shadows.

## 2. Typography

-   Preferred font: Inter or Manrope.
-   Use a consistent type scale for headings, body copy, labels, and
    metadata.
-   Use a limited number of font weights.
-   Keep paragraphs readable and concise.
-   Website copy is English-only, with simple international English.
-   Documentation may be written in Marathi with English technical
    terms.

## 3. Brand and Navigation

-   Brand label: `Vivek Sankpal`.
-   Brand icon: minimalist classic-blue "V" beside the name.
-   Favicon: matching small classic-blue "V"; do not use the profile
    photo.
-   Sticky navbar with subtle background/shadow.
-   Main navigation: Home, About, Skills, Projects, Education,
    Certifications, Contact.
-   Active section: light-blue background with classic-blue underline.
-   Mobile menu: hamburger button and dropdown below navbar; close after
    section selection.
-   Ensure keyboard navigation, visible focus, and appropriate
    accessible names.

## 4. Hero

-   Heading: `Hi, I’m Vivek Sankpal`
-   Role: `Aspiring Software Developer`
-   Intro:
    `Aspiring Software Developer focused on learning, problem-solving, and building practical projects.`
-   CTAs: `View Projects`, `Contact Me`.
-   Add `View Resume` and `Download Resume` actions in Hero and About,
    linked only after the PDF is supplied.
-   Use a rounded rectangular real profile photo with subtle
    classic-blue frame and light shadow.
-   Add restrained floating technology badges: HTML, CSS, JavaScript,
    React.js.
-   Do not place GitHub/LinkedIn icons in the Hero; keep social links in
    Contact and Footer.

## 5. Section Layouts

### About

-   4--6 sentences about education, career goal, interests, and
    strengths.
-   Strengths: Quick learner, Problem-solving, Consistency & dedication,
    Teamwork.
-   Keep claims honest and appropriate for a fresher.

### Skills

-   Categories: Frontend, Frameworks, Database, Tools.
-   Confirmed skills: HTML, CSS, JavaScript, Bootstrap, React.js,
    Git/GitHub, SQL/MySQL.
-   Use recognizable icons/logos where available.
-   No skill percentages or progress bars.

### Projects

-   One initial card: Weather Safety App.
-   Status badge/text: `In Development`.
-   Use a clean professional placeholder, not a fabricated screenshot.
-   Show real repository/demo actions only when valid links exist.
-   Use a flexible card pattern so projects can be added later.
-   Lazy-load project images when appropriate.

### Education

-   Course: Master of Computer Applications (MCA).
-   College: Sant Gajanan Maharaj College Of Engineering, Mahagaon.
-   University: Shivaji University, Kolhapur.
-   Status: Currently Pursuing.
-   Do not add dates, year, marks, or graduation claims without
    confirmation.

### Certifications

-   Full Stack .NET Development.
-   Thumbnail/preview opens a larger view when selected.
-   Use the actual certificate supplied by the user.
-   Issuer/date/credential URL only when visible and verifiable in the
    file.
-   No download button in the initial agreed design.

### Contact

-   Desktop: two columns, contact details on one side and form on the
    other.
-   Mobile: one column, contact details first and full-width form below.
-   Methods: email, GitHub, LinkedIn, contact form.
-   Form fields: Name, Email, Subject, Message.
-   Email includes `mailto:` and a Copy action.
-   Show inline success/error messages near the form.
-   Do not show success without a confirmed successful submission.

## 6. Footer and Auxiliary Pages

Footer text: - `© 2026 Vivek Sankpal. All rights reserved.` -
`Built with passion for learning and creating.`

Footer links: GitHub, LinkedIn, Privacy Policy.

Privacy page: - Concise explanation of contact-form data, intended use,
and relevant Formspree processing. - Avoid unsupported legal/compliance
claims.

404 page: - `404` - `Page Not Found` - `Back to Home` action.

Back-to-Top: - Floating circular classic-blue arrow at bottom-right
after scrolling. - Keyboard accessible and has an accessible name.

## 7. Motion

-   Hero entrance animation.
-   Scroll reveal using fade and slight upward movement.
-   Subtle hover effects on skill and project cards.
-   No custom loading screen.
-   Respect `prefers-reduced-motion`.
-   Motion must not block access to content or controls.

## 8. Responsive Rules

-   Layouts adapt to desktop, tablet, and mobile.
-   Avoid horizontal overflow.
-   Ensure navigation, cards, buttons, image previews, and form fields
    work on touch and keyboard.
-   Use full-width form on mobile and comfortable touch targets.
-   Test at representative viewport sizes.

## 9. Accessibility

-   Semantic HTML.
-   Full keyboard navigation.
-   Visible focus indicators.
-   Proper form labels and helpful validation.
-   Sufficient contrast.
-   Meaningful alt text for images.
-   Accessible certificate preview interaction.
-   Reduced-motion support.
-   Test before claiming compliance.

## 10. SEO and Performance

-   Title: `Vivek Sankpal — Aspiring Software Developer`.
-   Add meta description, Open Graph/social-sharing metadata, semantic
    markup, and favicon.
-   Use real supplied images; optimize file sizes and lazy-load
    below-the-fold imagery.
-   Target Lighthouse 90+ for Performance, Accessibility, Best
    Practices, and SEO where practical, but treat scores as goals rather
    than guarantees.
-   Validate SEO/social previews after deployment; do not claim they
    have been verified beforehand.
