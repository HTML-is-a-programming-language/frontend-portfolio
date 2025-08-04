import { Contact } from "@/data/contacts";

export default function ContactItem({ contact }: { contact: Contact }) {
  return (
    <a
      href={contact.url}
      target="_blank"
      className="flex items-center gap-3 px-5 py-4 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 hover:shadow transition"
    >
      <span className="text-2xl">{contact.icon}</span>
      <span className="text-sm text-gray-800 break-all">{contact.displayText}</span>
    </a>
  );
}
