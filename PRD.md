Product Requirements Document (PRD)
Project: D1 Secure And Facilities Website
1. Project Overview

Website Name: D1 Secure And Facilities
Tagline: Your Well Being Is Our Profession
Domain: d1secure.in

D1 Secure And Facilities is a professional facility management and security services company based in Bengaluru.

The goal of this website is to create a professional, modern, and fully functional front-end website using modern web technologies that showcases services, company credibility, team members, testimonials, and allows users to contact the company.

The website will be front-end only but functionally interactive (forms, animations, UI states, routing, etc).

2. Technical Requirements
Tech Stack

Framework

Next.js (App Router)

Language

TypeScript

Frontend

React

Styling

Tailwind CSS

UI Components

ShadCN UI

Icons

Lucide React

Animation

Framer Motion

Image Optimization

Next.js Image component

Deployment Ready

Vercel compatible

3. Image Usage Rules (VERY IMPORTANT)

A folder named:

/images

will be provided.

Rules:

Use ONLY images from the /images folder.

Do NOT generate AI images.

Do NOT fetch external images.

Whenever an image is required:

choose the most relevant image from /images.

If multiple images exist for a section, create image gallery or slider.

Images must be displayed using:

Next.js <Image />

for performance.

4. Color System

Professional corporate theme.

Primary Color
Deep Navy Blue

#0F172A

Secondary Color
Security Blue

#1E3A8A

Accent Color
Trust Gold

#F59E0B

Background

#F8FAFC

Text

#0B0B0B
5. Website Pages Structure

Home

About

Services

Team

Testimonials

Contact

404 Page

6. Header

Sticky Navigation Bar.

Logo (from images folder)

Menu

Home

About

Services

Team

Testimonials

Contact

Right Side

CTA Button

Get Security Consultation

Mobile Menu

Hamburger menu

Smooth slide animation

7. Footer

Footer Sections

Company Info
Services
Quick Links
Contact Info
Social Icons

Company Info

Name: D1 Secure And Facilities
Tagline: Your Well Being Is Our Profession

Contact Information

Email
info@d1secure.in

Phone
+91 87478 89604
+91 76192 08169

Address
No 2, Khata No 26/2, 1st Floor, Naganath Pura, Rayasandra, Akshaya Layout, Bengaluru - 560100

Google Maps Link
https://maps.app.goo.gl/PWBfMEbiEaoYatey9

Certifications

ISO 9001:2015 Certified

PSARA-2005 Registered

GST Registered

Labour, ESI & PF Registered

8. Home Page
Hero Section

Full width hero.

Elements

Headline

Professional Security & Facility Management Services

Subtext

Trusted by residential communities, corporate offices, and industrial facilities for reliable security and facility services.

Buttons

Primary
Get Security Service

Secondary
View Services

Background image from /images.

Services Overview Section

Display 7 service cards

Services:

1 Guard Service
2 Bouncer
3 Housekeeping Service
4 STP & WTP
5 Multi Skill Technician
6 Pest Control
7 Gardening And Landscaping

Each card includes:

Image

Title

Short description

Learn More button

Example

Guard Service
Short description:

Armed and unarmed guard services for all premises.

About Section

Introduce company.

Content:

D1 Secure And Facilities provides professional security and facility management solutions for residential, corporate, and industrial environments.

The company operates under PSARA regulations and deploys trained professionals to maintain safety, cleanliness, and operational efficiency across multiple facilities in Bangalore.

Certifications Section

Display certification badges:

ISO 9001:2015

PSARA 2005

GST Registered

Labour, ESI & PF Registered

Testimonials Section

Create testimonial slider.

Example

Client: Brindavan Palms
Rating: ⭐⭐⭐⭐⭐

Review
Residents feel much more relaxed after onboarding D1Secure – the guards are alert 24/7 and entry/exit is tightly monitored without disturbing daily convenience.

Include all 10 testimonials from data.

Call To Action

Large section.

Text

Looking for reliable security and facility services?

Button

Contact Us

9. About Page

Sections

1 Company Overview
2 Mission & Vision
3 Certifications
4 Company Strength

Mission

Provide reliable, professional, and trustworthy security and facility management services.

Vision

Become one of the most trusted security and facility management companies in India.

10. Services Page

Each service should have detailed section with sub services.

Example:

Guard Service

Short Description
Armed and unarmed guard services for all premises.

Full Description

D1 Secure offers complete Armed and Unarmed security Guard Services, Bodyguard Services, and Escort Security services. Registered under the Private Security Agencies Regulations Act (PSARA-2005). Guards are deployed at residential complexes, corporate offices, malls, hospitals, schools, and industrial facilities in Bangalore.

Sub Services

Armed Security Guards

Unarmed Security Guards

Bodyguard / Personal Security

Escort Security Services

Residential Complex Guards

Corporate Office Guards

Industrial / Factory Guards

Event Security Guards

Repeat same structure for all services.

11. Team Page

Display team members in grid layout.

Team Data

Dildar Hussain
Chief Executive Officer

Tahira Mamtaz
Director

Madhusmita Rabha
Admin Manager

Sanjib Thapa
Operations Manager

Dhanalakshmi
Officer Assistant

Suman Nath
Field Officer

Each card:

Photo from /images

Name

Role

12. Testimonials Page

Grid or slider layout.

Include:

Client name

Rating

Review text

All testimonials must be displayed.

13. Contact Page

Sections:

Contact Form
Map
Company Information

Contact Form Fields

Name

Email

Phone

Service Required

Message

Button

Submit Inquiry

Since frontend only:

Show success message

Thank you. Our team will contact you soon.
14. Map Section

Embed Google Map using provided URL.

15. Animations

Use Framer Motion.

Animations:

Fade in sections

Hover service cards

Smooth page transitions

Scroll reveal

16. Performance

Must follow:

Lazy loading images

SEO meta tags

Next.js Image optimization

Mobile responsive

Lighthouse score above 90

17. Responsive Design

Breakpoints

Mobile
Tablet
Desktop

Mobile must include:

collapsible navbar

stacked layout

touch friendly buttons

18. SEO Setup

Meta tags

Title

D1 Secure And Facilities | Security & Facility Services Bangalore

Description

Professional security guards, housekeeping, pest control, technicians, and facility services in Bangalore.
19. Code Structure

Example folder structure:

app
components
sections
services
team
testimonials
public/images
styles
utils
20. Functional Behavior

Must support:

Smooth navigation

Working mobile menu

Animated components

Interactive cards

Functional form UI

Testimonials slider