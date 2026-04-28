import Image from "next/image";

export default function NeversoreLogo() {
  return (
    <div className="flex justify-center mb-8">
      <Image
        src="/neversore-logo.png"
        alt="Neversore Logo"
        width={240}
        height={80}
        priority
        className="object-contain"
      />
    </div>
  );
}
