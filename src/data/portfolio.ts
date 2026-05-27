/**
 * ============================================================
 *  YOUR PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE THE SITE
 * ============================================================
 *
 * Think of this as your "database" in plain text.
 * Change anything here → save → browser refreshes → site updates.
 *
 * You do NOT need to touch the component files for most edits.
 */

export const site = {
  name: "Pratik Sapkota",
  title: "Wireless Engineer · ML Researcher · EEE",
  tagline: "Engineering networks on the ground — and intelligence in the air.",
  location: "Lalitpur, Nepal",
  email: "pratiksapkota98@gmail.com",
  phone: "+977-9861015458",
  resumePath: "/resume/Pratik_Sapkota_CV.pdf",

  /** Profile photo path (file must live in public/images/) */
  profileImage: "/images/profile.jpg",

  /** Hero status badge (shown under navbar area) */
  heroBadge: "Open to opportunities ",

  // Add your real URLs here when ready
  social: {
    linkedin: "https://www.linkedin.com/in/pratik-sapkota-a994991a7",
    github: "https://github.com/pratiksapkota007",
    email: "mailto:pratiksapkota98@gmail.com",
  },

  heroRoles: [
    "Wireless RAN Engineer",
    "ML & Federated Learning",
    "ns-3 Network Simulation",
    "AI-RAN Research",
  ],
};

export const about = {
  paragraphs: [
    "I'm an Electrical & Electronics Engineer specializing in wireless communication, with hands-on experience commissioning and optimizing Huawei RAN infrastructure across 500+ sites in Nepal.",
    "Beyond the field, I build simulations and ML systems — from federated learning for anomaly detection to topography-aware beamforming for AI-RAN. I bridge hardware reality with intelligent software.",
    "Currently preparing for my Master's, I'm focused on next-generation networks: integrated ground–air–space connectivity, O-RAN, and learning-based link selection.",
  ],
  highlights: [
    { label: "Sites Optimized", value: "500+" },
    { label: "RAN Integrations", value: "30+" },
    { label: "IELTS Score", value: "8.0" },
    { label: "Publications", value: "3" },
  ],
};

export const skills = [
  {
    category: "Programming",
    items: ["Python", "C++", "JavaScript", "MATLAB", "Linux"],
    color: "#f5f0e8",
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "PennyLane"],
    color: "#e8dcc8",
  },
  {
    category: "Wireless & Networks",
    items: ["ns-3", "NetAnim", "iMaster MAE", "Link Budgeting", "LTE/2G/3G RAN"],
    color: "#d4c4a8",
  },
  {
    category: "Electronics",
    items: ["Circuit Design", "Proteus", "Arduino", "RF Analysis"],
    color: "#c4b5a0",
  },
  {
    category: "Soft Skills",
    items: ["Team Collaboration", "Technical Communication", "Research", "MS Office"],
    color: "#b8a990",
  },
  {
    category: "Languages",
    items: ["English (IELTS 8.0)", "Hindi", "Nepali"],
    color: "#9c958c",
  },
];

