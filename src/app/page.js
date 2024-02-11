import Countdown from "@/components/Countdown";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main className="overflow-hidden select-none flex h-screen flex-col items-center justify-between">
      <Heading />
      <Countdown />
    </main>
  );
}
