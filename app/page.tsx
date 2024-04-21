import ContactPage from "@/components/main/ContactPage";
import Hero from "@/components/main/Hero";
import Offerings from "@/components/main/Offerings";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills"; 

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col gap-20 h-auto">
      <Hero/> 
      <Offerings/>
      <Skills/>
      <Projects/>
      <ContactPage/>
    </div>
   </main>
  );
}
