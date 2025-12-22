export type NavLink = {
  label: string;
  href: string;
};

export type ChallengeItem = {
  icon: string;
  title: string;
  description: string;
};

export type SolutionFeature = {
  icon: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export type TestingStat = {
  label: string;
  value: string;
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#problem" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const challengeItems: ChallengeItem[] = [
  {
    icon: "warning",
    title: "Smartwatch Inaccuracy",
    description: "No direct pulse measurements means unreliable blood pressure data.",
  },
  {
    icon: "fitness_center",
    title: "Hardware Fatigue",
    description: "Heavy, non-portable gear limits where you can go.",
  },
  {
    icon: "wifi_off",
    title: "Lack of Connectivity",
    description: "Disconnected devices leads to unmonitored blood pressure data.",
  },
];

export const solutionFeatures: SolutionFeature[] = [
  {
    icon: "luggage",
    title: "Extreme Portability",
    description:
      "Clinically graded arterial blood pressure directly from your wrist. Go where the data is.",
    cta: { label: "Explore specs", href: "#" },
  },
  {
    icon: "gps_fixed",
    title: "Lab-Grade Accuracy",
    description:
      "Our photodetector fiber optic sensor delivers results within a ±5 mmHg margin of error (systolic and diastolic).",
    cta: { label: "View comparison", href: "#" },
  },
  {
    icon: "bolt",
    title: "Instant Deployment",
    description: "Zero warm-up time. Turn it on, and you are ready to measure in under 30 seconds.",
    cta: { label: "Watch demo", href: "#" },
  },
];

export const testingStats: TestingStat[] = [
  { value: "±5 mmHg", label: "Margin of error (systolic and diastolic)" },
  { value: "10x", label: "Faster Setup" },
  { value: "-85%", label: "Weight Reduction" },
  { value: "24h", label: "Battery Life" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Levi Brunelle",
    role: "Head of R&D",
    description: "15 years in sensor development at major aerospace firms.",
    imageSrc: "https://cdn.jsdelivr.net/npm/lucide-static@0.321.0/icons/flask-conical.svg",
  },
  {
    name: "Matthew Athansopoulos",
    role: "Head of Data Science",
    description: "Former field surveyor who knows the pain of heavy gear.",
    imageSrc: "https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/chart-line.svg",
  },
  {
    name: "Andrew Hansraj",
    role: "Chief hardware engineer",
    description: "Patent holder for 12 precision measurement technologies.",
    imageSrc: "https://cdn.jsdelivr.net/npm/lucide-static@0.321.0/icons/cpu.svg",
  },
  {
    name: "Justin Mak",
    role: "Frontend and UI/UX Lead",
    description: "15 years in sensor development at major aerospace firms.",
    imageSrc: "https://cdn.jsdelivr.net/npm/lucide-static@0.321.0/icons/palette.svg",
  },
];

export const footerLinks: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];
