'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/Button';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState<string>('');

  // .env.local
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // --- 간단 스팸 방지: 허니팟 필드(사용자에겐 숨김) ---
    if ((formData.get('company') as string)?.length) {
      // 봇으로 간주: 성공처럼 처리하고 실제 전송은 생략
      setStatus('success');
      setMsg('감사합니다. 메시지를 잘 받았습니다!');
      formRef.current.reset();
      return;
    }

    // --- 기본 유효성 체크 ---
    const name = String(formData.get('from_name') || '').trim();
    const email = String(formData.get('from_email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    if (!name || !email || !message) {
      setStatus('error');
      setMsg('이름, 이메일, 메시지를 모두 입력해주세요.');
      return;
    }

    setStatus('loading');
    setMsg('');

    // 템플릿으로 보낼 추가 메타
    formData.set('user_agent', navigator.userAgent);
    formData.set('page_path', window.location.pathname);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('success');
      setMsg('감사합니다. 메시지를 잘 받았습니다!');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMsg('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const isLoading = status === 'loading';

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
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
          noValidate
        >
          {/* 허니팟(봇만 채움) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                이름
              </label>
              <input
                id="name"
                name="from_name"
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
                name="from_email"
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
              name="message"
              placeholder="프로젝트/채용 관련 상세 내용을 작성해주세요."
              required
              className="h-40 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400
                         focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:ring-zinc-600"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            {/* 상태 메시지 */}
            <p
              role="status"
              aria-live="polite"
              className={[
                'text-sm',
                status === 'success' ? 'text-emerald-600 dark:text-emerald-400' : '',
                status === 'error' ? 'text-rose-600 dark:text-rose-400' : '',
              ].join(' ')}
            >
              {msg}
            </p>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? '전송 중…' : '보내기'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
