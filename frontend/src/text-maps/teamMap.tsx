export const teamTextMap = {
  levi: {
    title: "Levi:",
    content:
      "Levi leads the opto-mechanical design of the sensing module and wearable housing. He owns the geometry and tolerances of the fiber-to-fiber joint, the coupling optics to the 850 nm source and photodiode, and the PDMS-pouch mechanics that transmit arterial pulse pressure into a repeatable optical loss signal. This includes custom fiber coupling (no off-the-shelf ferrules given size limits), alignment and gap control in the polyethylene sleeve, mold design and wall-thickness targets for a glycerol-filled PDMS pouch, and a compact, serviceable enclosure/strap that maintains consistent artery contact without sacrificing comfort. He defines benchtop validation for pressure–intensity transfer, oversees durability testing (creep, strap-load shifts), and feeds constraints to electronics/ML for power, sampling, and motion-robust estimation.",
    offset: 1,
  },
  andrew: {
    title: "Andrew:",
    content:
      "Andrew leads the hardware integration efforts, concentrating on the mechanical design and electronics packaging that transform the prototype into a practical wearable form. He is responsible for embedding the optical fibers, photodetector, and wireless modules into a compact watch-like device that is comfortable, robust, and power-efficient. His work bridges the gap between lab-scale testing and a functional, user-ready product.",

    offset: 1,
  },
  jp: {
    title: "Justin:",
    content:
      "Justin works on the user interface and database systems that support the device’s functionality. He designs the companion mobile application that connects to the wearable via Bluetooth/NFC, enabling continuous monitoring and visualization of blood pressure trends. He also ensures that data storage and transmission meet requirements for usability and potential healthcare integration, creating a smooth link between the hardware sensor and its end users.",

    offset: 1,
  },
  matthew: {
    title: "Matthew:",
    content:
      "Matthew leads the data science and optimization side of the project, focusing on developing the machine learning model that translates raw optical waveforms into accurate blood pressure readings. He is responsible for training and refining algorithms using both collected and open-source medical datasets, while optimizing them for real-time analysis on wearable hardware. His work ensures the device achieves clinically acceptable accuracy and scalability.",
    offset: 1,
  },
} as const;
