import HeroCard from "@/components/HeroCard";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-[40%] lg:-top-[10%] lg:left-[25%] md:-top-[10%] md:left-[15%]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <section className="mx-auto mt-16 lg:mt-32 p-2">
        <Card className="glass shadow-2xl pt-4 border-none">
          <HeroCard />
          <CardFooter>
            <CardDescription className="flex flex-col items-center text-center">
              {`Your current location wil be displayed on the App & used for fetching Real time weather.`}
            </CardDescription>
          </CardFooter>
        </Card>
      </section>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-[10%] lg:-top-[10%] lg:left-[30%] md:top-[2%] md:left-[55%]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </main>
  );
}
