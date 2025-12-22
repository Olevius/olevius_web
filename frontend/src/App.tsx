import { ContactSection } from "./components/ContactSection";
import { ChallengeSection } from "./components/ChallengeSection";
import { ExpertsSection } from "./components/ExpertsSection";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { SolutionSection } from "./components/SolutionSection";
import { TestingSection } from "./components/TestingSection";
import {
  challengeItems,
  footerLinks,
  navLinks,
  solutionFeatures,
  teamMembers,
  testingStats,
} from "./data/content";

export const App = () => (
  <div className="bg-background-light text-text-light font-sans transition-colors duration-300 antialiased selection:bg-black selection:text-[#dfffce]">
    <Navigation links={navLinks} />
    <main>
      <HeroSection />
      <ChallengeSection items={challengeItems} />
      <SolutionSection features={solutionFeatures} />
      <TestingSection stats={testingStats} />
      <ExpertsSection members={teamMembers} />
      <ContactSection footerLinks={footerLinks} />
    </main>
  </div>
);
