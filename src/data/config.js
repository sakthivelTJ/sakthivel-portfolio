export const personalInfo = {
  name: "Sakthivel T",
  firstName: "Sakthivel",
  brandName: "Sakthivel T",
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+91 9344394984",
  emails: {
    primary: "sakthiveltj2004@gmail.com",
    secondary: "sakthiveltj2004@gmail.com",
  },
  socials: {
    github: "https://github.com/sakthivelTJ",
    linkedin: "https://www.linkedin.com/in/sakthivel-tj/",
  },
  summary:
    "Java Full Stack Developer with hands-on experience in developing secure, scalable, and database-driven web applications using Java 21, JEE, Servlets, JSP, JDBC, Hibernate, MySQL, and Apache Tomcat. Strong understanding of software architecture, object-oriented design, authentication mechanisms, and RESTful services.",
  resumeUrl: "/Sakthivel_T_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/sakthivelTJ",
  linkedin: "https://www.linkedin.com/in/sakthivel-tj/",
};

export const heroData = {
  greeting: "Hi, I'm Sakthivel T",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build secure, scalable web applications using Java 21, JEE, Servlets, JSP, Hibernate, MySQL, and Apache Tomcat.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/Sakthivel_T_Resume.pdf" },
};
export const heroInfo = heroData;

export const aboutData = {
  heading: "Hello!",
  bio: 'Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sakthivel T</span>, a Java Full Stack Developer based in Bengaluru, India, dedicated to building secure, scalable, and database-driven web applications using Java, JEE, Hibernate, and MySQL.',
  techStack: ["Java", "JEE", "MySQL"],
};
export const aboutInfo = aboutData;

export const processData = {
  badge: "My Process",
  heading: "Here's how I build robust web applications",
  description:
    "I follow a structured, architecture-driven approach to deliver secure backends and seamless user experiences.",
  cards: [
    {
      number: "01",
      title: "Analyze & Design",
      text: "Translating requirements into clean, scalable full-stack architectures using MVC and DAO patterns.",
    },
    {
      number: "02",
      title: "Develop Backend",
      text: "Building secure Java backends with Servlets, JSP, JDBC, Hibernate, and role-based authentication.",
    },
    {
      number: "03",
      title: "Build Frontend",
      text: "Creating responsive interfaces with HTML5, CSS3, JavaScript, and integrating them with backend APIs.",
    },
    {
      number: "04",
      title: "Test & Deploy",
      text: "Rigorous debugging, testing, and deployment on Apache Tomcat with optimized database operations.",
    },
  ],
  endText: "Ready to ship!",
};

export const skillsData = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 92 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript", level: 80 },
        { name: "React (Basic)", level: 55 },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Java JEE", level: 88 },
        { name: "Servlets & JSP", level: 90 },
        { name: "JDBC", level: 88 },
        { name: "Hibernate", level: 82 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "SQL Queries", level: 90 },
        { name: "Database Design", level: 82 },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 82 },
        { name: "OOP", level: 92 },
        { name: "MVC Architecture", level: 88 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Apache Tomcat", level: 88 },
        { name: "Git & GitHub", level: 85 },
        { name: "Eclipse IDE", level: 90 },
      ],
    },
  ],
};

export const innovationData = {
  badge: "Java & Innovation",
  heading: "Full Stack Systems & Architecture",
  description:
    "Building enterprise-grade Java web applications with secure authentication and scalable database-driven architecture.",
  categories: [
    {
      title: "Java Web Architecture",
      description:
        "MVC-based Servlet/JSP applications with JDBC data access layers and role-based authentication.",
      stats: "JEE Stack",
      icon: "⚡",
    },
    {
      title: "Database-Driven Systems",
      description:
        "Efficient CRUD operations using DAO pattern, PreparedStatement, and MySQL database design.",
      stats: "MySQL + JDBC",
      icon: "📊",
    },
    {
      title: "Secure Authentication",
      description:
        "RBAC implementation with HttpSession management, BCrypt hashing, and secure access control.",
      stats: "Security",
      icon: "🔒",
    },
    {
      title: "REST-Style Endpoints",
      description:
        "JSON-based API endpoints for real-time data polling and dynamic frontend integration.",
      stats: "REST APIs",
      icon: "💻",
    },
  ],
};

export const projects = [
  {
    id: "click-chow",
    number: "01",
    badge: "🍔 Full Stack Web App",
    title: "Click Chow — Food Delivery App",
    description:
      "Developed a multi-role food delivery web application using Java 21, Servlets, JSP, Apache Tomcat, and the MVC architecture, supporting Customer, Admin, and Delivery portals with role-specific functionalities. Implemented secure authentication using RBAC, HttpSession management, and BCrypt password hashing. Built a stateful shopping cart and complete checkout workflow with dynamic price calculation.",
    techTags: [
      "Java 21",
      "Servlets",
      "JSP",
      "JDBC",
      "MySQL",
      "Apache Tomcat",
      "JavaScript",
      "DAO Pattern",
      "BCrypt",
    ],
    links: { github: "https://github.com/sakthivelTJ", demo: null },
    isFlagship: true,
  },
];

export const experience = [
  {
    organization: "TAP Academy",
    role: "Full Stack Developer Intern",
    duration: "Feb 2026 – Present",
    skills: [
      "Building end-to-end web applications using Java, JEE, Servlets, JSP, JDBC, Hibernate, MySQL, and Apache Tomcat",
      "Developing responsive user interfaces with HTML, CSS, JavaScript using JDBC and DAO design pattern",
      "Applying secure authentication, session management, debugging, and clean coding practices",
    ],
    tech: [
      "Java",
      "JEE",
      "Servlets",
      "JSP",
      "JDBC",
      "Hibernate",
      "MySQL",
      "Apache Tomcat",
    ],
  },
];

export const achievements = [
  {
    title: "Certificate of Merit — NIT Trichy (Currents'23)",
    description:
      "Awarded Certificate of Merit for participation in Dhruva, a national-level technical symposium organized by NIT Trichy, demonstrating active engagement in technical learning.",
    role: "Participant",
    badge: "Award",
  },
  {
    title: "B.Tech in AI & Data Science (CGPA: 7.3)",
    description:
      "Completed Bachelor of Technology in Artificial Intelligence & Data Science at M.A.M. School of Engineering, Trichy.",
    role: "CSE Graduate",
    badge: "Academic",
  },
];

export const certifications = {
  featured: [
    {
      name: "Certificate of Merit — Dhruva, NIT Trichy",
      issuer: "NIT Trichy",
      year: "2023",
    },
  ],
  viewAllUrl: "https://github.com/sakthivelTJ",
};

export const softSkills = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex engineering requirements into clean, modular, and reusable components.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working seamlessly with designers and backend engineers to meet technical and product goals.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear and structured interactions in technical code reviews, discussions, and feature presentations.",
  },
  {
    name: "Continuous Learning",
    icon: "🚀",
    desc: "Actively expanding expertise into React, Spring Boot, and advanced Java frameworks.",
  },
  {
    name: "Code Quality",
    icon: "⚡",
    desc: "Writing maintainable, clean, and well-documented Java and JavaScript code.",
  },
  {
    name: "Analytical Thinking",
    icon: "🎯",
    desc: "Strong aptitude for algorithms, data structures, and systematic debugging approaches.",
  },
];

export const footerData = {
  taglines: [
    "Java Full Stack Developer",
    "Bengaluru, India",
    "Building Scalable Web Apps",
  ],
  credential: "B.Tech in AI & Data Science",
  copyright: `© ${new Date().getFullYear()} Sakthivel T. All rights reserved.`,
};
