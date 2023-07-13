import Career from "@/components/Career";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Personality from "@/components/Personality";
import Project from "@/components/Project";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <main className="w-screen h-full bg-bgColor flex-center flex-col relative animate-fadeIn">
      <Header />
      <Main />
      <Personality />
      <Career />
      <Stack />
      <Project />
      <Footer />
    </main>
  );
}
