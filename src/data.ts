export const profile = {
  name: 'Santosh Gajje',
  role: 'Software Engineer',
  location: 'Columbus, OH',
  email: 'santoshoh9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/santoshgajje/',
  statement:
    "I'm a software engineer with 4+ years of experience building enterprise backend services and full-stack features in Java, Spring Boot, C#/.NET and TypeScript on AWS and Azure. I design event-driven systems, migrate legacy platforms, and ship AI-powered features like RAG search and reorder prediction.",
} as const;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, suffix: '+', label: 'Years building enterprise software' },
  { value: 12, suffix: '', label: '.NET services migrated to Spring Boot' },
  { value: 40, suffix: '%', label: 'Less material waste from workflow redesign' },
  { value: 1500, suffix: '+', label: 'Events searchable through RAG' },
];

export interface Education {
  school: string;
  degree: string;
  detail: string;
  date: string;
}

export const education: Education[] = [
  {
    school: 'The Ohio State University',
    degree: 'M.S., Computer Science & Engineering',
    detail: 'AI/ML focus',
    date: 'Expected May 2027',
  },
  {
    school: 'The Ohio State University',
    degree: 'B.S., Computer Science & Engineering',
    detail: 'Columbus, OH',
    date: 'May 2023',
  },
];

export interface BulletGroup {
  label?: string;
  bullets: string[];
}

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  groups: BulletGroup[];
  tech: string[];
}

