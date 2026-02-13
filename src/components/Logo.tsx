export default function Logo({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="90" fill="url(#logo-gradient)" />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1b9bd8', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#7dc242', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff8c00', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* F Letter */}
      <text
        x="100"
        y="135"
        fontSize="120"
        fontWeight="900"
        textAnchor="middle"
        fill="url(#text-gradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        F
      </text>
    </svg>
  );
}