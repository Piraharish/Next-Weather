import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      title="Home"
      className="flex w-16 h-auto items-center gap-x-1"
    >
      <Image
        src="/logo.png"
        alt="icon"
        height={512}
        width={512}
        quality={100}
        loading="eager"
        className="max-md:hidden"
      />
      <h3 className="text-xl font-extrabold tracking-wider">
        Fore<span className="text-primary mr-0">Castify</span>
      </h3>
    </Link>
  );
};

export default Logo;
