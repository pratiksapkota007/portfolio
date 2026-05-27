import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * page.tsx = your homepage (route: /)
 *
 * Each <Component /> below is a "section" of your one-page portfolio.
 * To reorder sections, just move these lines up or down.
 * To remove a section, delete its line.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
