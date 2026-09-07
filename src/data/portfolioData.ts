import { 
  CandidateProfile, 
  SkillCategory, 
  Project, 
  JourneyMilestone, 
  ExposureItem, 
  CertificationItem, 
  EducationItem, 
  ContactInfo 
} from '../types';

export const candidateProfile: CandidateProfile = {
  name: 'Krishna',
  roleTitle: 'Computer Science & Data Science',
  degree: 'B.Tech in Computer Science and Engineering',
  specialization: 'Data Science Specialization',
  institution: 'Amrita Sai Institute of Science and Technology',
  period: '2022–2026',
  academicFocus: 'Statistical Analysis and Database Management',
  tagline: 'BUILDING WITH DATA.',
  statement: 'Computer Science student focused on Data, Analytics, Python, SQL and practical technology solutions.',
  aboutParagraph: 'I enjoy breaking down problems, working with data and building practical solutions through programming and analytical thinking.',
  availabilityPill: 'Computer Science • Data Science • 2026',
};

export const capabilityCategories: SkillCategory[] = [
  {
    number: '01',
    title: 'Core Programming',
    description: 'Foundational programming discipline focused on algorithms, structured logic, and practical application development.',
    skills: ['Python', 'SQL', 'C', 'C++', 'Java', 'Object-Oriented Programming (OOP)'],
  },
  {
    number: '02',
    title: 'Data & Database Systems',
    description: 'Structuring, querying, and managing datasets with relational database fundamentals and analytical tools.',
    skills: [
      'SQL Querying (Joins, Aggregations, Subqueries)',
      'Relational DBMS (PostgreSQL / MySQL fundamentals)',
      'Database Schema Normalization',
      'Index Optimization & Query Planning',
      'Microsoft Excel (Pivot Tables, Lookups, Modeling)',
    ],
  },
  {
    number: '03',
    title: 'Analytical & Applied Engineering',
    description: 'Transforming raw records into structured insights through data manipulation, automation, and exploratory analysis.',
    skills: [
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning & Transformation',
      'Python Automation & Scripting',
      'Statistical Foundations',
      'Algorithmic Problem Solving',
    ],
  },
  {
    number: '04',
    title: 'Developer Environment & Workflows',
    description: 'Essential software development workflows and version control practices.',
    skills: ['Git & GitHub Workflows', 'VS Code', 'Jupyter Notebooks', 'Command Line & Shell Scripting'],
  },
];

