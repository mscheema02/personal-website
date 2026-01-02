# Personal Website (React + Vite) — Hosted on AWS

Live domain: **manvirsinghcheema.com** (and **www.manvirsinghcheema.com**)

## Table of Contents
- [Overview](#overview)
- [Project Layout](#project-layout)
- [Key Files](#key-files)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
- [How to Host on AWS](#how-to-host-on-aws)
  - [1) Build the site](#1-build-the-site)
  - [2) S3 (Static site bucket)](#2-s3-static-site-bucket)
  - [3) CloudFront (CDN + HTTPS)](#3-cloudfront-cdn--https)
  - [4) Route 53 (DNS)](#4-route-53-dns)
  - [5) Common troubleshooting](#5-common-troubleshooting)

## Overview
This repository contains the source code for my personal website built with **React + Vite** and deployed as a **static site** on AWS.

The AWS setup is:
- **S3** stores the static build output (HTML/CSS/JS/assets)
- **CloudFront** serves the site globally with caching + HTTPS
- **Route 53** routes the domain (**manvirsinghcheema.com** / **www**) to CloudFront
- **ACM** provides the SSL/TLS certificate used by CloudFront

---

## Project Layout
> The actual React/Vite app lives inside the `personal-website/` folder.

```text
.
├── README.md
└── personal-website/
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── public/
    │   ├── favicon.ico
    │   ├── favicon-dark.ico
    │   ├── favicon-light.ico
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── apple-touch-icon.png
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   └── resume.pdf
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── content.js
        └── styles.css
```

## Key Files
- `personal-website/src/App.jsx`
  - Main UI: sections (About, Skills, Projects, Experience, Education, Contact), card-based layout, and interactive behaviors.
- `personal-website/src/content.js`
  - Central data file for profile content (projects/experience/education/skills/links). Update this to change what appears on the site.
- `personal-website/src/styles.css`
  - All styling for the site (layout, typography, cards, responsive behavior, highlight animations, etc.).
- `personal-website/src/main.jsx`
  - React entry point that mounts the app.
- `personal-website/vite.config.js`
  - Vite build/dev configuration.
- `personal-website/public/`
  - Static assets (favicons + `resume.pdf`).

---

## Features
- **Single-page personal site** with clean section navigation (`#skills`, `#projects`, `#experience`, `#education`, etc.).
- **Expandable cards** for Projects, Experience, and Education (click to expand/collapse details).
- **Skill browsing**
  - Skills render as tags, include a searchable filter, and support expanding beyond an initial subset.
- **Deep-link highlight behavior**
  - Links like `#project-0`, `#experience-1`, and `#education-0` briefly highlight the matching card for quick orientation.
- **Smart link rendering**
  - GitHub/LinkedIn links render as icons (and still include accessible titles).
- **Dark/light favicon handling**
  - Automatically swaps favicons based on system theme.

---

## Technologies Used

### Frontend
- **React** (SPA UI)
- **JavaScript (ES6+)**
- **HTML5 / CSS3**

### Tooling
- **Vite** (local dev server + production build)
- **ESLint** (linting / code quality)
- **npm** (package management)

### Hosting / Infrastructure (AWS)
- **Amazon S3** — hosts static build artifacts  
  - Bucket: `manvirsinghcheema.com`  
  - Region: `us-east-2`
- **Amazon CloudFront** — CDN + HTTPS in front of S3
  - Two distributions: **production** and **staging**
- **Amazon Route 53** — DNS for apex + www records to CloudFront
- **AWS Certificate Manager (ACM)** — SSL/TLS certificate used by CloudFront for HTTPS

---

## How to Run Locally
> Run these commands from the `personal-website/` directory.

```bash
cd personal-website
npm install
npm run dev
```

Typical additional commands:
```bash
# Production build (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

---

## How to Host on AWS

### 1) Build the site
From the `personal-website/` directory:
```bash
npm install
npm run build
```

This produces a `dist/` folder containing static files ready to deploy.

### 2) S3 (Static site bucket)
1. Create an S3 bucket named **exactly** your domain:
   - `manvirsinghcheema.com`
2. Upload the contents of `dist/` to the bucket (keep folder structure intact).
3. Choose **one** of these common approaches:
   - **Option A (recommended): S3 private + CloudFront Origin Access Control (OAC)**
     - Keep the bucket private and allow CloudFront to read objects.
   - **Option B: S3 static website hosting endpoint**
     - Enable “Static website hosting” and ensure the bucket policy allows public read (less preferred).

### 3) CloudFront (CDN + HTTPS)
1. Create a CloudFront distribution with the S3 bucket as the origin.
2. Configure:
   - **Alternate domain names (CNAMEs):**
     - `manvirsinghcheema.com`
     - `www.manvirsinghcheema.com`
   - **Viewer protocol policy:** Redirect HTTP to HTTPS
   - **Default root object:** `index.html`
3. Attach the ACM certificate for your domain (used for HTTPS).

> You can maintain separate **production** and **staging** CloudFront distributions if you want safe testing before promoting changes.

### 4) Route 53 (DNS)
1. In Route 53, create (or use) the hosted zone for `manvirsinghcheema.com`.
2. Add DNS records:
   - **A / AAAA (Alias)** for `manvirsinghcheema.com` → CloudFront distribution
   - **A / AAAA (Alias)** for `www.manvirsinghcheema.com` → CloudFront distribution

### 5) Common troubleshooting
- **Blank page / 404 on refresh**
  - Ensure CloudFront/S3 is configured to serve `index.html` for SPA routes (or only use hash anchors).
- **Changes not showing**
  - Invalidate CloudFront cache (or wait for TTL).
- **HTTPS issues**
  - Ensure your certificate covers both apex and `www`, and is attached to the distribution.
- **Permission denied from S3**
  - If using OAC/OAI, confirm the bucket policy allows CloudFront access.

---

## Notes for Future Improvements (Optional)
- Add CI/CD (GitHub Actions) to automatically build and deploy `dist/` to S3 and invalidate CloudFront.
- Add analytics (privacy-friendly) and performance monitoring.
