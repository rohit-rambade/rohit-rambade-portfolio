import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6" }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "csharp":
    case "c":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#EDE9FE" />
          <path d="M12 4L4.5 8.33V15.67L12 20L19.5 15.67V8.33L12 4Z" stroke="#5B21F4" strokeWidth="1.5" />
          <path d="M10.5 10C9.67 10 9 10.9 9 12C9 13.1 9.67 14 10.5 14C11.1 14 11.6 13.5 11.8 13" stroke="#5B21F4" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 10V14M16 10V14M13 11H17M13 13H17" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "dotnet":
    case "aspnetcore":
    case "aspnet":
    case "aspnetcorewebapi":
    case "aspnetcoremvc":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F5F3FF" />
          <circle cx="12" cy="12" r="8" stroke="#5B21F4" strokeWidth="1.5" />
          <path d="M8 12.5C8 10.5 9.5 9 11.5 9C13 9 14 10 14 11.5C14 13.5 12.5 15 10.5 15H8V12.5Z" stroke="#5B21F4" strokeWidth="1.4" />
          <circle cx="16" cy="14" r="1" fill="#5B21F4" />
        </svg>
      );

    case "react":
    case "reactjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F0F9FF" />
          <ellipse cx="12" cy="12" rx="3.5" ry="8.5" transform="rotate(30 12 12)" stroke="#0284C7" strokeWidth="1.3" />
          <ellipse cx="12" cy="12" rx="3.5" ry="8.5" transform="rotate(90 12 12)" stroke="#0284C7" strokeWidth="1.3" />
          <ellipse cx="12" cy="12" rx="3.5" ry="8.5" transform="rotate(150 12 12)" stroke="#0284C7" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="1.5" fill="#0284C7" />
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F8FAFC" />
          <circle cx="12" cy="12" r="8" stroke="#111111" strokeWidth="1.4" />
          <path d="M9.5 8.5V15.5M14.5 8.5L9.8 15.2M14.5 8.5V13" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#EFF6FF" />
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178C6" />
          <path d="M7 9H13M10 9V17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M17.5 10.5C16.8 9.8 15.5 9.8 14.8 10.5C14 11.2 14.2 12.5 15.2 13C16.2 13.5 16.5 14.5 15.8 15.3C15 16 13.8 15.8 13.2 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#FEFCE8" />
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F7DF1E" />
          <path d="M9 11.5V15.5C9 16.3 8.3 17 7.5 17C6.7 17 6.2 16.5 6 15.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16.5 11.5C15.8 10.8 14.5 10.8 13.8 11.5C13 12.2 13.2 13.5 14.2 14C15.2 14.5 15.5 15.5 14.8 16.3C14 17 12.8 16.8 12.2 16" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "sqlserver":
    case "mssql":
    case "sql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#FFF1F2" />
          <ellipse cx="12" cy="7" rx="6" ry="2.5" stroke="#E11D48" strokeWidth="1.4" />
          <path d="M6 7V12C6 13.4 8.7 14.5 12 14.5C15.3 14.5 18 13.4 18 12V7" stroke="#E11D48" strokeWidth="1.4" />
          <path d="M6 12V17C6 18.4 8.7 19.5 12 19.5C15.3 19.5 18 18.4 18 17V12" stroke="#E11D48" strokeWidth="1.4" />
        </svg>
      );

    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F0FDF4" />
          <ellipse cx="12" cy="7" rx="6" ry="2.5" stroke="#0D9488" strokeWidth="1.4" />
          <path d="M6 7V17C6 18.4 8.7 19.5 12 19.5C15.3 19.5 18 18.4 18 17V7" stroke="#0D9488" strokeWidth="1.4" />
          <path d="M6 12C6 13.4 8.7 14.5 12 14.5C15.3 14.5 18 13.4 18 12" stroke="#0D9488" strokeWidth="1.4" />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F0FDF4" />
          <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="#16A34A" strokeWidth="1.5" />
          <path d="M12 9V15M9 10.5L12 9L15 10.5" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F0FDFA" />
          <path d="M7 11.5C7.8 9 9.8 8 11.5 8C13.8 8 14.2 10 15.5 10.5C16.8 11 17.8 10 18.5 8.5C17.7 11 15.7 12 14 12C11.7 12 11.3 10 10 9.5C8.7 9 7.7 10 7 11.5ZM5.5 15.5C6.3 13 8.3 12 10 12C12.3 12 12.7 14 14 14.5C15.3 15 16.3 14 17 12.5C16.2 15 14.2 16 12.5 16C10.2 16 9.8 14 8.5 13.5C7.2 13 6.2 14 5.5 15.5Z" fill="#0D9488" />
        </svg>
      );

    case "docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F0F9FF" />
          <path d="M4 14C4.5 17 8 18 12 18C17 18 20 15 20.5 13C19.5 13 18.5 13.5 17.5 13C17.5 11 16 10 15 10C14 10 13.5 10.5 13 11H5C4.5 12 4 13 4 14Z" stroke="#0284C7" strokeWidth="1.3" />
          <rect x="7" y="9" width="2" height="2" fill="#0284C7" />
          <rect x="10" y="9" width="2" height="2" fill="#0284C7" />
          <rect x="7" y="6.5" width="2" height="2" fill="#0284C7" />
          <rect x="10" y="6.5" width="2" height="2" fill="#0284C7" />
          <rect x="13" y="9" width="2" height="2" fill="#0284C7" />
        </svg>
      );

    case "git":
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F8FAFC" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58 4 4 7.58 4 12C4 15.54 6.29 18.53 9.47 19.59C9.87 19.66 10.02 19.42 10.02 19.21C10.02 19.02 10.01 18.39 10.01 17.63C8 18 7.52 16.92 7.36 16.47C7.27 16.24 6.88 15.53 6.54 15.34C6.26 15.19 5.86 14.82 6.53 14.81C7.16 14.8 7.61 15.39 7.76 15.63C8.48 16.84 9.63 16.5 10.09 16.29C10.16 15.77 10.37 15.42 10.6 15.22C8.83 15.02 6.98 14.33 6.98 11.29C6.98 10.42 7.29 9.71 7.8 9.15C7.72 8.95 7.44 8.13 7.88 7.03C7.88 7.03 8.55 6.82 10.08 7.86C10.72 7.68 11.4 7.59 12.08 7.59C12.76 7.59 13.44 7.68 14.08 7.86C15.61 6.81 16.28 7.03 16.28 7.03C16.72 8.13 16.44 8.95 16.36 9.15C16.87 9.71 17.18 10.41 17.18 11.29C17.18 14.34 15.32 15.02 13.55 15.22C13.84 15.47 14.09 15.95 14.09 16.7C14.09 17.78 14.08 18.65 14.08 18.92C14.08 19.13 14.23 19.38 14.63 19.3C17.81 18.24 20.1 15.24 20.1 11.71C20 7.58 16.42 4 12 4Z" fill="#111111" />
        </svg>
      );

    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#FFF7ED" />
          <circle cx="12" cy="12" r="7" stroke="#EA580C" strokeWidth="1.4" />
          <path d="M10 12L12.5 9.5M10 12L12.5 14.5M10 12H15" stroke="#EA580C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "redux":
    case "reduxtoolkit":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#FAF5FF" />
          <circle cx="12" cy="12" r="7" stroke="#7C3AED" strokeWidth="1.3" />
          <path d="M9 10C10 8.5 14 8.5 15 10C16 11.5 14 14 12 14C10 14 8 12.5 9 10Z" stroke="#7C3AED" strokeWidth="1.3" />
        </svg>
      );

    case "server":
    case "iisdeployment":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#F3F4F6" />
          <rect x="5" y="6" width="14" height="5" rx="1.5" stroke="#4B5563" strokeWidth="1.4" />
          <rect x="5" y="13" width="14" height="5" rx="1.5" stroke="#4B5563" strokeWidth="1.4" />
          <circle cx="8" cy="8.5" r="1" fill="#5B21F4" />
          <circle cx="8" cy="15.5" r="1" fill="#5B21F4" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#EDE9FE" />
          <circle cx="8" cy="12" r="1.5" fill="#5B21F4" />
          <circle cx="12" cy="12" r="1.5" fill="#5B21F4" />
          <circle cx="16" cy="12" r="1.5" fill="#5B21F4" />
        </svg>
      );
  }
};
