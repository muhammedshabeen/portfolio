export const portfolioData = {
  name: "Muhammed Shabeen J",
  title: "Senior Django Backend Developer",
  yearsOfExperience: "3+",
  location: "Calicut, Kerala, India",
  email: "shabeenclt@gmail.com",
  linkedin: "linkedin.com/in/muhammed-shabeen-j",
  github: "github.com/shabeenj",
  
  summary: `Experienced Python Django Developer with over 3 years in fullstack development, specializing in building scalable backend systems and RESTful APIs. Proven expertise in developing high-performance APIs using Django Rest Framework, implementing real-time communication with WebSockets, and managing complex asynchronous tasks. Skilled at optimizing database performance, integrating third-party services like AWS, Twilio, and Razorpay to optimize real-time communication and payment solutions.`,

  skills: [
    {
      category: "Backend Engineering",
      items: [
        { name: "Python", icon: "code-2" },
        { name: "Django", icon: "server" },
        { name: "Django Rest Framework", icon: "api" },
        { name: "REST APIs", icon: "network" },
        { name: "WebSockets", icon: "radio" }
      ]
    },
    {
      category: "Databases & Performance",
      items: [
        { name: "PostgreSQL", icon: "database" },
        { name: "MySQL", icon: "database" },
        { name: "Redis", icon: "zap" },
        { name: "Query Optimization", icon: "gauge" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "AWS S3", icon: "cloud" },
        { name: "DigitalOcean", icon: "server-cog" },
        { name: "Celery", icon: "clock" },
        { name: "Git & GitHub", icon: "git-branch" }
      ]
    },
    {
      category: "Payments & Integrations",
      items: [
        { name: "Razorpay", icon: "credit-card" },
        { name: "Upayments", icon: "wallet" },
        { name: "Twilio", icon: "phone" },
        { name: "Ably", icon: "message-circle" }
      ]
    },
    {
      category: "Frontend Basics",
      items: [
        { name: "HTML/CSS", icon: "layout" },
        { name: "JavaScript", icon: "braces" },
        { name: "jQuery", icon: "sparkles" },
        { name: "AJAX", icon: "refresh-cw" }
      ]
    }
  ],

  experience: [
    {
      title: "Python Django Developer",
      company: "Strong Codes Labs",
      period: "Jun 2023 - Present",
      description: "Developing and maintaining RESTful APIs using Django Rest Framework and PostgreSQL.",
      achievements: [
        "Developed REST APIs for authentication and integrations using secure and efficient payment processing",
        "Built high-performance booking platform with real-time availability",
        "Built APIs for file upload, user authentication, and complex application logic and process user credentials",
        "Collaborated on UI/UX implementations based on Figma designs"
      ]
    },
    {
      title: "Python Django Developer",
      company: "Primalcodes Technologies",
      period: "Nov 2021 - Close 0ct",
      description: "Full-stack development of scalable Django applications, ensuring optimized backend and integrations.",
      achievements: [
        "Developed e-commerce backend with secure payment processing",
        "Contributed to the current delivery of reliable E-OBA Reviews",
        "Established user authentication system including email/sms and resend/send via verification, and versatile application logic across our multiple mobile platforms",
        "Working on AJAX-based file upload and an enhanced online shopping module, serving scheduling of tickets for an enhanced active shopping environment"
      ]
    },
    {
      title: "Jr. Python Programmer",
      company: "Infoniz Technologies",
      period: "Mar 2021 - Sep 2021",
      description: "Worked on developing scalable backend solutions, monitoring workflows, and maintaining business-level access.",
      achievements: [
        "Built e-ticket and system site with Admin and Scanner logins to managed ticket booking process web Blocks system",
        "Built architecture for custom departmental files system and integrated workflows",
        "Enabled admins to assign department, monitor workflows, and mark tasks as enabled-architecture by filing workflow for streamlined project admissions"
      ]
    }
  ],

  projects: [
    {
      title: "Hotel Booking Platform",
      description: "A unified caller and Online Booking Platform integrating the Hyperguest API for booking management with Ably for real-time notifications",
      tech: ["Django", "PostgreSQL", "Hyperguest API", "Ably", "WebSockets"],
      challenges: [
        "Optimized the booking platform's user interface for seamless, customer experiences",
        "Ensured smooth verified booking processes",
        "Integrated platform data and real-time booking notifications"
      ]
    },
    {
      title: "Social Networking App",
      description: "Share your world insights, photos, and stories, expressed with friends and followers through an enhanced online shopping handling and scheduling of checkouts for art enhanced active shopping",
      tech: ["Django", "PostgreSQL", "Redis", "Celery"],
      challenges: [
        "Built newsfeed generation, working, and result tracking",
        "AI unit time-based generation working and result tracking",
        "Integrated file upload system for handling and scheduling checkouts for an enhanced online shopping"
      ]
    },
    {
      title: "E-commerce Platform",
      description: "A live Online Shopping Platform. Designed and developed a scalable, API/web-retail live that new functionalized within the Django and PostgreSQL. Payments: Utilized Upayments for secure and efficient payment processing",
      tech: ["Django", "PostgreSQL", "Upayments", "AWS S3"],
      challenges: [
        "Designed and developed a scalable e-commerce backend",
        "Integrated live order and cart management",
        "Integrated Reasoning for API-driven correct-level payment processing"
      ]
    },
    {
      title: "Ride-Sharing Backend",
      description: "Developed a scalable ride-sharing backend using Django Rest Framework (DRF) to handle real-time ride requests, driver matching, and route optimization",
      tech: ["Django Rest Framework", "PostgreSQL", "Redis", "WebSockets"],
      challenges: [
        "Real-time driver location tracking and matching algorithm",
        "Optimized database queries for high-traffic scenarios",
        "Built WebSocket connections for live ride updates"
      ]
    }
  ]
};
