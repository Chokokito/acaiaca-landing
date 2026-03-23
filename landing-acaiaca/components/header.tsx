import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full justify-center px-6 pt-8 sm:px-10 sm:pt-10">
      <Image
        src="/Logo.png"
        alt="Acaiaca Pre-vestibular"
        width={180}
        height={56}
        priority
        className="h-auto w-[150px] sm:w-[180px]"
      />
    </header>
  );
}
