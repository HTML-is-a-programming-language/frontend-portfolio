export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {children}
    </main>
  );
}