export const bodyTextMap = {
  why: {
    title: "Why?",
    content:
      "Current off-the-shelf blood pressure measurement solutions are sorely lacking in portability, accuracy, or continuity. Can an optical fiber-based wearable sensor deliver continuous, non-invasive blood pressure monitoring with clinical-grade accuracy and real-time data transmission?",
  },
  how: {
    title: "How?",
    content:
      "Our device differs fundamentally from smartwatches like the Apple Watch by providing direct, continuous blood pressure measurement using optical fiber compression, rather than relying on indirect pulse transit time estimates. While smartwatches require frequent calibration and rely on population-averaged models with limited accuracy, our sensor captures true pulse waveforms via a fluid-coupled optical system, enabling machine learning models to extract systolic and diastolic pressures with FDA-grade precision (±3 mmHg). This allows for more reliable, individualized readings without cuffs, recalibration, or positional sensitivity—delivering medical-grade performance in a compact, wearable form.",
  },
  whatsNext: {
    title: "Whats Next?",
    content:
      "While we can’t reveal all the details just yet, our continuous blood pressure sensor fuses precision optical sensing with smart signal interpretation. At the heart of our design is a fluid-filled PDMS pouch containing an air-core optical fiber union. As your pulse presses against the pouch, it alters light transmission through the fiber—subtle changes that our photodetector captures in real time. From there, our software takes over. Using advanced signal processing and machine learning, we extract meaningful features from the waveform—like systolic and diastolic pressure—delivering accurate, continuous readings without the discomfort of a cuff or the need for constant recalibration. Our team brings together expertise in hardware/computer engineering, applied chemistry and physics, and wearable product design—alongside two software engineers with backgrounds in data science and full-stack development. Together, we’re building a clinically robust system that’s wearable, intuitive, and ready for the real world. We’re driven by a shared mission to make vital health insights accessible—seamlessly, continuously, and comfortably.",
  },
} as const;
