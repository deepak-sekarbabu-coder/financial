interface LogoProps {
  size?: number;
  bg?: string;
}

export default function Logo({ size = 40, bg = "#06244d" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="8" fill={bg} />
      <path
        d="M12 28V16l8-6 8 6v12"
        stroke="#2f8b3b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 28v-6h8v6"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="16" r="2" fill="#ffffff" />
    </svg>
  );
}
