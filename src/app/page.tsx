import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <Hero />
        {/* 여기에 추가 요소들… */}
      </main>
    </>
  );
}
