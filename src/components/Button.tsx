interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
}

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}
