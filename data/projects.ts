const projects = [
  {
    id: 1,
    title: "After Action Review",
    slug: "after-action-review",
    image: "/afteractionreview.png",
    github: "https://github.com/gallerymiguel/after_action_review",
    demo_video: "/After_Actions_Promo.mp4",
    live: "https://after-action-review.onrender.com/",
    store: "",
    description:
      "Engineered an application to facilitate the review and analysis of task performances with capabilities for detailed reporting and historical data analysis.",
    features: [
      "Dynamic event tracking",
      "PDF export functionality",
      "User authentication and protected routes",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "Material-UI",
      "jsPDF",
    ],
    images: [
      { src: "/After_Actions_Screenshot1.png", aspect: "4/3" },
      { src: "/After_Actions_Screenshot2.png", aspect: "4/3" },
      { src: "/After_Actions_Screenshot3.png", aspect: "4/3" },
      { src: "/After_Actions_Screenshot4.png", aspect: "4/3" }, 
    ],
  },
  {
    id: 2,
    title: "Tech Quiz",
    slug: "tech-quiz",
    promo_video: "/techquiz.mp4",
    github: "https://github.com/gallerymiguel/tech-quiz-test",
    live: "", // Add if you have a live site
    store: "",
    description:
      "An advanced quiz platform challenging users' Python programming skills, from syntax to complex programming concepts, providing instant feedback.",
    features: [
      "Real-time quiz feedback",
      "Advanced Python topics",
      "Interactive user interface",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Cypress"],
    images: [
      "/assets/images/tech-quiz-1.png",
      "/assets/images/tech-quiz-2.png",
    ],
  },
  {
    id: 3,
    title: "Chrome Extension: AI Video Transcriber",
    slug: "chrome-extension",
    image: "/Small_Promo.png",
    demo_video: "/ChromeExPromo.mp4",
    github: "https://github.com/gallerymiguel/video-audio-AI",
    live: "",
    store: "https://chrome.google.com/webstore/detail/your-extension-id", // Placeholder for Chrome Store
    description:
      "A Chrome extension that transcribes and summarizes YouTube and Instagram videos using OpenAI Whisper and ChatGPT.",
    features: [
      "Transcribes video audio using Whisper",
      "Summarizes with ChatGPT",
      "Supports timestamps and language detection",
      "Stripe-powered paywall for premium features",
    ],
    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "Tailwind",
      "Stripe",
      "Docker",
    ],
    images: [
      { src: "/Chrome_Screenshot_1.png", aspect: "2/3" },
      { src: "/Chrome_Screenshot_2.png", aspect: "2/3" },
      { src: "/Chrome_Screenshot_3.png", aspect: "2/3" }, // Portrait
      { src: "/Chrome_Screenshot_4.png", aspect: "2/3" },
    ],
  },
  {
    id: 4,
    title: "Candidate Search App",
    slug: "candidate-search",
    image: "/CandidateSearch.jpg",
    github: "https://github.com/gallerymiguel/candidate-search/",
    live: "https://candidate-search-kx1t.onrender.com/",
    store: "",
    description:
      "Developed a dynamic web application that leverages the GitHub API to allow users to search, view, and save GitHub profiles. Designed to help recruiters and hiring managers find potential candidates based on specific queries.",
    features: [
      "Search GitHub profiles by keyword",
      "Save candidates to local storage",
      "Responsive, user-friendly interface",
    ],
    technologies: ["React", "TypeScript", "GitHub API", "Local Storage", "CSS"],
    images: [
      "/Chrome_Screenshot_1.png",
      "/Chrome_Screenshot_2.png",
      "/Chrome_Screenshot_3.png",
      "/Chrome_Screenshot_4.png",
    ],
  },
];

export default projects;
