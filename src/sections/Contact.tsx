import { contacts } from "@/data/contacts";
import ContactItem from "@/components/ContactItem";

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">📮 Contact</h2>
  <div className="max-w-xl mx-auto text-center space-y-4 text-sm sm:text-base">
    <p>
      이메일:{" "}
      <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">
        youremail@example.com
      </a>
    </p>
    <p>
      GitHub:{" "}
      <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        github.com/yourname
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        linkedin.com/in/yourname
      </a>
    </p>
  </div>
</section>

  );
}
