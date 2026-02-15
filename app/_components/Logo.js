import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.jpg"
        width={60}
        height={60}
        style={{
          borderRadius: "50%",
          margin: "10px 20px",
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
