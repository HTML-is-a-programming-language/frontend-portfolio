"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// 작은 유틸: 텍스트를 문자 단위로 분해해 stagger 애니메이션
function SplitText({
  text,
  className,
  inDuration = 0.6,
  outDuration = 0.4,
  stagger = 0.035,
  easing = "easeOut",
}: {
  text: string;
  className?: string;
  inDuration?: number;
  outDuration?: number;
  stagger?: number;
  easing?: any;
}) {
  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      exit="exit"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, ease: easing },
        },
        exit: {
          transition: { staggerChildren: stagger, ease: easing, staggerDirection: -1 },
        },
      }}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          variants={{
            hidden: { y: `0.6em`, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration: inDuration, ease: easing } },
            exit: { y: `-0.6em`, opacity: 0, transition: { duration: outDuration, ease: easing } },
          }}
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

// 단계: 0=first in, 1=first out, 2=second in, 3=second out, 4=done
export default function SplashIntro({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0);
  const [overlayGone, setOverlayGone] = useState(false);
  const prefersReduced = useReducedMotion();

  const first = "퍼블리셔에서";
  const second = "프론트엔드 개발자로";

  // 타이밍 계산(문자 수 기반)
  const cfg = {
    inDuration: 0.6,
    outDuration: 0.45,
    stagger: 0.035,
    hold: 0.5, // 각 문구가 다 나타난 뒤 잠깐 유지
    easing: "easeOut" as const,
  };

  const firstTotalIn = first.length * cfg.stagger + cfg.inDuration;
  const secondTotalIn = second.length * cfg.stagger + cfg.inDuration;

  useEffect(() => {
    if (prefersReduced) {
      // 모션 저감: 오버레이 건너뛰기
      setOverlayGone(true);
      return;
    }

    // 세션 첫 방문은 약간만 더 여유(선택 사항)
    const visited = sessionStorage.getItem("portfolioVisited");
    sessionStorage.setItem("portfolioVisited", "1");

    let t1: any, t2: any, t3: any, t4: any;

    // 0 -> 1 (first in 끝, hold 후 first out)
    t1 = setTimeout(() => setStep(1), firstTotalIn * 1000 + cfg.hold * 1000);

    // 1 -> 2 (first out 애니 끝난 뒤 second in)
    t2 = setTimeout(() => setStep(2), (firstTotalIn + cfg.hold + cfg.outDuration + first.length * cfg.stagger) * 1000);

    // 2 -> 3 (second in 끝, hold 후 second out)
    t3 = setTimeout(() => setStep(3), (firstTotalIn + cfg.hold + cfg.outDuration + first.length * cfg.stagger + secondTotalIn + cfg.hold) * 1000);

    // 3 -> 4 (second out 끝나면 오버레이 페이드아웃)
    t4 = setTimeout(() => setStep(4), (
      firstTotalIn + cfg.hold + cfg.outDuration + first.length * cfg.stagger +
      secondTotalIn + cfg.hold + cfg.outDuration + second.length * cfg.stagger
    ) * 1000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced]);

  useEffect(() => {
    if (step === 4) {
      const t = setTimeout(() => setOverlayGone(true), 420); // 오버레이 자체 페이드 시간
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div className="relative">
      {children}

      <AnimatePresence>
        {!overlayGone && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-neutral-950"
            initial={{ opacity: 1 }}
            animate={{ opacity: step === 4 ? 0 : 1 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            aria-label="Intro splash"
          >
            {/* 중앙 컨텐츠 */}
            <div className="px-6 text-center">
              <AnimatePresence mode="popLayout">
                {(step === 0 || step === 1) && (
                  <motion.div key="first" className="leading-tight">
                    <SplitText
                      text={first}
                      className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white"
                      inDuration={cfg.inDuration}
                      outDuration={cfg.outDuration}
                      stagger={cfg.stagger}
                    />
                  </motion.div>
                )}

                {(step === 2 || step === 3) && (
                  <motion.div key="second" className="leading-tight">
                    <SplitText
                      text={second}
                      className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white"
                      inDuration={cfg.inDuration}
                      outDuration={cfg.outDuration}
                      stagger={cfg.stagger}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}