export interface Contact {
  platform: string;
  url: string;
  icon: string;
  displayText: string;
}

export const contacts: Contact[] = [
  {
    platform: "Email",
    url: "mailto:seungjun.dev@gmail.com",
    icon: "✉️",
    displayText: "seungjun.dev@gmail.com",
  },
  {
    platform: "GitHub",
    url: "https://github.com/HTML-is-a-programming-language",
    icon: "🐙",
    displayText: "github.com/HTML-is-a-programming-language",
  },
  {
    platform: "Velog",
    url: "https://velog.io/@seungjun",
    icon: "✍️",
    displayText: "velog.io/@seungjun",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/seungjun",
    icon: "💼",
    displayText: "linkedin.com/in/seungjun",
  },
];
