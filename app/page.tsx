// app/about/page.tsx
import Image from 'next/image';
import '../styles/About.css';

export default function AboutPage() {
  return (
    <section className="about-container">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <Image
          src="/me.jpeg"
          alt="Profile"
          className="about-profile-image"
          width={1179}  
          height={745} 
        />
        <div className="about-text">
          <p>
            Hi, I&apos;m Miguel Urdiales, a <strong>Full-Stack Developer</strong> passionate about building modern web applications.
            I specialize in technologies like React, Node.js, and Express. When I&apos;m not coding, I enjoy going to the gym
            and competitive gaming.
          </p>
          <p>
            Check out my projects in the <strong>Portfolio Tab</strong> to see some of my work!
          </p>
        </div>
      </div>
    </section>
  );
}
