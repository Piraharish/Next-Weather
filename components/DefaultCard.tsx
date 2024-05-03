import { MotionDiv, MotionP, MotionSpan } from "@/components/motions";
import Image from "next/image";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { PiPlantFill } from "react-icons/pi";

const DefaultCard = () => {
  return (
    <div className="flex flex-col items-center h-96 justify-center gap-y-1">
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          height={512}
          width={512}
          quality={100}
          loading="eager"
          className="size-28"
        />
      </MotionDiv>
      <MotionP
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.39,
        }}
        className="font-semibold text-base text-foreground text-center flex-wrap"
      >
        Search a place to get the weather report
      </MotionP>
      <MotionSpan
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.45,
        }}
        className="flex items-center text-sm mt-px text-center justify-center flex-wrap"
      >
        Plant
        <PiPlantFill className="size-5 mx-1 text-emerald-600" />
        trees, save
        <FcGlobe className="size-5 mx-1" /> earth, secure
        <FaHandsHoldingChild className="size-5 mx-1 text-pink-400" />
        future.
      </MotionSpan>
    </div>
  );
};

export default DefaultCard;
