export interface Profile {
  name: string;
  shortName: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  phone: string;
  displayPhone: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeDownloadUrl: string;
  floatingKeywords: string[];
}

export interface Trait {
  title: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  name: string;
  id: string;
  skills: {
    name: string;
    level?: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  previewType: "lims" | "insurance" | "bill-ocr";
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  location?: string;
  type: "work" | "education" | "milestone";
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const portfolioData: {
  profile: Profile;
  traits: Trait[];
  skillCategories: SkillCategory[];
  featuredSkills: { name: string; icon: string; category: string }[];
  projects: Project[];
  experiences: ExperienceItem[];
  processSteps: ProcessStep[];
  navLinks: { label: string; href: string }[];
} = {
  profile: {
    name: "Rohit Narayan Rambade",
    shortName: "Rohit",
    title: "Software Engineer & Full-Stack Developer",
    headline: "Full-Stack .NET Developer with 2 years of hands-on experience building scalable, high-performance web applications and robust API architectures.",
    bio: "Full-Stack .NET Developer with 2 years of hands-on experience in designing, developing, and maintaining web applications using C#, ASP.NET Core, React.js, and SQL Server. Strong experience across the full software development lifecycle, with a focus on building scalable, reliable, and maintainable solutions. Passionate about writing clean, efficient code and collaborating with cross-functional teams to deliver high-impact digital products.",
    location: "Thane, Mumbai, India",
    phone: "+917028596347",
    displayPhone: "+91 7028596347",
    email: "rohitrambade18@gmail.com",
    linkedinUrl: "https://linkedin.com/in/rohit-rambade/",
    githubUrl: "https://github.com/rohit-rambade",
    resumeDownloadUrl: "/resume.pdf",
    floatingKeywords: [".NET", "developer", "code", "problem solver"],
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  traits: [
    {
      title: "Problem Solver",
      description: "Analytical approach to solving complex architectural challenges and data transformations.",
      iconName: "Lightbulb",
    },
    {
      title: "Detail Oriented",
      description: "Rigorous attention to validation, edge cases, SLA compliance, and regulatory standards.",
      iconName: "CheckCircle2",
    },
    {
      title: "Clean Code Advocate",
      description: "Committed to maintainable patterns, SOLID principles, and asynchronous optimization.",
      iconName: "Code2",
    },
    {
      title: "Always Learning",
      description: "Continuously exploring modern full-stack frameworks, cloud tools, and system designs.",
      iconName: "BookOpen",
    },
    {
      title: "Team Player",
      description: "Collaborative mindset working with cross-functional teams, ML engineers, and TPAs.",
      iconName: "Users2",
    },
    {
      title: "System Thinker",
      description: "Architecting end-to-end multi-tenant systems, robust APIs, and workflow engines.",
      iconName: "Sparkles",
    },
  ],

  featuredSkills: [
    { name: ".NET / C#", icon: "dotnet", category: "Backend" },
    { name: "JavaScript", icon: "javascript", category: "Languages" },
    { name: "TypeScript", icon: "typescript", category: "Languages" },
    { name: "React.js", icon: "react", category: "Frontend" },
    { name: "Next.js", icon: "nextjs", category: "Frontend" },
    { name: "Node.js", icon: "nodejs", category: "Backend" },
    { name: "SQL Server", icon: "sqlserver", category: "Database" },
    { name: "MySQL", icon: "mysql", category: "Database" },
    { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
    { name: "Git & GitHub", icon: "github", category: "DevOps & Tools" },
    { name: "Docker", icon: "docker", category: "DevOps & Tools" },
    { name: "Postman", icon: "postman", category: "DevOps & Tools" },
  ],

  skillCategories: [
    {
      name: "All",
      id: "all",
      skills: [
        { name: "C#", icon: "csharp", highlight: true },
        { name: "ASP.NET Core Web API", icon: "dotnet", highlight: true },
        { name: "React.js", icon: "react", highlight: true },
        { name: "TypeScript", icon: "typescript", highlight: true },
        { name: "SQL Server", icon: "sqlserver", highlight: true },
        { name: "JavaScript", icon: "javascript" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "Redux-Toolkit", icon: "redux" },
        { name: "MySQL", icon: "mysql" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Docker", icon: "docker" },
        { name: "Postman", icon: "postman" },
        { name: "Git & GitHub", icon: "github" },
        { name: "IIS Deployment", icon: "server" },
      ],
    },
    {
      name: "Backend & .NET",
      id: "backend",
      skills: [
        { name: "C#", icon: "csharp", highlight: true },
        { name: "ASP.NET Core Web API", icon: "dotnet", highlight: true },
        { name: "ASP.NET Core MVC", icon: "dotnet" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "RESTful APIs", icon: "api" },
        { name: "LINQ", icon: "linq" },
        { name: "Asynchronous Programming", icon: "async" },
        { name: "VB.NET", icon: "vb" },
      ],
    },
    {
      name: "Frontend",
      id: "frontend",
      skills: [
        { name: "React.js", icon: "react", highlight: true },
        { name: "TypeScript", icon: "typescript", highlight: true },
        { name: "JavaScript", icon: "javascript" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Redux-Toolkit", icon: "redux" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "CSS3 / HTML5", icon: "css" },
        { name: "REST API Integration", icon: "api" },
      ],
    },
    {
      name: "Database",
      id: "database",
      skills: [
        { name: "SQL Server", icon: "sqlserver", highlight: true },
        { name: "MySQL", icon: "mysql" },
        { name: "Stored Procedures", icon: "database" },
        { name: "Query Optimization", icon: "chart" },
        { name: "Entity Framework Core", icon: "ef" },
      ],
    },
    {
      name: "DevOps & Tools",
      id: "tools",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Postman", icon: "postman" },
        { name: "IIS Deployment", icon: "server" },
        { name: "Visual Studio", icon: "vs" },
        { name: "VS Code", icon: "vscode" },
      ],
    },
    {
      name: "Languages",
      id: "languages",
      skills: [
        { name: "C#", icon: "csharp", highlight: true },
        { name: "TypeScript", icon: "typescript", highlight: true },
        { name: "JavaScript", icon: "javascript" },
        { name: "SQL", icon: "sql" },
      ],
    },
  ],

  projects: [
    {
      id: "lims",
      title: "LIMS – Laboratory Information Management System",
      shortDescription: "Multi-tenant laboratory workflow engine with dynamic JSON test execution, real-time role notifications & RBAC+UBAC authorization.",
      fullDescription: "Architected and led the development of a comprehensive multi-tenant Laboratory Information Management System (LIMS). Designed a dynamic JSON-driven test execution engine for the Analyst module capable of rendering complex test definitions extracted from FSSAI regulatory PDFs. Implemented secure JWT authentication paired with hybrid RBAC + UBAC authorization for fine-grained lab-level access control.",
      category: "Enterprise System",
      technologies: ["ASP.NET Core WebAPI", "MS SQL", "React JS", "TypeScript", "Redux-Toolkit"],
      features: [
        "Dynamic JSON-driven test execution engine for FSSAI regulatory compliance",
        "Automated stage-driven workflow engine with real-time role-based notifications",
        "Secure JWT authentication with hybrid RBAC + UBAC access control",
        "Multi-tenant data isolation and scalable modular architecture",
      ],
      impact: "Streamlined laboratory sample lifecycle, automated test validation from regulatory PDFs, and ensured strict audit compliance.",
      previewType: "lims",
      githubUrl: "https://github.com/rohit-rambade",
    },
    {
      id: "insurance-api",
      title: "Insurance Systems Integration & API Management",
      shortDescription: "High-volume API integration platform connecting Third-Party Administrators (TPAs) and Insurance Companies for claims and policy sync.",
      fullDescription: "Developed and exposed robust internal REST APIs to Insurance Companies (ICs) for seamless data exchange of insurance claims, policies, and settlement payments. Integrated and consumed external IC APIs within the TPA ecosystem, orchestrating complex claim workflows and ensuring continuous SLA compliance.",
      category: "FinTech & Integration",
      technologies: ["ASP.NET Core WebAPI", "SQL Server", "C#", "RESTful APIs", "LINQ"],
      features: [
        "High-throughput internal API endpoints for Insurance Companies (ICs)",
        "Automated claim data synchronization and payment reconciliations",
        "Strict IRDA regulatory validation and end-to-end data security",
        "Production SLA monitoring with resilient error handling and logging",
      ],
      impact: "Processed high-volume claim transactions securely with zero data loss and maintained 99.9% uptime for TPA-IC communication.",
      previewType: "insurance",
      githubUrl: "https://github.com/rohit-rambade",
    },
    {
      id: "bill-entry-automation",
      title: "Bill Entry Automation & OCR Pipeline",
      shortDescription: "Intelligent OCR pipeline converting medical bills and invoices into validated structured SQL data with background scheduling.",
      fullDescription: "Collaborated closely with the Machine Learning engineering team to develop an automated Bill Entry system using OCR processing to extract invoice data from hospital bills and pharmacy receipts. Built high-performance Web APIs to process, validate, and store extracted data into MS SQL Server, converting JSON to XML for legacy system compatibility.",
      category: "Automation & AI",
      technologies: ["C#", "ASP.NET Core Web API", "MS SQL", "VB.NET", "OCR Processing"],
      features: [
        "Automated OCR document parsing and structured field extraction",
        "Resilient scheduler background service pushing claims to OCR queue",
        "High-performance JSON to XML conversion pipeline for legacy desktop systems",
        "Built-in IRDA validation rules and TPA claims audit trail",
      ],
      impact: "Reduced manual data entry time by over 70%, eliminated manual transcription errors, and accelerated claim processing turnaround.",
      previewType: "bill-ocr",
      githubUrl: "https://github.com/rohit-rambade",
    },
  ],

  experiences: [
    {
      id: "alphonsol",
      period: "August 2024 – Present",
      title: "Software Developer",
      company: "Alphonsol Pvt Ltd.",
      location: "Thane, Mumbai",
      type: "work",
      description: "Designing, developing, and maintaining high-performance web applications across insurance and healthcare domains.",
      highlights: [
        "Built full-stack solutions using C#, ASP.NET Core MVC, Web API, ReactJs, VB.NET and SQL Server.",
        "Engineered backend API architectures, system integrations, and background automation workflows.",
        "Collaborated with cross-functional teams to deliver scalable, reliable, and production-ready enterprise solutions.",
      ],
      technologies: ["C#", "ASP.NET Core", "Web API", "React.js", "SQL Server", "VB.NET"],
    },
    {
      id: "mitm-degree",
      period: "June 2021 – May 2024",
      title: "Bachelor of Computer Engineering",
      company: "Metropolitan Institute of Technology & Management",
      location: "Mumbai University",
      type: "education",
      description: "Graduated with CGPA 7.0, focusing on software engineering, database management systems, and web architecture.",
      highlights: [
        "In-depth focus on object-oriented programming, data structures, algorithms, and distributed computing.",
        "Built multiple full-stack web applications and API-driven projects.",
      ],
      technologies: ["C#", "Web Development", "Database Systems", "Software Engineering"],
    },
    {
      id: "polytechnic-diploma",
      period: "June 2018 – May 2021",
      title: "Diploma in Computer Engineering",
      company: "Government Polytechnic Malvan",
      location: "Malvan, Maharashtra",
      type: "education",
      description: "Graduated with 87.89% distinction with strong grounding in foundational computing.",
      highlights: [
        "Core computer engineering fundamentals, programming principles, and relational database systems.",
        "Hands-on project work in application development and systems logic.",
      ],
      technologies: ["C / C++", "Java", "SQL", "Computer Networks"],
    },
  ],

  processSteps: [
    {
      step: "01",
      title: "Discover",
      description: "Deep dive into domain requirements, business logic, workflow constraints, and regulatory rules.",
      icon: "Compass",
    },
    {
      step: "02",
      title: "Plan",
      description: "Architect scalable database schemas, REST API contracts, security models, and component hierarchies.",
      icon: "FileCode2",
    },
    {
      step: "03",
      title: "Develop",
      description: "Write clean, modular C# and React/TypeScript code adhering to SOLID principles and async patterns.",
      icon: "TerminalSquare",
    },
    {
      step: "04",
      title: "Deploy",
      description: "Containerize and configure IIS / cloud servers, optimize queries, and execute end-to-end integration tests.",
      icon: "Rocket",
    },
    {
      step: "05",
      title: "Improve",
      description: "Continuously monitor SLA metrics, refine background schedulers, and iterate based on user feedback.",
      icon: "Sparkles",
    },
  ],
};
