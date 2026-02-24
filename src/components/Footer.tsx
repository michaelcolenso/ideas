import { store } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {store.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          {store.social.twitter && (
            <a
              href={store.social.twitter}
              className="hover:text-gray-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          )}
          {store.social.github && (
            <a
              href={store.social.github}
              className="hover:text-gray-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          <a href="mailto:hello@example.com" className="hover:text-gray-900 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
