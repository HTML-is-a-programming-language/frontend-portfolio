export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 로고 */}
        <h1 className="text-lg font-semibold text-zinc-800 dark:text-white tracking-tight">
          프론트엔드 포트폴리오
        </h1>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#projects" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
