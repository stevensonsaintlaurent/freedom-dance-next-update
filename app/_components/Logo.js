import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width={60}
        quality={100}
        height={60}
        style={{
          borderRadius: "50%",
        }}
        alt="The Freedom Dance Studio logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Freedom Dance Studio
      </span>
    </Link>
  );
}

export default Logo;
