# SOSE Hackathon 2025 – Project Report  
**Project Title:** SOSE Club Website  
**Team Members:** Elijah Becker, Brandon Mercado, Jack Salazar, Kousha Salimkhan, Cameron Simmons, Jonathan Sher
<br>
**Category:** Hack for SOSE  
**Tech Stack:** HTML, CSS, JavaScript, GitHub, Apache2, Ubuntu 24.04, Cloudflare, ZeroTier  

---

## Project Summary

As part of the SOSE Hackathon 2025, our team identified a gap in the accessibility and visibility of the Society of Software Engineers (SOSE) at CSUN. There was no centralized or easily discoverable website for the club. This posed a barrier for both prospective and current members who wanted to learn more or stay involved.

To solve this problem, we created and deployed a public-facing website for SOSE. This site aims to serve as a central hub of information and engagement for students interested in software engineering at CSUN.

---

## Technical Implementation

- **Frontend Development:**  
  Built using HTML, CSS, and JavaScript for simplicity, performance, and ease of maintenance.

- **Hosting Environment:**  
  The site is hosted on a local machine running Ubuntu 24.04 (LTS) using the Apache2 web server. This setup was chosen for its flexibility and ability to be customized as needed.

- **Domain & Web Tunneling:**  
  We purchased the domain `csunsose.com` via Cloudflare for $10.46 USD and used a Cloudflare Tunnel to expose the local server securely to the internet.

- **Internal Network Access:**  
  We implemented ZeroTier to create a secure virtual network allowing all team members to access the server environment. However, we recommend that only trusted or necessary individuals be granted this level of access for security and stability reasons.

- **Version Control & Collaboration:**  
  - GitHub was used for all version control.
  - GitHub Pages hosted a temporary test version of the site during development.
  - GitHub Projects was used to manage the task flow using a kanban-style board: Backlog, In Progress, and Completed.

---

## Purpose and Features

The primary goal was to create a centralized online space where new, current, and prospective members could find all relevant information about SOSE. Key features include:

- About page explaining the mission and goals of SOSE.
- Member directory to introduce the leadership team and advisors.
- Clear instructions on how to join via MataSync.
- Information about tutoring resources for computer science students.
- Merchandise page showcasing SOSE-branded gear.
- Contact information and social media links.

This project is intended to support SOSE’s growth and improve the member experience through easy access to information.

---

## Submission Materials

- GitHub Repo: [Insert link here]  
- Live Site: https://csunsose.com  
- Video Demo: [Insert video link – max 3 minutes]  
- Optional Screenshots, UI mockups, or design documents: [Insert if available]

---

## Best Fit Category: Hack for SOSE

Although this project also supports student engagement and community (which loosely aligns with the "Hack for Social Connection" track), its primary purpose is to directly support the SOSE community through infrastructure and resources. That makes it a strong fit for the "Hack for SOSE" category.

**Resume Value:**  
"Built and deployed a public-facing website for a student software engineering society, supporting community engagement and member resources using open web technologies."

---

## Possible Enhancements (What We May Have Missed)

- Accessibility improvements following WCAG 2.1 standards to ensure all students can access the site.
- Integration of analytics tools (e.g., Google Analytics) to track user interactions and improve content.
- Embedding an events calendar or syncing with MataSync for real-time updates.
- Implementing SEO best practices to improve discoverability in search engines.
- Ensuring full mobile responsiveness across all devices.

---
