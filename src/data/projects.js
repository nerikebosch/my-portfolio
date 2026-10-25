export const portfolioProjects = [
  {
    id: "cscr-oct-analyzer-thesis",
    title: "CSCR OCT Analyzer",
    category: "Medical Imaging",
    description: "Image processing system designed for temporal evaluation of retinal microstructure changes in CSCR. Implements custom mathematical filtering and segmentation pipelines to isolate OCT biomarker layers.",
    image: "/images/projects/cscr-oct-analyzer.png",
    techStack: ["MATLAB", "Computer Vision", "Signal Processing"],
    githubLink: "https://github.com/nerikebosch/CSCR_OCT_Analyzer",
    liveDemo: null
  },
  {
    id: "glucotrack",
    title: "GlucoTrack",
    category: "HealthTech",
    description: "Collaborative real-time diabetes telemetry and continuous glucose monitoring (CGM) system. Integrates with Dexcom APIs to stream sensor readings and aggregates Google/Apple Health metrics.",
    image: "/images/projects/glucotrack.png",
    techStack: ["Python", "Spring Boot", "Flutter", "PostgreSQL"],
    githubLink: "https://github.com/GlucoTrack-Cooperatives",
    liveDemo: null
  },
  {
    id: "blood-donation-platform",
    title: "Blood Donation Management",
    category: "Full Stack Web",
    description: "End-to-end blood bank inventory management and donor scheduling platform. Implements transactional backend workflows with strict ACID guarantees to eliminate double-booking.",
    image: "/images/projects/blood-donation.png",
    techStack: ["Next.js", "TypeScript", "Spring Boot", "MySQL"],
    githubLink: "https://github.com/nerikebosch/blood-donation-app",
    liveDemo: null
  },
  {
    id: "saccade-sync",
    title: "Saccade-Sync",
    category: "HealthTech",
    description: "Interactive clinical web application measuring eye saccadic movements to assist in ADHD assessment. Calculates real-time trajectory velocity and latency without blocking the UI thread.",
    image: "/images/projects/saccade-sync.png",
    techStack: ["React.js", "Web APIs", "HTML5 Canvas"],
    githubLink: "https://github.com/quangptt0910/Saccade-Sync",
    liveDemo: null
  },
  {
    id: "esp32-environmental-station",
    title: "ESP32 IoT Environmental Station",
    category: "IoT & Embedded",
    description: "Embedded IoT weather monitoring station capturing atmospheric metrics. Features custom C++ firmware on an ESP32 and a companion native Android application for live telemetry.",
    image: "/images/projects/esp-weather.png",
    techStack: ["C++", "ESP32", "Kotlin", "Bluetooth LE"],
    githubLink: "https://github.com/nerikebosch/Esp32-Weather",
    liveDemo: null
  },
  {
    id: "careconnect",
    title: "CareConnect",
    category: "Mobile App",
    description: "Native Android healthcare application featuring real-time doctor appointment scheduling, synchronous messaging, and consultation management with NoSQL state synchronization.",
    image: "/images/projects/careconnect.png",
    techStack: ["Kotlin", "Android SDK", "Firebase"],
    githubLink: "https://github.com/quangptt0910/CareConnect",
    liveDemo: null
  },
  {
    id: "bioinformatics-algorithm-suite",
    title: "Bioinformatics Algorithm Suite",
    category: "Data Science",
    description: "Suite of bioinformatics algorithms implemented from scratch to analyze genomic datasets, compute sequence alignments (Needleman-Wunsch), and construct evolutionary models.",
    image: "/images/projects/bioinformatics-suite.png",
    techStack: ["Python", "NumPy", "Dynamic Programming"],
    githubLink: "https://github.com/nerikebosch/Needleman-Wunsch",
    liveDemo: null
  },
  {
    id: "heartxp",
    title: "HeartXP",
    category: "HealthTech",
    description: "Cardiovascular health monitoring application designed to record, aggregate, and visualize cardiac vital trends for proactive clinical health insights.",
    image: "/images/projects/heartxp.png",
    techStack: ["React.js", "TypeScript", "Python", "Data Analytics"],
    githubLink: "https://github.com/Our-Little-Cloud/HeartXP",
    liveDemo: null
  },
  {
    id: "breast-mri-glcm-model",
    title: "Breast MRI GLCM Texture Analysis",
    category: "Medical Imaging",
    description: "Medical image processing pipeline utilizing GLCM statistical texture analysis on breast MRI scans to quantify tissue heterogeneity and extract diagnostic features.",
    image: "/images/projects/breast-mri-glcm.png",
    techStack: ["Python", "Scikit-Image", "OpenCV"],
    githubLink: "https://github.com/nerikebosch/Breast-MRI-GLCM-Model",
    liveDemo: null
  },
  {
    id: "lipid-bilayer-simulation",
    title: "Lipid Bilayer Biophysical Simulation",
    category: "Data Science",
    description: "Biophysical and molecular simulation comparing pure DOPC lipid bilayers against membranes enriched with 30% cholesterol to observe structural integrity and fluidity dynamics.",
    image: "/images/projects/lipid-bilayer.png",
    techStack: ["Python", "Computational Biology", "Biophysics"],
    githubLink: "https://github.com/nerikebosch/Lipid_Bilayer_Modeling_Simulation",
    liveDemo: null
  },
  {
    id: "sequential-data-analyzer",
    title: "Biological Data Similarity Engine",
    category: "Data Science",
    description: "Text similarity and biological sequence processing tool implementing k-shingling and Jaccard similarity indexing, integrated with UniProt parsers for data extraction.",
    image: "/images/projects/sequential-data.png",
    techStack: ["Python", "Algorithms", "UniProt API"],
    githubLink: "https://github.com/nerikebosch/sequential-data",
    liveDemo: null
  }
];