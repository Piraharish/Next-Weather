import HeroCard from "@/components/HeroCard";
import { MotionDiv } from "@/components/motions";

export default function Home() {
  return (
    <main className="max-w-3xl min-h-[calc(100vh-7rem)] mt-28 max-sm:mb-8 mx-auto px-4 flex items-center justify-center">
      <section id="hero" className="flex w-full items-center justify-center">
        <MotionDiv
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1,
          }}
          className="max-w-xl w-full flex flex-col min-h-[calc(100vh-12rem)] backdrop-blur-md bg-gradient-to-tl from-zinc-950/10 to-yellow-950/5"
        >
          <HeroCard />
        </MotionDiv>
      </section>
    </main>
  );
}
