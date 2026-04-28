"use client";
import SocialIcons from "./SocialIcons";

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <div className="flex justify-center mb-8">
          <img
            src="/images/darklogo.png"
            alt="Neversore Logo"
            width={240}
            height={80}
            className="object-contain mx-auto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-zinc-900 mb-2 tracking-tight">Coming Soon</h1>
        <p className="text-zinc-600 text-center mb-8 text-base md:text-lg">Something exciting is coming. Stay updated.</p>
        {/* Notification form removed as requested */}
        <SocialIcons />
      </div>
    </div>
  );
}
