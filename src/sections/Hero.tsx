export default function Hero() {
  return (
    <section id="hero" className="flex items-center bg-white dark:bg-gray-900 min-h-[calc(100dvh-73px)]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white break-keep leading-11 md:leading-snug">팀과 함께 최고의 사용자 경험을 만드는<br />예비 프론트엔드 개발자</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400 break-keep">디자인·백엔드와 명확히 소통하고 <br className="md:hidden" />고성능·안정성을 갖춘 제품을 함께 설계·구현하겠습니다.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/서승준_이력서.pdf" download className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    이력서 다운로드
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="https://velog.io/@dev_alchemist/posts" target="_blank" className="py-3 px-5 sm:ms-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Velog (학습 기록)
                </a>
            </div>
        </div>
    </section>
  );
}