# Elysian Portfolio

You are an expert React, UI/UX, and Framer Motion engineer.

Build me a world-class personal portfolio website that looks like it belongs to a Senior Software Engineer / AI Engineer.

The portfolio should feel premium, minimal, modern, elegant, and extremely smooth.

Do NOT generate a generic portfolio. Every section should feel handcrafted.

Tech Stack

Use:

React 19

TypeScript

Vite

Tailwind CSS

Framer Motion

React Router (if required)

Lucide Icons

React Intersection Observer

React Lazy + Suspense

Dynamic imports

Motion One best practices where applicable

ESLint

Prettier

Architecture should be modular and scalable.

Performance Requirements

Performance is extremely important.

The website should target 90+ FPS on modern devices.

Implement:

Lazy loading for every major section

Code splitting

Dynamic imports

Image lazy loading

Route level lazy loading

useMemo

useCallback

React.memo

Suspense fallback

requestAnimationFrame where appropriate

Hardware accelerated animations

GPU transforms

translate3d()

transform instead of top/left

opacity + transform animations only

No layout thrashing

Debounced resize handlers

Passive event listeners

Avoid unnecessary re-renders

Lighthouse target:

Performance: 95+

Accessibility: 100

Best Practices: 100

SEO: 100

Design Language

Theme:

Professional

Modern

Minimal

Luxury

Glassmorphism (very subtle)

Soft shadows

Rounded corners

Beautiful typography

High-end spacing

Excellent visual hierarchy

Inspired by:

Apple

Linear

Vercel

Stripe

Raycast

Framer

Notion

Do NOT copy them.

Take inspiration only.

Color Palette

Primary:
Deep Navy / Charcoal

Accent:
Electric Blue

Secondary Accent:
Purple Gradient

Background:
Almost black with subtle noise texture

Cards:
Glass effect with blur

Hover:
Soft glow

Text:
White
Light Gray

Use gradients very carefully.

No rainbow gradients.

Typography

Use modern fonts like

Inter

Plus Jakarta Sans

Manrope

Use excellent typography scale.

Lots of whitespace.

Animations

Framer Motion should be used everywhere.

Animations must feel expensive.

No childish animations.

Target smooth 90 FPS.

Examples:

Page transitions

Section reveals

Text reveal

Fade up

Blur reveal

Stagger children

Parallax

Floating background elements

Mouse follower

Magnetic buttons

Hover elevation

Card tilt

Gradient movement

Animated underline

Scroll progress indicator

Active navbar indicator

Animated counters

Timeline reveal

Project image hover

Skill progress animation

Background blobs

Animated grid

Animated cursor (desktop only)

Loading animation

Skeleton loading

Button ripple

Micro interactions

Every animation should use spring physics where appropriate.

Avoid over animation.

Respect prefers-reduced-motion.

Cursor

Desktop only.

Custom cursor.

Magnetic interactions.

Hover scaling.

Blend mode effects.

Disable automatically on touch devices.

Background

Create a premium animated background.

Ideas:

Soft animated gradient

Noise texture

Moving grid

Tiny particles

Aurora effect

Subtle glowing blobs

Very low opacity

No distracting visuals.

Navigation

Sticky navbar.

Glass effect.

Scroll progress.

Smooth active indicator.

Mobile menu with beautiful animation.

Hide on scroll down.

Show on scroll up.

Hero Section

Large introduction.

Name

Role

Short professional summary

Availability badge

CTA buttons

Resume Download

Contact Me

Social icons

Animated profile image

Floating decorative elements

Typing effect (very subtle)

Animated gradient headline

Background animation

About Section

Professional story.

Education.

Journey.

Current focus.

Timeline animation.

Skills Section

Animated skill cards.

Categorize:

Languages

Frontend

Backend

Databases

AI/ML

Cloud

DevOps

Tools

Use icons.

Hover effects.

Animated progress.

Experience Section

Professional timeline.

Internships.

Freelancing.

Leadership.

Achievements.

Expandable cards.

Projects Section

This should be the most attractive section.

Each project card includes:

Large preview

Tech stack

Description

Features

Challenges

Role

GitHub button

Live Demo button

Case Study button

Beautiful hover animation

Tilt effect

Animated image

Featured projects first.

Certifications

Modern certificate cards.

Animated.

Clickable.

Achievements

Awards

Hackathons

Leadership

Academic achievements

IEEE

Topper

CR

etc.

Beautiful animated stats.

Resume Section

Interactive resume preview.

Download PDF.

View Resume.

Testimonials

Beautiful testimonial cards.

Carousel.

Smooth transitions.

Glass cards.

Contact Section

Premium contact form.

Validation.

Animated success state.

Social links.

Email.

LinkedIn.

GitHub.

Location.

Availability.

Footer

Elegant.

Minimal.

Social icons.

Back to top button.

Animated divider.

Micro Interactions

Everything should respond beautifully.

Buttons

Cards

Links

Icons

Navbar

Timeline

Projects

Inputs

Images

Everything should have subtle premium interactions.

Responsive Design

Must be pixel perfect.

Desktop

Laptop

Tablet

Mobile

Foldables

Ultra-wide

No overflow.

No layout shift.

Touch friendly.

Accessibility

Keyboard navigation

ARIA labels

Screen reader friendly

Proper heading hierarchy

Visible focus states

Reduced motion support

High contrast support

SEO

Complete SEO implementation.

Meta tags

Open Graph

Twitter Cards

Structured Data

robots.txt

sitemap.xml

Canonical URLs

Favicon

Manifest

PWA ready

Images

Optimize all images.

Responsive images.

Lazy loading.

Blur placeholders.

Modern formats.

Additional Premium Features

Add:

Scroll progress bar

Animated section divider

Command palette (Ctrl + K)

Dark mode (default)

Light mode toggle

Theme persistence

Animated toast notifications

Smooth scrolling

Copy email button

Scroll-to-top FAB

Keyboard shortcuts

Project filtering

Search projects

Animated statistics

GitHub contribution style section (optional)

Interactive timeline

Animated tech stack cloud

Floating action dock

Folder Structure

Use a clean architecture.

src/
 ├── assets/
 ├── components/
 │    ├── ui/
 │    ├── layout/
 │    ├── animations/
 │    ├── sections/
 │    └── shared/
 ├── hooks/
 ├── lib/
 ├── utils/
 ├── constants/
 ├── data/
 ├── context/
 ├── styles/
 ├── pages/
 ├── routes/
 └── App.tsx


Code Quality

Follow modern React best practices.

Small reusable components.

Custom hooks.

Type safety.

No duplicated code.

Reusable animation variants.

Clean naming.

Scalable architecture.

Content

Populate every section using my CV and the portfolio template I have provided.

Do not use placeholder text if my CV contains the information.

Extract:

Personal information

Professional summary

Education

Skills

Projects

Experience

Certifications

Achievements

Technologies

Contact information

Social links

Resume download

GitHub

LinkedIn

Organize the content professionally rather than copying the CV verbatim.

Final Goal

The final result should look like a premium portfolio that could realistically belong to a software engineer applying to top product companies such as Google, Microsoft, Amazon, Atlassian, Stripe, or OpenAI.

It should feel exceptionally polished, extremely smooth, fully responsive, highly interactive, optimized for performance, and visually memorable while maintaining a clean, professional aesthetic.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a4b208e4-4531-440b-8204-a5f605620934).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
