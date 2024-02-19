import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import Link from "next/link";
import { AlertTriangle, Github, Info, Linkedin, UserRound } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Footer = () => {
  return (
    <footer className="lg:fixed bottom-0 flex gap-x-2 py-2 px-4 w-full items-center justify-between">
      <HoverCard>
        <HoverCardTrigger>
          <Info
            size={30}
            className="transition-all cursor-pointer text-zinc-500 hover:text-zinc-700"
          />
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1 items-center justify-center flex flex-col text-sm">
            <h4 className="font-bold flex items-center text-lg gap-x-1">
              <AlertTriangle size={20} className="text-yellow-400" />
              Disclaimer
            </h4>
            <p>
              {`The Weather Data is fetched from WeatherAPI and may not
                    reflect actual conditions at all. This app is a work in
                    progress and not meant to replace professional weather apps.
                    Please use responsibly.`}
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <div className="flex gap-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://linkedin.com/in/piraharish"
                target="_blank"
                rel="noopener noreferrer"
                className="link bg-sky-600 text-white"
              >
                <Linkedin size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Let&apos;s Connect</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://piraharish.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link bg-red-500 text-white"
              >
                <UserRound size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Check out my Portfolio</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://github.com/Piraharish"
                target="_blank"
                rel="noopener noreferrer"
                className="link bg-zinc-900 text-white"
              >
                <Github size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Leave a Star</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
};

export default Footer;
