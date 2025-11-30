export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        {/* Contact */}
        <p className="text-sm">
          Contact: <span className="font-medium">065-6147429</span>
        </p>

        {/* Email */}
        <p className="text-sm">
          Email:{" "}
          <a
            href="mailto:kgmokgobi@gmail.com"
            className="text-blue-400 hover:underline"
          >
            kgmokgobi@gmail.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400 pt-2">
          © 2025 | <span className="font-semibold">KAGISO</span>
        </p>
      </div>
    </footer>
  );
}