export const projects = [
  {
    title: "Topography-Aware Predictive Beamforming for AI-RAN",
    year: "2026",
    description:
      "ns-3 digital twin with DEM-based LoS/NLoS, Python Gym + PPO RL pipeline, and an O-RAN-style xApp exposing policy endpoints.",
    tags: ["ns-3", "C++", "Python", "RL", "FastAPI"],
    github: "https://github.com/pratiksapkota007/Topography-Aware-Predictive-Beamforming-and-Handover-for-AI-RAN",
    featured: true,
  },
  {
    title: "Learning-Based Link Selection in Integrated Ground–Air–Space Networks",
    year: "2026",
    description:
      "Simulation study for adaptive handover across terrestrial, UAV, and LEO links using network performance indicators.",
    tags: ["ns-3", "C++", "NetAnim"],
    github: "https://github.com/pratiksapkota007/3d-network-link-selection-ns3",
    featured: true,
  },
  {
    title: "Federated Learning for Network Anomaly Detection",
    year: "2025",
    description:
      "Federated averaging across distributed clients achieving 99.8% test accuracy on UNSW-NB15 with CNN/DNN baselines.",
    tags: ["Python", "TensorFlow", "Federated Learning"],
    github: "https://github.com/pratiksapkota007/Federated-Anomaly-Detection-for-Network-Security",
    featured: true,
  },
  {
    title: "ECG Myocardial Infarction Detection with ResNet",
    year: "2025",
    description:
      "ResNet18 classifier for four cardiac conditions with morphological ECG signal processing pipeline.",
    tags: ["Python", "PyTorch", "Signal Processing"],
    github: "https://github.com/pratiksapkota007/ECG-for-Mycardial-Infraction",
    google_scholar: "https://arxiv.org/abs/2412.05583",
    featured: false,
  },
  {
    title: "LoRa-based Flood Monitoring System",
    year: "2023",
    description:
      "Long-range flood monitoring with cloud data acquisition, path-loss analysis, and real-time communication.",
    tags: ["Python", "LoRa", "IoT"],
    github: "https://github.com/pratiksapkota007/LoRa-Technology",
    featured: false,
  },
];

export const experience = [
  {
    role: "Wireless Engineer",
    company: "Huawei Technologies Co. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Oct 2023 — May 2025",
    highlights: [
      "Managed BSC6900/6910, RNC6900/6910 configuration and optimization for network stability",
      "Commissioned BTS3900, NodeB, eNodeB sites including LTE rollout on legacy 2G/3G layers",
      "Modernized 500+ sites via 4T4R, 8T8R, SFN, CoMPT, RRU swaps, and UBBP expansions",
      "Integrated 30+ new RAN sites independently, reducing rollout timelines",
      "Delivered remote wireless support to Huawei Sri Lanka operations",
    ],
  },
  {
    role: "System Administrator Intern",
    company: "Thakral One Nepal Pvt Ltd",
    location: "Kathmandu, Nepal",
    period: "Jun 2023 — Sep 2023",
    highlights: [
      "Supported VMware vSphere virtualization for banking clients",
      "Assisted Windows Server installation, migration, and DR setup with RAID configuration",
      "Prepared monthly server health reports and on-site deployment support",
    ],
  },
  {
    role: "Academic Intern",
    company: "Dish Media Pvt Ltd",
    location: "Lalitpur, Nepal",
    period: "Dec 2022 — Jan 2023",
    highlights: [
      "Monitored live satellite broadcast signals for DishHome subscribers",
      "Maintained DTH uplink, IRD systems, and Fiber TV headend equipment",
      "Diagnosed RF and digital transmission issues using signal analyzers",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Electrical & Electronics Engineering (Communication)",
    school: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    period: "May 2023",
    detail: "GPA: 2.96",
  },
  {
    degree: "Master's Degree (Upcoming)",
    school: "TBD",
    location: "—",
    period: "2026",
    detail: "Focused on advanced wireless & AI-RAN research",
  },
];

export const research = [
  {
    type: "Conference",
    citation:
      "Atit Pokharel, Shashank Dahal, Pratik Sapkota, Bhupendra Bimal Chhetri (2023). ECG Based Cardiac Arrhythmia Detection and Classification using Machine Learning. ICT CEEL 2023, Bhaktapur, Nepal.",
  },
  {
    type: "Journal (In Review)",
    citation:
      "Atit Pokharel, Sanskar Aryal, Pratik Sapkota, et al. (2026). PF-Caps: A Capsule Network-Based Federated Learning Framework for Personalized and Secure Learning in Healthcare. IEEE Transactions on Medical Imaging.",
  },
  {
    type: "Thesis",
    citation:
      "Atit Pokharel, Pratik Sapkota, et al. Performance Evaluation of LoRa Technology for Rural Connectivity: An Experimental Analysis in Nepal. BSc Thesis, Kathmandu University. Supervisor: Dr. Ram Kaji Budhathoki.",
  },
];

export const certifications = ["Nepal Engineering License — Nepal Engineering Council"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
