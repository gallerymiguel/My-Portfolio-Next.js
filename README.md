
# Portfolio Web Application

This is a personal portfolio web application built with **Next.js 15** and **TypeScript**, showcasing my projects and a contact form. The backend is implemented using Next.js API routes and integrates with Nodemailer for sending emails. 

## Features
- Responsive portfolio grid displaying project thumbnails and details
- Individual project pages with descriptions, features, and tech stacks
- Contact form for visitors to send messages directly
- Backend email service powered by Nodemailer (via Yahoo)

## Tech Stack
- **Frontend:** Next.js 15 (App Router), Tailwind CSS, TypeScript
- **Backend:** Next.js API Routes (Node.js + Express-like behavior)
- **Email Service:** Nodemailer with Yahoo Mail
- **Deployment:** Vercel

## How to Use
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file at the root with the following:
   ```env
   EMAIL_USER=your_yahoo_email
   EMAIL_PASS=your_app_password
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Deploy with Vercel for production.

## Folder Structure
- `app/`: Main Next.js pages and components.
- `app/api/contact/route.ts`: API route for contact form.
- `components/`: Reusable components like Navbar, Footer, etc.
- `public/`: Static files like images and PDFs.
- `styles/`: TailwindCSS via globals.css.

## Notes
- This project uses Tailwind for styling.
- The contact form works by sending a POST request to the API route and uses the Yahoo email service.

---

© 2025 Miguel Urdiales. All rights reserved.
