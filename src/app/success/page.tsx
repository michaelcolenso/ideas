import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Payment successful!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for your purchase. Your download link has been sent to
            your email. Check your inbox (and spam folder, just in case).
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-8">
            <h3 className="font-semibold mb-2">What happens next?</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs bg-gray-200 rounded px-1.5 py-0.5 mt-0.5">
                  1
                </span>
                Check your email for the download link
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs bg-gray-200 rounded px-1.5 py-0.5 mt-0.5">
                  2
                </span>
                Download and unzip the files
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs bg-gray-200 rounded px-1.5 py-0.5 mt-0.5">
                  3
                </span>
                Follow the included setup guide
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs bg-gray-200 rounded px-1.5 py-0.5 mt-0.5">
                  4
                </span>
                Ship something great
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="text-blue-600 hover:text-blue-500 font-medium transition"
          >
            &larr; Back to store
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
