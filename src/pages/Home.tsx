import Layout from '../components/layout/Layout'
import HeroSection from '../sections/HeroSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'
import AboutSection from '../sections/AboutSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
    </Layout>
  )
}