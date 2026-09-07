export interface CandidateProfile {
  name: string;
  roleTitle: string;
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  academicFocus: string;
  tagline: string;
  statement: string;
  aboutParagraph: string;
  availabilityPill: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  approach: string;
  solutionOutcome: string;
  tags: string[];
  techStack: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface JourneyMilestone {
  step: string;
  period: string;
  title: string;
  skills: string[];
  description: string;
  highlight?: boolean;
}

export interface ExposureItem {
  title: string;
  location: string;
  role: string;
  year: string;
  tag: string;
  summary: string;
  bulletPoints: string[];
}

export interface CertificationItem {
  title: string;
  provider: string;
  year: string;
  skillsCovered: string[];
  description: string;
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  period: string;
  focus: string;
  status: string;
}

export interface ContactInfo {
  email: string;
  displayEmail: string;
  linkedInUrl: string;
  gitHubUrl: string;
  location: string;
  statusNote: string;
}
