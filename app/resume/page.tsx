"use client";

import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Resume: React.FC = () => {
  return (
    <section className="resume-container bg-opacity-90 rounded-lg p-10 shadow-md max-w-3xl mx-auto my-20 text-white text-shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">My Resume</h2>
        <a
          href="/Miguel Urdiales - Frontend Developer Resume.pdf"
          download
          className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-lg font-semibold transition"
        >
          <FaFileDownload className="mr-2" /> Download Resume
        </a>
      </div>

      <div className="flex flex-col space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Front-End Development</h3>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>HTML, CSS, and JavaScript</li>
            <li>React.ts and TypeScript</li>
            <li>React.js and JSX</li>
            <li>Vite and Next.js</li>
            <li>Responsive Web Design</li>
            <li>CSS Frameworks (Bootstrap, MUI, Tailwind)</li>
            <li>Version Control with Git</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Back-End Development</h3>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Database Management with PostgreSQL</li>
            <li>RESTful APIs</li>
            <li>Authentication (JWT, Passport.js)</li>
            <li>Testing with Cypress</li>
            <li>Apollo GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
