import Experience from "@/components/sections/Experience";
import Intro from "@/components/sections/Intro";
import RecentActivity from "@/components/sections/RecentActivity";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Experience />
      <RecentActivity />
    </main>
  );
}
