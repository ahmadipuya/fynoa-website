export function Logo({ className = "w-40 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/50">
        <span className="text-xl font-black text-white">F</span>
      </div>
      <span className="text-2xl font-black bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
        FYNOA
      </span>
    </div>
  );
}