export const selectedProjects: Project[] = [
  {
    id: 'python-data-automation',
    number: '01',
    title: 'Automated Data Pipeline & Cleansing Engine',
    tagline: 'Python-driven automation for multi-source data ingestion and structured validation.',
    category: 'Data Automation & Scripting',
    problem: 
      'Raw operational datasets frequently arrive in inconsistent formats with missing attributes, duplicate records, and unstructured fields, requiring significant manual clean-up time.',
    approach: 
      'Engineered a modular Python pipeline that automates CSV and JSON ingestion, validates schema rules, handles null imputation, and exports cleaned tabular summaries for reporting.',
    solutionOutcome: 
      'Eliminates repetitive manual preprocessing, standardizes tabular records into relational-ready schemas, and exports structured summaries for downstream analysis.',
    tags: ['Python', 'Automation', 'Data Cleansing', 'ETL Logic'],
    techStack: ['Python 3', 'File I/O', 'Regex / Data Parsing', 'Modular Scripts'],
    codeSnippet: {
      language: 'python',
      caption: 'Modular data validation and transformation step',
      code: `def process_records(raw_dataset: list[dict]) -> list[dict]:
    """Cleanses incoming records and enforces schema integrity."""
    cleaned = []
    for item in raw_dataset:
        if not item.get("id") or item.get("value") is None:
            continue  # Filter malformed records
        cleaned.append({
            "id": int(item["id"]),
            "metric": float(item["value"]),
            "status": item.get("status", "ACTIVE").strip().upper()
        })
    return sorted(cleaned, key=lambda x: x["metric"], reverse=True)`
    },
    metrics: [
      { label: 'Ingestion Modality', value: 'Multi-Format' },
      { label: 'Execution Flow', value: 'Deterministic' },
      { label: 'Output', value: 'Relational-Ready' },
    ],
  },
  {
    id: 'dbms-query-optimization',
    number: '02',
    title: 'Relational DBMS Query & Indexing Analysis',
    tagline: 'Empirical study comparing indexing strategies and join behaviors on relational schemas.',
    category: 'Database Systems & Research',
    problem: 
      'Unindexed queries on growing relational tables suffer exponential latency degradation due to repetitive full-table scans and unoptimized join paths.',
    approach: 
      'Formulated test schemas modeling realistic transactional relationships. Tested execution plans (EXPLAIN ANALYZE) across clustered indexes, composite B-tree indexes, and selective multi-table joins.',
    solutionOutcome: 
      'Documented measurable query execution gains when switching from sequential scan patterns to indexed lookups, highlighting the critical role of foreign key indexing.',
    tags: ['SQL', 'DBMS', 'Index Design', 'Query Optimization'],
    techStack: ['SQL', 'Relational Schema Design', 'Query Planning', 'EXPLAIN Profiling'],
    codeSnippet: {
      language: 'sql',
      caption: 'Analytical join with composite indexing target',
      code: `-- Optimized analytical query targeting indexed composite fields
SELECT 
    d.department_name,
    COUNT(e.emp_id) AS total_records,
    ROUND(AVG(e.performance_score), 2) AS avg_score
FROM departments d
INNER JOIN employees e 
    ON d.dept_id = e.dept_id
WHERE e.status = 'ACTIVE' AND e.join_year >= 2022
GROUP BY d.department_name
ORDER BY avg_score DESC;`
    },
    metrics: [
      { label: 'Evaluation Method', value: 'EXPLAIN Plan' },
      { label: 'Index Architecture', value: 'B-Tree & Composite' },
      { label: 'Focus', value: 'Query Cost Reduction' },
    ],
  },
  {
    id: 'analytics-dashboard-explorer',
    number: '03',
    title: 'Interactive Exploratory Data Dashboard',
    tagline: 'Responsive analytical interface with dynamic filtering, statistical rollups, and live charting.',
    category: 'Interactive Analytics & Frontend',
    problem: 
      'Static data tables make it difficult for stakeholders to intuitively spot trends, filter categorical attributes, and extract instant summary insights.',
    approach: 
      'Built a responsive, zero-latency analytical dashboard interface with dynamic client-side filtering, dimensional breakdown, and interactive visual data representations.',
    solutionOutcome: 
      'Empowers users to isolate key segments, inspect distribution metrics, and observe live updates without server round-trips.',
    tags: ['Analytics', 'Data Filtering', 'Interactive UI', 'Data Structures'],
    techStack: ['TypeScript', 'Data Aggregations', 'Interactive Charting', 'Tailwind CSS'],
    codeSnippet: {
      language: 'typescript',
      caption: 'Client-side multi-variable aggregation',
      code: `export function aggregateData(records: DataRecord[], filter: string) {
  const filtered = filter === 'ALL' 
    ? records 
    : records.filter(r => r.category === filter);

  const total = filtered.reduce((acc, curr) => acc + curr.value, 0);
  const avg = filtered.length ? Math.round(total / filtered.length) : 0;
  return { count: filtered.length, total, avg };
}`
    },
    metrics: [
      { label: 'Update Latency', value: '< 16ms' },
      { label: 'Dimension Support', value: 'Multi-Filter' },
      { label: 'UI Paradigm', value: 'Live Reactive' },
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    step: '01',
    period: '2022',
    title: 'Commenced B.Tech in CSE',
    skills: ['Computer Science Foundations', 'Logic Building'],
    description: 
      'Began undergraduate degree in Computer Science and Engineering at Amrita Sai Institute of Science and Technology, establishing mathematical and algorithmic grounding.',
  },
  {
    step: '02',
    period: '2022–2023',
    title: 'Programming Foundations',
    skills: ['Python', 'C', 'C++', 'Java'],
    description: 
      'Developed core algorithmic thinking, data structures, and object-oriented programming principles across multiple programming paradigms.',
  },
  {
    step: '03',
    period: '2023–2024',
    title: 'Data & Database Foundations',
    skills: ['SQL', 'DBMS', 'Relational Modeling', 'Excel Analytics'],
    description: 
      'Specialized coursework in Database Management Systems (DBMS), complex SQL querying, normalization, and quantitative spreadsheet analysis.',
  },
  {
    step: '04',
    period: '2024',
    title: 'Practical Projects & Skill India Certification',
    skills: ['Python Automation', 'Technical Research', 'Skill India Python'],
    description: 
      'Applied skills to practical projects including automated data scripting and earned the Python Programming Certification from Skill India.',
    highlight: true,
  },
  {
    step: '05',
    period: '2025',
    title: 'Microsoft Experts Live India',
    skills: ['Modern IT Infrastructure', 'Enterprise Data Trends', 'Industry Exposure'],
    description: 
      'Participated in Microsoft Experts Live India (Hyderabad), gaining exposure to industry practices in modern enterprise data environments and cloud architectures.',
    highlight: true,
  },
  {
    step: '06',
    period: '2026',
    title: 'B.Tech Completion & Industry Readiness',
    skills: ['Data Science Specialization', 'Professional Entry'],
    description: 
      'Completing B.Tech in Computer Science and Engineering (Data Science Specialization) and transitioning toward entry-level data, analytics, and software engineering opportunities.',
  },
];

export const industryExposure: ExposureItem = {
  title: 'Microsoft Experts Live India',
  location: 'Hyderabad, India',
  role: 'Technical Seminar Participant',
  year: '2025',
  tag: 'Industry Exposure',
  summary: 
    'Participated in specialized technical seminar sessions focusing on modern cloud ecosystems, modern IT infrastructure, and emerging enterprise data management practices.',
  bulletPoints: [
    'Explored modern IT infrastructure patterns and enterprise database architectures.',
    'Gained direct exposure to real-world cloud practices and enterprise data workflows.',
    'Engaged with tech industry specialists discussing analytics and infrastructure scaling.',
  ],
};

export const certificationData: CertificationItem = {
  title: 'Python Programming Certification',
  provider: 'Skill India',
  year: '2024',
  skillsCovered: [
    'Python Syntax & Data Structures',
    'Control Flow & Functional Programming',
    'File Handling & Modular Architecture',
    'Algorithmic Problem Solving',
  ],
  description: 
    'Official certification validating practical proficiency in Python programming fundamentals, procedural logic, and problem solving administered through Skill India.',
};

export const educationList: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    major: 'Data Science Specialization',
    institution: 'Amrita Sai Institute of Science and Technology',
    period: '2022–2026',
    focus: 'Statistical Analysis and Database Management',
    status: 'In Progress (Final Year)',
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    major: 'Mathematics, Physics & Chemistry',
    institution: 'SR-Sri Gayatri Junior College',
    period: '2020–2022',
    focus: 'Higher Secondary Academic Foundations',
    status: 'Completed (2022)',
  },
];

export const contactInfo: ContactInfo = {
  email: 'krishna.connect.tech@gmail.com', // Replaceable by user
  displayEmail: 'krishna.connect.tech@gmail.com',
  linkedInUrl: 'https://linkedin.com/in/krishna-datascience', // Replaceable by user
  gitHubUrl: 'https://github.com/krishna-dev-data', // Replaceable by user
  location: 'India',
  statusNote: 'Open to discussions regarding Data, Analytics, and Junior Engineering opportunities.',
};
