export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white border-b sticky top-0 z-50">
        <h1 className="text-xl font-bold">프론트엔드 포트폴리오</h1>
        <nav className="flex gap-6">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </nav>
    </header>
  );
}