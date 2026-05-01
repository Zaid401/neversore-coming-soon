import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 mt-8" aria-label="Social Media Links">
      <a
        href="https://www.instagram.com/be.neversore?igsh=MWF4cTRmNDN1c3dwNA%253D%253"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-zinc-500 hover:text-pink-500 transition-colors duration-200 text-2xl rounded-full p-2 hover:bg-zinc-100 shadow-sm"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="text-zinc-500 hover:text-green-500 transition-colors duration-200 text-2xl rounded-full p-2 hover:bg-zinc-100 shadow-sm"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
