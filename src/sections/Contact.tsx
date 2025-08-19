import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container min-h-[calc(100dvh-73px)]"
    >
      <SectionTitle>📬 연락하기</SectionTitle>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="이름"
          className="w-full px-4 py-2 rounded bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-white"
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-2 rounded bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-white"
        />
        <textarea
          placeholder="메시지"
          className="w-full px-4 py-2 rounded bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-white h-40 resize-none"
        />
        <Button>보내기</Button>
      </form>
    </section>
  );
}
