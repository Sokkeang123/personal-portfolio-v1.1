import AboutPage from "./about/page";
import Education from "./education/page";

export default function Home() {
  return (
    <main>
      <section id="about">
        <AboutPage />
      </section>
      <section id="education">
        <Education />
      </section>
    </main>
  );
}
