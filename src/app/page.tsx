import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { aboutContent, headerData, projects } from "./data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header {...headerData} />
      <main id="main-content" className={styles.main}>
        <AboutSection content={aboutContent} />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
