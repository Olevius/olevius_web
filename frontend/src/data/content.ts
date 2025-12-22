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
  { value: "±5", label: "mmHg Accuracy" },
  { value: "10x", label: "Faster Setup" },
  { value: "-85%", label: "Weight Reduction" },
  { value: "24h", label: "Battery Life" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Levi Brunelle",
    role: "Head of R&D",
    description: "Levi focuses on the chemistry and materials side of the project, particularly in developing and testing the PDMS pouch and fluid interface that enables the fiber-optic sensor to detect blood pressure changes. His work ensures the sensor has the right mechanical and chemical properties to translate pulse-induced pressure variations into reliable optical signals, while also exploring alternative polymers and materials for durability and comfort in a wearable device.",
    imageSrc: new URL("../assets/team/levi.png", import.meta.url).href,
  },
  {
    name: "Matthew Athansopoulos",
    role: "Head of Data Science",
    description: "Matthew leads the data science and optimization side of the project, focusing on developing the machine learning model that translates raw optical waveforms into accurate blood pressure readings. He is responsible for training and refining algorithms using both collected and open-source medical datasets, while optimizing them for real-time analysis on wearable hardware. His work ensures the device achieves clinically acceptable accuracy and scalability.",
    imageSrc: new URL("../assets/team/matthew.png", import.meta.url).href,
  },
  {
    name: "Andrew Hansraj",
    role: "Chief hardware engineer",
    description: "Andrew leads the hardware integration efforts, concentrating on the mechanical design and electronics packaging that transform the prototype into a practical wearable form. He is responsible for embedding the optical fibers, photodetector, and wireless modules into a compact watch-like device that is comfortable, robust, and power-efficient. His work bridges the gap between lab-scale testing and a functional, user-ready product.",
    imageSrc: new URL("../assets/team/andrew.png", import.meta.url).href,
  },
  {
    name: "Justin Mak",
    role: "Frontend and UI/UX Lead",
    description: "Justin works on the user interface and database systems that support the device’s functionality. He designs the companion mobile application that connects to the wearable via Bluetooth/NFC, enabling continuous monitoring and visualization of blood pressure trends. He also ensures that data storage and transmission meet requirements for usability and potential healthcare integration, creating a smooth link between the hardware sensor and its end users.",
    imageSrc: new URL("../assets/team/jp.png", import.meta.url).href,
  },
];

export const footerLinks: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];
