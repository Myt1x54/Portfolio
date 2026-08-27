// All portfolio content, structured from Abdul Moiz's CV.
// Edit values here to update the site — components read from this file.

export const profile = {
  name: "Abdul Moiz",
  role: "Computer Science Undergraduate",
  location: "Rawalpindi, Pakistan",
  email: "abdulmoiz56898@gmail.com",
  github: "https://github.com/Myt1x54",
  linkedin: "https://www.linkedin.com/in/abdul-moiz-615781365/",
  tagline: "I build Android apps, backend systems & data-structure-driven software.",
  summary:
    "Computer Science undergraduate with hands-on experience in software development, mobile applications, and backend systems. Skilled in Android development using Kotlin, designing RESTful APIs with Node.js and PHP, and working with relational databases such as MySQL and SQL Server. Strong foundation in data structures, algorithms, and software design principles.",
  stats: [
    { value: "14+", label: "Projects Built" },
    { value: "6", label: "Languages" },
    { value: "2027", label: "Grad Year" },
  ],
};

// Filter categories used by the Projects section.
export const categories = [
  "All",
  "Mobile",
  "Backend",
  "Desktop",
  "Games",
  "DSA & Systems",
  "Networking",
];

export const projects = [
  {
    title: "SkillLink",
    subtitle: "Local Service Marketplace Application",
    period: "10/2025 – 12/2025",
    category: ["Mobile", "Backend"],
    featured: true,
    tech: ["Kotlin", "Node.js", "MySQL", "REST API", "Android"],
    description:
      "Hybrid two-sided marketplace connecting users with nearby service providers.",
    highlights: [
      "Android frontend in Kotlin with offline request drafting and auto cloud sync.",
      "RESTful APIs in Node.js for request management and provider interactions.",
      "MySQL schema for users, service requests, quotes, and status tracking.",
      "Two-sided workflows: providers can accept, reject, or quote requests.",
      "Search & filtering by category, rating, and location.",
      "Push notifications for real-time request status updates.",
    ],
  },
  {
    title: "Socially",
    subtitle: "Social Networking Mobile Application",
    period: "09/2025 – 11/2025",
    category: ["Mobile", "Backend"],
    featured: true,
    tech: ["Kotlin", "Firebase", "PHP", "MySQL", "SQLite", "REST API"],
    description:
      "Full-stack Android social media app with real-time chat and calls.",
    highlights: [
      "Authentication, posts, likes, comments, stories, and messaging.",
      "Firebase Authentication, Realtime Database, and FCM notifications.",
      "RESTful APIs in PHP + MySQL to replace Firebase backend services.",
      "Offline support via SQLite with background data synchronization.",
      "Real-time chat, media sharing, voice/video calls, and follow system.",
      "Pixel-perfect UI matching provided design specifications.",
    ],
  },
  {
    title: "PowerTrack",
    subtitle: "Electricity Usage & Billing System",
    period: "09/2025 – 12/2025",
    category: ["Desktop", "Backend"],
    featured: true,
    tech: ["JavaFX", "Java", "SQL", "JDBC"],
    description:
      "Digital electricity billing and usage monitoring with real-time dashboards.",
    highlights: [
      "User and admin modules for consumption tracking, billing, and tariffs.",
      "Load-shedding notification system with scheduled outage alerts.",
      "Secure digital payment workflows for monthly bill settlement.",
      "Relational data modeled and managed with SQL and JDBC.",
      "JavaFX desktop app following software design principles.",
    ],
  },
  {
    title: "Treaps vs BST",
    subtitle: "Randomized Search Trees — Comparative Case Study",
    period: "11/2025 – 12/2025",
    category: ["DSA & Systems"],
    featured: true,
    tech: ["C++", "Data Structures", "Algorithms"],
    description:
      "Treaps vs Binary Search Trees for social-media feed analysis on Reddit data.",
    highlights: [
      "Implemented Treap (randomized BST with heap properties) and BST from scratch.",
      "Evaluated complexity of insert, delete, search, and priority-update ops.",
      "Simulated feed management using timestamp- and score-based ordering.",
      "Processed large Reddit datasets with memory-efficient stream processing.",
      "Compared tree height, rotations, and balancing under identical workloads.",
      "Visualized performance metrics to analyze scalability and efficiency.",
    ],
  },
  {
    title: "CNET",
    subtitle: "Enterprise Network Design & Simulation",
    period: "11/2025 – 12/2025",
    category: ["Networking"],
    featured: true,
    tech: ["Cisco Packet Tracer", "OSPF", "EIGRP", "RIP"],
    description:
      "Large-scale enterprise network designed and simulated end to end.",
    highlights: [
      "VLSM-based subnetting with detailed IP planning and host allocation.",
      "OSPF (multi-area), EIGRP, and RIP with route redistribution.",
      "DHCP, NAT, and ACLs to enforce network policies.",
      "Security rules restricting access to specific servers and hosts.",
      "Verified end-to-end connectivity and routing convergence.",
    ],
  },
  {
    title: "TravelEase",
    subtitle: "Travel Management System",
    period: "04/2025 – 05/2025",
    category: ["Desktop", "Backend"],
    tech: ["C#", ".NET", "Windows Forms", "SQL Server"],
    description:
      "Full-stack desktop app with four portals: Traveler, Provider, Operator, Admin.",
    highlights: [
      "Built with Windows Forms (.NET Framework in C#).",
      "Relational schema with 22+ tables in SQL Server.",
    ],
  },
  {
    title: "Air Traffic Control OS Simulator",
    subtitle: "Multithreaded Airport Operations",
    period: "04/2025 – 05/2025",
    category: ["DSA & Systems"],
    tech: ["C++", "Multithreading", "OS", "Mutexes"],
    description:
      "Multithreaded simulation managing flights, runways, and airport operations.",
    highlights: [
      "Priority queues, mutexes, and process forking for AVN generation & payment.",
      "Speed monitoring and violation detection.",
    ],
  },
  {
    title: "GitLite",
    subtitle: "Custom Version Control System",
    period: "12/2024",
    category: ["DSA & Systems"],
    tech: ["C++", "AVL Tree", "Red-Black Tree", "Merkle Tree"],
    description:
      "Git-inspired CLI version control using AVL & Red-Black Trees for storage.",
    highlights: [
      "Merkle Tree for file integrity verification.",
      "Custom commands for add, edit, and commit.",
    ],
  },
  {
    title: "Advanced Notepad",
    subtitle: "Editor with Smart Search",
    period: "10/2024 – 11/2024",
    category: ["DSA & Systems"],
    tech: ["C++", "Linked Lists", "Stacks", "N-ary Tree"],
    description:
      "Console editor using a 2D doubly linked list for character storage.",
    highlights: [
      "Stacks for undo and redo functionality.",
      "N-ary tree for searching and a custom tree for smart suggestions.",
      "File saving and loading support.",
    ],
  },
  {
    title: "Plagiarism Checker",
    subtitle: "Document Similarity Tool",
    period: "09/2024",
    category: ["DSA & Systems"],
    tech: ["C++", "Cosine Similarity"],
    description:
      "Console tool comparing two documents to detect textual overlap.",
    highlights: ["Uses the cosine similarity algorithm to score overlap."],
  },
  {
    title: "Zumba Game",
    subtitle: "x86 Assembly Game",
    period: "12/2024",
    category: ["Games", "DSA & Systems"],
    tech: ["x86 Assembly", "Irvine32"],
    description:
      "Zumba-style game built in Assembly with procedures and memory manipulation.",
    highlights: [
      "Two levels with ball color matching.",
      "File handling using the Irvine32 library.",
    ],
  },
  {
    title: "Plants vs. Zombies Remake",
    subtitle: "Tower Defense Game",
    period: "04/2024 – 05/2024",
    category: ["Games"],
    tech: ["C++", "SFML", "OOP"],
    description: "GUI-based tower defense game built in C++ with SFML.",
    highlights: [
      "OOP structure with multiple maps and a wave system.",
      "Custom plant and zombie behaviors.",
    ],
  },
  {
    title: "Centipede Remake",
    subtitle: "2D Arcade Shooter",
    period: "12/2023",
    category: ["Games"],
    tech: ["C++", "SFML"],
    description: "2D arcade shooter in C++ using SFML.",
    highlights: [
      "Player controls, centipede movement, shooting, and collision logic.",
    ],
  },
  {
    title: "Hangman Game",
    subtitle: "Console Word Game",
    period: "10/2023",
    category: ["Games"],
    tech: ["C++"],
    description: "Console word-guessing game with random word selection.",
    highlights: ["Life tracking and input validation."],
  },
];

export const skills = [
  {
    group: "Programming Languages",
    items: ["C/C++", "Kotlin", "Java", "C#", "PHP", "SQL"],
  },
  {
    group: "Mobile & App Development",
    items: [
      "Android",
      "Firebase",
      "REST APIs",
      "SQLite",
      "JavaFX",
      "Windows Forms (.NET)",
    ],
  },
  {
    group: "Backend & Databases",
    items: ["Node.js", "MySQL", "SQL Server", "Firebase RTDB", "JDBC"],
  },
  {
    group: "Core CS Concepts",
    items: [
      "Data Structures & Algorithms",
      "Software Design & Analysis",
      "OOP",
      "Multithreading",
    ],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Android Studio", "Visual Studio", "VS Code", "Ubuntu"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "FAST National University (FAST NUCES), Islamabad",
    period: "08/2023 – 06/2027",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "FG Sir Syed College, Rawalpindi",
    period: "08/2021 – 06/2023",
  },
];
