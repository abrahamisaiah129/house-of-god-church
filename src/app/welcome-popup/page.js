import { Suspense } from "react";
import WelcomeVideoPopup from "../../components/WelcomeVideoPopup";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome Popup — Demo Page</h1>
        <p className="mb-6 text-gray-300">
          This page demonstrates the improved welcome popup. The popup will open
          automatically when the page loads. Use the top controls to minimize,
          fullscreen, or close the popup. Press <kbd>Esc</kbd>
          to close and <kbd>m</kbd> to toggle minimize.
        </p>

        <section className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">What to test</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Popup opens on load (600ms delay)</li>
            <li>
              Backdrop click and <kbd>Esc</kbd> close the popup
            </li>
            <li>Minimize shows a small player bottom-right</li>
            <li>Fullscreen toggles and fills the viewport</li>
            <li>If no video source, the poster with CTA is shown</li>
          </ul>
        </section>

        <p className="text-sm text-gray-400 mb-8">
          Render area below — popup component will mount itself.
        </p>

        {/* Mount the popup component inside Suspense because it uses useSearchParams */}
        <Suspense fallback={<div className="text-white">Loading popup...</div>}>
          <WelcomeVideoPopup />
        </Suspense>
      </div>
    </main>
  );
}
