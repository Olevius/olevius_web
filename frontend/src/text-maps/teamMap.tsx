export const teamTextMap = {
  levi: {
    title: "Levi:",
    content:
      "Levi focuses on the chemistry and materials side of the project, particularly in developing and testing the PDMS pouch and fluid interface that enables the fiber-optic sensor to detect blood pressure changes. His work ensures the sensor has the right mechanical and chemical properties to translate pulse-induced pressure variations into reliable optical signals, while also exploring alternative polymers and materials for durability and comfort in a wearable device.",
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
