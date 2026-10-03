import React from "react";

// Official Git Vector Icon
export const GitIcon = ({ size = 14, color = "#F05032", className = "", style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      flexShrink: 0,
      ...style,
    }}
  >
    <path d="M21.62 10.74L13.26 2.38a1.8 1.8 0 0 0-2.55 0l-1.8 1.8 3.27 3.27a2.16 2.16 0 0 1 2.73 2.74l3.15 3.15a2.14 2.14 0 0 1 1.56 2.1c0 1.2-.97 2.16-2.16 2.16a2.16 2.16 0 0 1-2.16-2.16c0-.58.24-1.12.62-1.5l-2.95-2.95v4.3c.3.2.5.54.5.92a1.8 1.8 0 1 1-3.6 0c0-.38.2-.72.5-.92V9.82a2.18 2.18 0 0 1-1.13-1.9c0-.4.1-.78.3-1.1L6.15 4.02 2.38 7.8a1.8 1.8 0 0 0 0 2.55l8.36 8.36a1.8 1.8 0 0 0 2.55 0l8.33-8.33a1.8 1.8 0 0 0 0-2.55z" />
  </svg>
);

// Official Atlassian Jira Software Vector Icon
export const JiraIcon = ({ size = 14, className = "", style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      flexShrink: 0,
      ...style,
    }}
  >
    <path
      d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z"
      fill="#0052CC"
    />
    <path
      d="M17.294 5.757H5.723a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 18.298 18.243V6.762a1.005 1.005 0 0 0-1.004-1.005z"
      fill="#2684FF"
    />
    <path
      d="M23.017 0H11.446a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 24.021 12.486V1.005A1.005 1.005 0 0 0 23.017 0z"
      fill="#0052CC"
    />
  </svg>
);

// Official Bootstrap Vector Icon
export const BootstrapIcon = ({ size = 14, color = "#7952B3", className = "", style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      flexShrink: 0,
      color: color,
      ...style,
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 3C2.50736 3 1.5 4.00736 1.5 5.25V18.75C1.5 19.9926 2.50736 21 3.75 21H20.25C21.4926 21 22.5 19.9926 22.5 18.75V5.25C22.5 4.00736 21.4926 3 20.25 3H3.75ZM7.5 7.5H12.75C14.4069 7.5 15.75 8.84315 15.75 10.5C15.75 11.4552 15.2974 12.3045 14.5936 12.8466C15.7335 13.3516 16.5 14.5029 16.5 15.75C16.5 17.6553 14.9053 19.25 13 19.25H7.5V7.5ZM9.75 9.5V12H12.5C13.3284 12 14 11.3284 14 10.5C14 9.67157 13.3284 9.5 12.5 9.5H9.75ZM9.75 14V17.25H12.75C13.7165 17.25 14.5 16.4665 14.5 15.5C14.5 14.5335 13.7165 14 12.75 14H9.75Z"
    />
  </svg>
);

// Developer Tools Vector Icon (Wrench & Screwdriver)
export const ToolsIcon = ({ size = 16, color = "#FB923C", className = "", style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      flexShrink: 0,
      ...style,
    }}
  >
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