/** Use **double asterisks** to emphasise a figure. */
export const experience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'SVATS',
    location: 'Columbus, OH',
    period: 'Mar 2026 – Present',
    groups: [
      {
        label: 'Client · JPMorgan Chase',
        bullets: [
          'Engineered **10+ REST APIs** across **3 Java/Spring Boot microservices** for credit card onboarding and account management.',
          'Designed **Kafka event pipelines** to decouple identity verification and account-opening services, enabling asynchronous, event-driven workflows.',
          'Implemented **15+ customer validation rules** covering identity verification, account creation and PAN generation.',
          'Developed **40+ JUnit/Mockito tests** and took part in code reviews, improving regression coverage and reliability.',
          'Monitored and troubleshot production services with Splunk and Grafana while delivering in Agile sprints.',
        ],
      },
      {
        label: 'In-house project',
        bullets: [
          'Developed **12+ REST APIs** with Java, Spring Boot and PostgreSQL, improving response times by **30%**.',
          'Built an AI-powered **RAG search service** with Python, FastAPI and pgvector, enabling discovery across **1,500+ events**.',
          'Containerized Java and Python services with Docker and deployed them on **AWS ECS with Fargate**, integrating RDS PostgreSQL and S3.',
        ],
      },
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'FastAPI', 'pgvector', 'AWS ECS', 'Docker'],
  },
  {
    title: 'Software Engineer',
    company: 'Sailotech',
    location: 'Delaware, OH',
    period: 'Dec 2023 – Dec 2025',
    groups: [
      {
        label: 'Client · Greif',
        bullets: [
          'Migrated **12 .NET services** to Java/Spring Boot, modernizing backend systems with code reviews and documentation.',
          'Developed **15+ full-stack features** for the G+ e-commerce platform using Java, Spring Boot, React, TypeScript and AWS, including Elasticsearch-powered product search.',
          'Built an **AI-driven reorder prediction** system to improve replenishment forecasting and reduce customer stockouts.',
          'Redesigned mill-routing and trim-sheet workflows with capacity-based planning, **reducing material waste by 40%**.',
          'Resolved **50+ production defects**, using AWS CloudWatch for monitoring and strengthening API validation and testing.',
        ],
      },
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Elasticsearch', 'AWS'],
  },
  {
    title: 'Junior Software Developer',
    company: 'Greif',
    location: 'Delaware, OH',
    period: 'Jun 2023 – Dec 2023',
    groups: [
      {
        bullets: [
          'Built C#/.NET monitoring and alerting services for critical manufacturing systems, **cutting incident detection time by 60%**.',
          'Integrated **5+ SOAP APIs** through Infor ION Gateway for real-time access to production orders and shipment data.',
          'Engineered **10+ reusable Angular components** for ERP dashboards used by manufacturing, finance and logistics teams.',
          'Strengthened ERP integration reliability with improved error handling and automated integration testing.',
        ],
      },
    ],
    tech: ['C#', '.NET', 'Angular', 'SOAP', 'Infor ION'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Greif',
    location: 'Delaware, OH',
    period: 'Jun 2022 – Jan 2023',
    groups: [
      {
        bullets: [
          'Developed **8 Java REST APIs** to exchange business data between CRM, ERP and reporting systems.',
          'Integrated Snowflake, SugarCRM and Infor LN ERP through automated workflows, supporting **3 enterprise platforms**.',
          'Validated **1,500+ data records** and investigated API failures, improving data accuracy across integrations.',
          'Documented **10+ REST endpoints** and integration workflows to simplify troubleshooting and maintenance.',
        ],
      },
    ],
    tech: ['Java', 'REST', 'Snowflake', 'SugarCRM', 'Infor LN'],
  },
];

export type ProjectSpan = 's4' | 's3' | 's2';

export interface Project {
  title: string;
  kicker: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  span: ProjectSpan;
  hue: 'blue' | 'violet' | 'pink' | 'teal';
}

export const projects: Project[] = [
  {
    title: 'iEvent',
    kicker: 'RAG-based event discovery · OSU × SVATS',
    blurb:
      'Applied AI work exploring retrieval-augmented generation for intelligent event discovery, pairing a Java/Spring Boot application with a Python/FastAPI AI service for natural-language search.',
    highlights: [
      'Implemented and compared lexical, semantic, hybrid, personalized and transformer-reranked retrieval.',
      'Evaluated relevance, citation coverage, faithfulness, latency and personalization — quality beyond answer generation.',
    ],
    tags: ['Java', 'Spring Boot', 'FastAPI', 'pgvector', 'RAG'],
    span: 's4',
    hue: 'blue',
  },
  {
    title: 'Cribby',
    kicker: 'Roommate & housing marketplace',
    blurb:
      'A full-stack platform that unifies roommate discovery, group formation and property search in one place.',
    highlights: [
      'Profiles, listings, roommate groups, messaging, favorites, verification and reporting.',
      'Preference-based compatibility with a focus on security and scalable architecture.',
    ],
    tags: ['Next.js', 'Java 21', 'Spring Boot', 'PostgreSQL'],
    span: 's2',
    hue: 'pink',
  },
  {
    title: 'Firmware Corruption Detection & Repair',
    kicker: 'Research · CSE 6521, Ohio State',
    blurb:
      'Can deep learning detect and repair corrupted firmware and low-level programs? A three-member research team exploring transformer- and diffusion-based repair under ISA constraints.',
    highlights: [
      'Synthetic training data built by introducing controlled corruptions into valid programs.',
      'Repairs validated by running them in an emulator, with correctness and memory behavior informing evaluation and potential RL feedback.',
    ],
    tags: ['Transformers', 'Diffusion', 'ISA', 'Emulation', 'RL'],
    span: 's3',
    hue: 'violet',
  },
  {
    title: 'Code-Mixed Sentiment Analysis',
    kicker: 'Multilingual deep learning research',
    blurb:
      'How do sentiment models perform when people switch languages mid-phrase? A three-person team studying transformer-based approaches for code-mixed text.',
    highlights: [
      'Literature review, dataset analysis, experimentation and evaluation.',
      'Techniques for improving sentiment understanding in code-mixed language.',
    ],
    tags: ['NLP', 'Transformers', 'Multilingual'],
    span: 's3',
    hue: 'teal',
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['Java', 'Python', 'SQL', 'TypeScript', 'JavaScript', 'C#'] },
  {
    title: 'Frameworks',
    items: [
      'Spring Boot',
      'Spring Cloud',
      'Spring Security',
      'Hibernate',
      'JPA',
      'FastAPI',
      'React',
      'Angular',
      '.NET',
      'REST APIs',
    ],
  },
  {
    title: 'Databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Elasticsearch',
      'MongoDB',
      'DynamoDB',
      'pgvector',
      'Pinecone',
      'Chroma',
    ],
  },
  {
    title: 'AI / ML',
    items: [
      'LangChain',
      'RAG',
      'LLMs',
      'Embeddings',
      'scikit-learn',
      'Semantic Search',
      'Reranking',
      'LLM Evaluation',
    ],
  },
  {
    title: 'Cloud',
    items: [
      'AWS ECS',
      'Fargate',
      'EKS',
      'EC2',
      'S3',
      'RDS',
      'CloudWatch',
      'Azure App Service',
      'Azure Functions',
      'Azure SQL',
      'Cloudflare',
      'Firebase',
    ],
  },
  {
    title: 'Testing & Tools',
    items: [
      'JUnit',
      'Mockito',
      'Postman',
      'Integration Testing',
      'Git',
      'GitLab',
      'Docker',
      'Kubernetes',
      'Kafka',
      'Terraform',
      'Azure DevOps',
      'CI/CD',
      'Splunk',
      'Grafana',
    ],
  },
];
