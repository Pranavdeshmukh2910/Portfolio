export interface Skill {
  name: string;
  category: 'Programming' | 'AI & Machine Learning' | 'Data Science' | 'Tools' | 'Databases';
  level: string; // e.g., 'Proficient', 'Advanced', 'Intermediate'
  percentage: number;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Machine Learning' | 'Data Science & Systems' | 'Algorithms & Optimization';
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  gradient: string;
  badge: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  branch: string;
  period: string;
  location: string;
  description: string;
  courses: string[];
  status: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  description: string;
  skillsGained: string[];
  credentialUrl?: string;
  category: 'AI/ML' | 'Programming' | 'Data Science' | 'Workshops';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  contributions: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  date: string;
  description: string;
  iconName: string;
}

export const portfolioData = {
  personal: {
    name: "Pranav Mukund Deshmukh",
    shortName: "Pranav",
    headline: "Aspiring AI Engineer | Data Science Enthusiast | Problem Solver",
    profession: "AI & Data Science Engineering Student",
    college: "R.C. Patel Institute of Technology",
    collegeFull: "R.C. Patel Institute of Technology (RCPIT), Shirpur",
    location: "Shirpur, Maharashtra, India",
    careerGoal: "Aspiring AI Engineer, Data Scientist, and Software Developer",
    email: "pranavdeshmukh2910@gmail.com",
    linkedin: "https://www.linkedin.com/in/pranav-deshmukh-043789339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/Pranavdeshmukh2910",
    resumeUrl: "/resume-pranav-deshmukh.pdf",
    statusBadge: "Available for Internships & Projects",
    intro: "Artificial Intelligence and Data Science Engineering student with a strong passion for designing intelligent systems, developing predictive machine learning models, and building clean, efficient software applications that solve tangible problems.",
    aboutDetailed: "I am an Artificial Intelligence & Data Science Engineering student at R.C. Patel Institute of Technology who enjoys programming, data analysis, machine learning, and developing practical technology solutions. My academic journey combines algorithmic thinking, statistical modeling, and hands-on software development. I thrive on translating theoretical data science concepts into working products—from training convolutional neural networks for healthcare imaging to crafting algorithmic optimization systems and real-time biometric pipelines. I am actively preparing for software engineering and AI/ML internship roles where I can make an immediate impact.",
  },

  stats: [
    { label: "Core Projects", value: "4+" },
    { label: "ML & DL Models", value: "8+" },
    { label: "Technical Skills", value: "15+" },
    { label: "Focus Areas", value: "AI & DS" },
  ],

  pillars: [
    {
      title: "Artificial Intelligence & ML",
      description: "Developing predictive regression, classification, and deep learning neural architectures using Python, Scikit-Learn, PyTorch, and OpenCV.",
      icon: "Brain",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Data Science & Analytics",
      description: "Extracting actionable intelligence through exploratory data analysis, NumPy, Pandas, statistical modeling, and data visualization.",
      icon: "BarChart3",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Software Engineering & DSA",
      description: "Crafting structured, maintainable code with Python, Java, and C++, paired with solid grasp of greedy heuristics and backtracking algorithms.",
      icon: "Code2",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Databases & Clean Architecture",
      description: "Designing normalized relational schemas and optimized queries in SQL and MySQL for robust, reliable data-driven backends.",
      icon: "Database",
      gradient: "from-emerald-500 to-teal-600",
    },
  ],

  skills: [
    // Programming
    {
      name: "Python",
      category: "Programming",
      level: "Proficient",
      percentage: 88,
      description: "Primary language for AI/ML, automation, data manipulation, and backend logic.",
    },
    {
      name: "Java",
      category: "Programming",
      level: "Intermediate",
      percentage: 75,
      description: "Object-oriented programming, data structures, and algorithmic implementations.",
    },
    {
      name: "C++",
      category: "Programming",
      level: "Intermediate",
      percentage: 72,
      description: "Fundamental memory concepts, standard template library (STL), and problem-solving.",
    },

    // AI & Machine Learning
    {
      name: "Machine Learning",
      category: "AI & Machine Learning",
      level: "Proficient",
      percentage: 85,
      description: "Supervised and unsupervised learning, regression, classification, clustering, and ensemble methods.",
    },
    {
      name: "Deep Learning",
      category: "AI & Machine Learning",
      level: "Intermediate",
      percentage: 78,
      description: "Convolutional Neural Networks (CNNs), transfer learning, and deep architecture tuning.",
    },
    {
      name: "Natural Language Processing (NLP)",
      category: "AI & Machine Learning",
      level: "Intermediate",
      percentage: 70,
      description: "Text preprocessing, tokenization, sentiment analysis, and vector embeddings.",
    },

    // Data Science
    {
      name: "NumPy",
      category: "Data Science",
      level: "Proficient",
      percentage: 86,
      description: "Multi-dimensional array computations, vectorization, and mathematical operations.",
    },
    {
      name: "Pandas",
      category: "Data Science",
      level: "Proficient",
      percentage: 88,
      description: "Data wrangling, cleaning, aggregation, exploratory data analysis (EDA), and transformation.",
    },
    {
      name: "Matplotlib & Seaborn",
      category: "Data Science",
      level: "Proficient",
      percentage: 82,
      description: "Custom data visualization, distribution plots, correlation heatmaps, and trend charts.",
    },
    {
      name: "Data Analysis & EDA",
      category: "Data Science",
      level: "Proficient",
      percentage: 84,
      description: "Hypothesis testing, feature importance analysis, outlier detection, and data storytelling.",
    },

    // Tools
    {
      name: "Git",
      category: "Tools",
      level: "Intermediate",
      percentage: 80,
      description: "Version control, branching strategies, commit workflows, and collaborative tracking.",
    },
    {
      name: "GitHub",
      category: "Tools",
      level: "Intermediate",
      percentage: 82,
      description: "Repository management, open-source collaboration, markdown documentation, and project hosting.",
    },
    {
      name: "VS Code",
      category: "Tools",
      level: "Proficient",
      percentage: 90,
      description: "Primary development environment with custom debugging, linting, and extension workflows.",
    },
    {
      name: "Jupyter Notebook",
      category: "Tools",
      level: "Proficient",
      percentage: 88,
      description: "Interactive data science experiments, rapid prototyping, and reproducible model logs.",
    },

    // Databases
    {
      name: "SQL",
      category: "Databases",
      level: "Intermediate",
      percentage: 80,
      description: "Relational database querying, complex JOINs, aggregations, subqueries, and indexing.",
    },
    {
      name: "MySQL",
      category: "Databases",
      level: "Intermediate",
      percentage: 78,
      description: "Schema design, relational constraints, transactional data integrity, and local server integration.",
    },
  ] as Skill[],

  projects: [
    {
      id: "resale-price-prediction",
      title: "Smart Resale Price Prediction for Mobile Phones",
      subtitle: "Machine Learning Regression & Price Estimation Engine",
      category: "AI & Machine Learning",
      description: "An end-to-end machine learning regression system that predicts fair market resale values for smartphones based on specifications, age depreciation, and hardware conditions.",
      longDescription: "Addressing pricing opacity in the secondary electronics marketplace, this project implements a rigorous data science pipeline. The workflow encompasses exploratory data analysis (EDA), multi-factor feature engineering (e.g. brand equity weighting, battery health depreciation, screen type scoring), and iterative model evaluations. By comparing multiple algorithms including Linear Regression, Random Forest, and Gradient Boosting / XGBoost, the pipeline minimizes prediction error and produces transparent price justifications.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Streamlit"],
      githubUrl: "https://github.com/Pranavdeshmukh2910",
      liveUrl: "https://github.com/Pranavdeshmukh2910",
      highlights: [
        "Comprehensive data preprocessing handling skewed distributions and outliers",
        "Engineered brand tier rating and hardware condition depreciation metrics",
        "Tuned Random Forest & XGBoost regression achieving high R² accuracy",
        "Interactive graphical user interface allowing users to simulate valuations instantly"
      ],
      gradient: "from-blue-600 to-indigo-700",
      badge: "AI / ML Regression"
    },
    {
      id: "diabetic-retinopathy",
      title: "Predicting Progression of Diabetic Retinopathy",
      subtitle: "Deep Learning Medical Computer Vision from Retinal Scans",
      category: "AI & Machine Learning",
      description: "A deep learning convolutional neural network pipeline utilizing fundus retinal photographs to classify diabetic retinopathy severity stages and aid early clinical screening.",
      longDescription: "Diabetic Retinopathy is a severe ocular complication of diabetes that often causes progressive vision impairment if undetected. This project builds a computer vision classification pipeline using deep convolutional networks (CNNs) and transfer learning. To enhance subtle medical features such as microaneurysms, hemorrhages, and cotton wool spots, images are preprocessed with Contrast Limited Adaptive Histogram Equalization (CLAHE) and standardized scaling. The network classifies scans across five clinical grades, emphasizing high sensitivity for early-stage detection.",
      technologies: ["Python", "TensorFlow / PyTorch", "OpenCV", "CNN", "Transfer Learning", "Scikit-Learn", "NumPy"],
      githubUrl: "https://github.com/Pranavdeshmukh2910",
      liveUrl: "https://github.com/Pranavdeshmukh2910",
      highlights: [
        "Enhanced retinal fundus photographs using OpenCV CLAHE and green-channel extraction",
        "Trained deep CNN models with transfer learning to overcome medical dataset limitations",
        "Achieved high multi-class classification sensitivity across disease severity grades",
        "Generated detailed confusion matrices, precision-recall curves, and diagnostic reports"
      ],
      gradient: "from-indigo-600 to-purple-700",
      badge: "Deep Learning / CV"
    },
    {
      id: "smart-exam-seating",
      title: "Smart Exam Seating Arrangement System",
      subtitle: "Constraint Satisfaction Seating Engine Using Greedy & Backtracking",
      category: "Algorithms & Optimization",
      description: "An algorithmic optimization software that automates exam hall seating plans, preventing cheating proximity, optimizing classroom space, and handling multi-branch academic cohorts.",
      longDescription: "Manual examination seating allocation across large academic institutions is prone to errors, human bias, and inefficient hall utilization. This project implements a constraint satisfaction engine combining greedy heuristic sorting with backtracking algorithms. The engine systematically ensures that students from the same department, year, or subject are never seated in adjacent desks (orthogonal or diagonal constraints). Generates printable room-wise seating charts and student roll lists within seconds.",
      technologies: ["Python", "Java", "Backtracking Algorithm", "Greedy Search", "Data Structures", "Constraint Satisfaction", "File I/O"],
      githubUrl: "https://github.com/Pranavdeshmukh2910",
      liveUrl: "https://github.com/Pranavdeshmukh2910",
      highlights: [
        "Zero-collision seating constraint enforcement for multi-branch exam sessions",
        "Greedy distribution strategy followed by recursive backtracking to resolve deadlocks",
        "Scalable room matrix configuration adapting to varying classroom geometries",
        "Automated export of attendance checklists and door-mounted seating charts"
      ],
      gradient: "from-cyan-600 to-blue-700",
      badge: "Algorithms / DSA"
    },
    {
      id: "attendance-monitoring",
      title: "Automated Student Attendance Monitoring & Analytics",
      subtitle: "Biometric Computer Vision & Attendance Analytics Dashboard",
      category: "Data Science & Systems",
      description: "An automated facial recognition attendance management system combined with an interactive analytics dashboard for monitoring student engagement, attendance trends, and automated absentee reporting.",
      longDescription: "Replaces traditional roll calls with automated facial detection and recognition using OpenCV. The system captures live video feeds, matches student embeddings against an enrolled database, and logs timestamped attendances directly to an SQL database. Features an administrative data dashboard with Pandas and visualization libraries that analyzes monthly attendance trends, flags chronic absenteeism, and automatically generates compliance reports for faculty.",
      technologies: ["Python", "OpenCV", "Face Recognition", "Pandas", "SQL / MySQL", "Matplotlib", "Tkinter / GUI"],
      githubUrl: "https://github.com/Pranavdeshmukh2910",
      liveUrl: "https://github.com/Pranavdeshmukh2910",
      highlights: [
        "Real-time facial detection and biometric feature extraction via OpenCV",
        "Automated relational SQL database updates with duplicate session prevention",
        "Pandas-driven analytics tracking attendance thresholds, trends, and risk categories",
        "One-click generation of institutional reports and automated absentee lists"
      ],
      gradient: "from-emerald-600 to-teal-700",
      badge: "Computer Vision & Analytics"
    }
  ] as Project[],

  education: [
    {
      institution: "R.C. Patel Institute of Technology",
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Artificial Intelligence and Data Science (AI & DS)",
      period: "2022 - 2026 (Expected)",
      location: "Shirpur, Maharashtra, India",
      description: "Focused curriculum encompassing machine learning fundamentals, deep learning, statistical analysis, discrete mathematics, and software design principles.",
      courses: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Database Management Systems (DBMS)",
        "Natural Language Processing",
        "Object-Oriented Programming (Java/C++)",
        "Probability & Linear Algebra",
        "Operating Systems & Computer Networks"
      ],
      status: "Currently Pursuing"
    },
    {
      institution: "Junior College / Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC - Class XII)",
      branch: "Science Stream (Mathematics, Physics, Chemistry)",
      period: "2020 - 2022",
      location: "Maharashtra, India",
      description: "Rigorous scientific foundation with strong emphasis on advanced mathematics, analytical reasoning, and physics.",
      courses: [
        "Mathematics & Calculus",
        "Physics",
        "Chemistry",
        "Computer Science / Information Technology"
      ],
      status: "Completed"
    },
    {
      institution: "High School",
      degree: "Secondary School Certificate (SSC - Class X)",
      branch: "General Sciences & Mathematics",
      period: "2019 - 2020",
      location: "Maharashtra, India",
      description: "Academic foundation with consistent academic excellence and strong participation in STEM competitions.",
      courses: ["Mathematics", "General Science", "Social Studies", "English"],
      status: "Completed"
    }
  ] as EducationItem[],

  experience: [
    {
      role: "AI & Data Science Student Developer",
      organization: "R.C. Patel Institute of Technology (Academic & Project Labs)",
      period: "2023 - Present",
      location: "Shirpur, Maharashtra",
      type: "Academic & Practical Work",
      contributions: [
        "Architected end-to-end machine learning prototypes including price prediction models and medical image classification networks.",
        "Collaborated with peers to design algorithmic optimization engines using greedy and backtracking strategies.",
        "Developed data-driven systems leveraging Python, OpenCV, and SQL to automate campus workflows."
      ]
    },
    {
      role: "Technical Learning & Project Development",
      organization: "Self-Directed & Open Source",
      period: "2022 - Present",
      location: "Remote / Shirpur",
      type: "Continuous Development",
      contributions: [
        "Regularly practicing Data Structures and Algorithms in Python, Java, and C++.",
        "Building modular, version-controlled GitHub repositories with clean documentation and reproducible codebases.",
        "Studying emerging trends in generative AI, large language models, and modern data engineering pipelines."
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Machine Learning & AI Foundations",
      issuer: "Online Certification / Training",
      period: "2024",
      description: "In-depth training covering supervised & unsupervised learning algorithms, model evaluation, and regularized optimization.",
      skillsGained: ["Scikit-Learn", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning"],
      category: "AI/ML"
    },
    {
      title: "Python for Data Science & Machine Learning",
      issuer: "Professional Coursework",
      period: "2023 - 2024",
      description: "Comprehensive practical mastery over NumPy arrays, Pandas DataFrames, data visualization, and exploratory workflows.",
      skillsGained: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Wrangling"],
      category: "Data Science"
    },
    {
      title: "Database Management & SQL for Engineers",
      issuer: "Technical Training Program",
      period: "2023",
      description: "Relational database modeling, complex SQL querying, normalization, and integration with Python applications.",
      skillsGained: ["SQL", "MySQL", "Relational Schema", "Database Normalization"],
      category: "Programming"
    },
    {
      title: "Hands-on Technical Workshops & Seminars",
      issuer: "R.C. Patel Institute of Technology",
      period: "2023 - 2024",
      description: "Active participation in department technical symposiums, coding bootcamps, and AI innovation seminars.",
      skillsGained: ["Team Collaboration", "AI Ethics", "Version Control", "Technical Presentations"],
      category: "Workshops"
    }
  ] as CertificationItem[],

  achievements: [
    {
      title: "Competitive Problem Solving",
      category: "Coding & Algorithms",
      date: "Ongoing",
      description: "Active problem solver focusing on Data Structures, Algorithms, recursion, arrays, and graph fundamentals on platforms like LeetCode and HackerRank.",
      iconName: "Code"
    },
    {
      title: "AI & Data Science Project Showcases",
      category: "Project Exhibitions",
      date: "2023 - 2024",
      description: "Presented technical projects including Diabetic Retinopathy screening and Exam Seating Optimization during institutional technology reviews.",
      iconName: "Presentation"
    },
    {
      title: "Technical Hackathon Participation",
      category: "Hackathons",
      date: "2023 - 2024",
      description: "Collaborated in time-constrained hackathons to design algorithmic solutions, rapid UI prototypes, and data pipeline integrations.",
      iconName: "Trophy"
    },
    {
      title: "Academic Excellence in Core AI Subjects",
      category: "Academics",
      date: "2022 - Present",
      description: "Maintaining a strong academic trajectory in AI, Data Science, Object-Oriented Programming, and Mathematics at RCPIT.",
      iconName: "GraduationCap"
    }
  ] as AchievementItem[],

  contactConfig: {
    formspreeEndpoint: "", // Optional: e.g. "https://formspree.io/f/xyz..." for direct zero-backend email routing
    fallbackEmail: "pranavdeshmukh2910@gmail.com",
    subjectPrefix: "[Portfolio Inquiry] ",
  }
};
