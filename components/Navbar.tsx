import { MotionDiv } from "@/components/motions";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuUser2 } from "react-icons/lu";

const Socials = [
  {
    name: "Github",
    icon: <LuGithub className="size-5" />,
    link: "https://github.com/Piraharish/Next-Weather",
  },
  {
    name: "LinkedIn",
    icon: <LuLinkedin className="size-5" />,
    link: "https://linkedin.com/in/piraharish",
  },
  {
    name: "Portfolio",
    icon: <LuUser2 className="size-5" />,
    link: "https://piraharish.vercel.app",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 bg-background/60 backdrop-blur z-10">
      <div className="flex items-center justify-between max-w-5xl p-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Logo />
        </MotionDiv>
        <div className="flex items-center gap-x-2">
          {Socials.map((social, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.3 + index * 0.1,
              }}
              className="text-primary p-1.5 rounded duration-300 first:text-white even:text-sky-500 hover:text-foreground hover:bg-gray-300/10"
            >
              <Link
                href={social.link}
                aria-label={`Link for ${social.name}`}
                title={`Link for ${social.name}`}
                target="_blank"
                rel="noopener noreferrer preconnect"
                className="flex items-center gap-x-6"
              >
                {social.icon}
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
