"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Error: " + result.error);
      }
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <section className="contact-container bg-cover bg-center backdrop-blur-md text-white rounded-lg max-w-3xl mx-auto my-24 p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded-md border border-gray-300 text-black"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded-md border border-gray-300 text-black"
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 rounded-md border border-gray-300 text-black"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition"
        >
          Submit
        </button>
        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
