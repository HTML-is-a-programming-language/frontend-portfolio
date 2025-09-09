import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // 필요하면 추가 커스텀 props 정의
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="shrink-0 rounded-xl bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
}
