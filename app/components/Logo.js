import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logos.jpg"
        height="60"
        width="60"
        alt="The Freedom Dance Studio logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Freedom Dance Studio
      </span>
    </Link>
  );
}

export default Logo;
