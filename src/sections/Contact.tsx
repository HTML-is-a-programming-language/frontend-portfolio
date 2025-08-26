import Button from "@/components/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 min-h-[calc(100dvh-73px)] box-border"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-screen-xl px-6">
        {/* 섹션 타이틀 */}
        <div className="mb-8 text-center">
          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            연락하기
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            협업 제안이나 채용 문의가 있다면 아래 양식을 통해 연락주세요.
          </p>
        </div>

        {/* 카드형 폼 */}
        <form
          className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
          noValidate
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                이름
              </label>
              <input
                id="name"
                type="text"
                placeholder="홍길동"
                required
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400
                           focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400
                           focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-zinc-600"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              메시지
            </label>
            <textarea
              id="message"
              placeholder="프로젝트/채용 관련 상세 내용을 작성해주세요."
              required
              className="h-40 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400
                         focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-zinc-600"
            />
          </div>

          <div className="flex items-center justify-end pt-2">
            <Button type="submit">보내기</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
