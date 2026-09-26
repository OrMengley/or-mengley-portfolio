import * as React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function ReactIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <path d="M18.5 10.5H9.5V13H12.7V22.5H15.3V13H18.5V10.5Z" fill="white" />
      <path
        d="M24 13.8C23.2 13.2 22.2 12.8 21.1 12.8C19.6 12.8 18.7 13.5 18.7 14.6C18.7 15.6 19.4 16.1 20.8 16.7L21.6 17C23.5 17.8 24.6 18.8 24.6 20.6C24.6 22.8 22.8 24.2 20.2 24.2C18.7 24.2 17.3 23.6 16.3 22.7L17.2 20.8C18 21.6 19.1 22.1 20.2 22.1C21.6 22.1 22.3 21.4 22.3 20.5C22.3 19.5 21.6 19 20.3 18.4L19.4 18C17.7 17.3 16.8 16.3 16.8 14.7C16.8 12.7 18.5 11 21 11C22.3 11 23.4 11.4 24.2 12L24 13.8Z"
        fill="white"
      />
    </svg>
  );
}

export function NextJsIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <circle cx="90" cy="90" r="90" fill="currentColor" className="text-foreground" />
      <path
        d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
        fill="currentColor"
        className="text-background"
      />
      <path d="M115 54H127V126H115V54Z" fill="currentColor" className="text-background" />
    </svg>
  );
}

export function FirebaseIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <path
        d="M5.6 24.2L8.9 3.5C9 2.8 9.9 2.5 10.4 3.1L15.3 12.3L5.6 24.2Z"
        fill="#FFA000"
      />
      <path
        d="M17.8 14.8L20.6 9.5C21 8.8 22 8.9 22.3 9.7L26.4 24.2L17.8 14.8Z"
        fill="#F57C00"
      />
      <path
        d="M5.6 24.2L16 30.1C16.3 30.3 16.7 30.3 17 30.1L26.4 24.2L22.6 3.8C22.4 3 21.4 2.8 20.9 3.4L5.6 24.2Z"
        fill="#FFCA28"
      />
    </svg>
  );
}

export function VueIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <path d="M2 4L16 28L30 4H24L16 17.5L8 4H2Z" fill="#42B883" />
      <path d="M8 4L16 17.5L24 4H18.5L16 8.5L13.5 4H8Z" fill="#35495E" />
    </svg>
  );
}

export function FlutterIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <path d="M18.5 2L5 15.5L9.2 19.7L26.9 2H18.5Z" fill="#47C5FB" />
      <path d="M18.5 14L10.3 22.2L14.5 26.4L26.9 14H18.5Z" fill="#02569B" />
      <path d="M14.5 26.4L18.7 30.6H27.1L18.7 22.2L14.5 26.4Z" fill="#0175C2" />
    </svg>
  );
}

export function RestApiIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <rect
        x="2"
        y="4"
        width="28"
        height="24"
        rx="6"
        className="fill-accent/10 stroke-accent/40"
        strokeWidth="1.5"
      />
      <path
        d="M8 19V13H11C11.8 13 12.5 13.7 12.5 14.5C12.5 15.3 11.8 16 11 16H8M10.5 16L12.5 19"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 19V13H20M15.5 16H19M15.5 19H20"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 18.2C23.4 18.7 24 19 24.8 19C25.7 19 26.5 18.3 26.5 17.5C26.5 16.7 25.8 16.3 24.8 16C23.8 15.7 23 15.3 23 14.5C23 13.7 23.8 13 24.8 13C25.5 13 26.1 13.3 26.5 13.8"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoLangIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <rect
        x="2"
        y="4"
        width="28"
        height="24"
        rx="6"
        fill="#00ADD8"
        fillOpacity="0.12"
        stroke="#00ADD8"
        strokeWidth="1.5"
      />
      <text
        x="16"
        y="21"
        fill="#00ADD8"
        fontSize="13"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="0.8"
      >
        GO
      </text>
    </svg>
  );
}

export function TailwindIcon({ className = 'w-7 h-7', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
    >
      <path
        d="M16 8C12.5 8 10.3 9.7 9.4 13.2C10.8 11.5 12.5 10.9 14.6 11.5C15.8 11.9 16.7 12.8 17.7 13.8C19.3 15.4 21.1 17.2 25 17.2C28.5 17.2 30.7 15.5 31.6 12C30.2 13.7 28.5 14.3 26.4 13.7C25.2 13.3 24.3 12.4 23.3 11.4C21.7 9.8 19.9 8 16 8ZM9.4 17.2C5.9 17.2 3.7 18.9 2.8 22.4C4.2 20.7 5.9 20.1 8 20.7C9.2 21.1 10.1 22 11.1 23C12.7 24.6 14.5 26.4 18.4 26.4C21.9 26.4 24.1 24.7 25 21.2C23.6 22.9 21.9 23.5 19.8 22.9C18.6 22.5 17.7 21.6 16.7 20.6C15.1 19 13.3 17.2 9.4 17.2Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function GithubIcon({ className = 'w-4 h-4', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-4 h-4', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

