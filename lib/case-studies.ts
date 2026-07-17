export interface CaseStudy {
  id: string;
  slug: string;
  hero: {
    title: string;
    industry: string;
    duration: string;
    role: string;
    teamSize: string;
    toolsUsed: string[];
    platform: string;
    livePrototypeUrl?: string;
  };
  overview: {
    briefIntro: string;
    businessBackground: string;
    problemStatement: string;
    businessObjectives: string[];
    successMetrics: string[];
    expectedOutcome: string;
  };
  challenge: {
    description: string;
    keyIssues: string[];
  };
  responsibilities: string[];
  discovery: {
    kickoff: string;
    competitorAnalysis: string;
    audit: string;
    painPoints: string[];
    opportunities: string[];
  };
  research: {
    objectives: string[];
    methodology: string;
    insights: string[];
    summary: string;
  };
  personas: {
    name: string;
    role: string;
    goals: string[];
    painPoints: string[];
    behaviors: string;
    devices: string[];
  }[];
  journey: {
    current: string;
    future: string;
    successMoments: string[];
  };
  informationArchitecture: {
    description: string;
    hierarchy: string[];
  };
  userFlow: {
    description: string;
    keyDecisions: string[];
  };
  wireframes: {
    description: string;
    iterations: string[];
  };
  uiExploration: {
    typography: string;
    colorPalette: string;
    accessibility: string;
  };
  designSystem: {
    components: string[];
    tokens: string[];
  };
  highFidelity: {
    screens: string[];
    description: string;
  };
  prototype: {
    description: string;
    interactions: string[];
  };
  usabilityTesting: {
    participants: string;
    tasks: string[];
    observations: string[];
    iterations: string[];
  };
  accessibility: {
    guidelines: string[];
    improvements: string[];
  };
  developerHandoff: {
    description: string;
    assets: string[];
  };
  businessImpact: {
    metrics: string[];
    summary: string;
  };
  learnings: {
    challenges: string[];
    futureImprovements: string[];
  };
  finalDesignImage?: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  'enterprise-design-system': {
    id: 'proj-1',
    slug: 'enterprise-design-system',
    hero: {
      title: 'Enterprise Design System',
      industry: 'Enterprise Software',
      duration: '12 months',
      role: 'Lead UX Designer',
      teamSize: '4 Designers, 12 Engineers',
      toolsUsed: ['Figma', 'Storybook', 'Design Tokens', 'Zeroheight'],
      platform: 'Web, Desktop, Mobile',
    },
    overview: {
      briefIntro: 'A foundational design system unifying 8 disparate enterprise product lines into a single cohesive ecosystem.',
      businessBackground: 'The organization had acquired multiple SaaS companies over 5 years, resulting in a fragmented portfolio. Customers switching between modules felt like they were using entirely different software, leading to frustration and increased support costs.',
      problemStatement: 'Inconsistent UI patterns, redundant engineering efforts, and lack of central design governance caused 40% of development time to be wasted on UI recreation rather than feature logic.',
      businessObjectives: ['Unify visual language across 8 products', 'Accelerate time-to-market for new features', 'Ensure WCAG 2.1 AA compliance across all components'],
      successMetrics: ['Reduce design-to-development handoff time by 30%', 'Achieve 100% adoption across core product teams', 'Increase component reuse rate to 80%'],
      expectedOutcome: 'A scalable, documented, and engineering-ready component library that serves as the single source of truth for the entire organization.',
    },
    challenge: {
      description: 'The primary challenge was not just creating components, but driving adoption across siloed engineering teams who were accustomed to their own tech stacks and workflows.',
      keyIssues: [
        'Legacy workflows deeply ingrained in engineering pods',
        'Fragmented experiences causing high cognitive load for end-users',
        'Complex data density requirements for enterprise tables and charts',
        'Accessibility compliance was historically ignored'
      ],
    },
    responsibilities: [
      'UX Strategy and Governance',
      'Design System Architecture',
      'Component Library Design (Figma)',
      'Design Token Structuring',
      'Accessibility (WCAG) Audits',
      'Developer Handoff & Storybook Integration'
    ],
    discovery: {
      kickoff: 'Initiated a 2-week discovery sprint with lead engineers and product managers from all 8 product lines to audit existing UI inconsistencies.',
      competitorAnalysis: 'Analyzed IBM Carbon, Salesforce Lightning, and Atlassian Design System to benchmark enterprise standards for data density and token architecture.',
      audit: 'Conducted a UI inventory, discovering 42 variations of primary buttons and 15 different date pickers currently in production.',
      painPoints: [
        'Engineers spending days building custom UI components',
        'Designers lacking a source of truth, leading to "creative drift"',
        'Users struggling to learn new UI patterns when moving between product modules'
      ],
      opportunities: [
        'Centralize color and typography via semantic design tokens',
        'Create a contribution model for teams to propose new components',
        'Build accessibility into the core components by default'
      ],
    },
    research: {
      objectives: ['Understand engineering bottlenecks during UI implementation', 'Identify the most frequently used components across the platform'],
      methodology: 'Contextual inquiry with 12 front-end developers, UI audit across 8 products, and internal stakeholder interviews.',
      insights: [
        'Developers needed copy-pasteable React code, not just Figma files.',
        'Data tables and advanced filters were the highest friction areas.',
        'Hard-coded hex values were preventing dark mode implementation.'
      ],
      summary: 'The research confirmed that a design system must be treated as a product itself, serving developers as its primary users.',
    },
    personas: [
      {
        name: 'Alex, Front-end Engineer',
        role: 'Implementer',
        goals: ['Build features faster', 'Avoid CSS debugging'],
        painPoints: ['Vague design specs', 'Inconsistent spacing rules'],
        behaviors: 'Relies heavily on Storybook; prefers semantic token names over hex codes.',
        devices: ['Desktop (MacBook Pro)', 'External 27" Monitor']
      },
      {
        name: 'Sarah, Product Designer',
        role: 'Consumer',
        goals: ['Prototype rapidly', 'Maintain brand consistency'],
        painPoints: ['Updating massive files manually', 'Re-creating table states'],
        behaviors: 'Uses Figma auto-layout extensively; needs clear component guidelines.',
        devices: ['Desktop (MacBook Pro)']
      }
    ],
    journey: {
      current: 'Designers create custom UI -> Handoff with hex codes -> Engineers build from scratch -> QA finds inconsistencies -> Rework.',
      future: 'Designers drag-and-drop components -> Handoff with semantic tokens -> Engineers import React component -> Immediate QA approval.',
      successMoments: ['Figma library published', 'First product team successfully migrates', 'Dark mode toggled flawlessly using tokens'],
    },
    informationArchitecture: {
      description: 'Structured the system into Foundations (Tokens), Components (UI elements), and Patterns (Compositions).',
      hierarchy: ['Foundations (Color, Typography, Spacing)', 'Components (Buttons, Inputs, Dialogs)', 'Patterns (Forms, Empty States, Tables)'],
    },
    userFlow: {
      description: 'Defined the workflow for component contribution and versioning.',
      keyDecisions: ['When to detach a component vs when to request a new variant', 'How deprecation of legacy components is communicated'],
    },
    wireframes: {
      description: 'Focused wireframing on complex patterns like the enterprise data grid and advanced filtering layouts.',
      iterations: ['Iterated on data density: comfortable, compact, and condensed modes for power users.'],
    },
    uiExploration: {
      typography: 'Inter for high legibility in data-dense enterprise dashboards.',
      colorPalette: 'Semantic palette mapping (Primary, Success, Warning, Danger) with automatic accessible contrast ratios.',
      accessibility: 'Enforced a minimum 4.5:1 contrast ratio for all text and interactive elements.',
    },
    designSystem: {
      components: ['Buttons', 'Form Controls', 'Data Tables', 'Modals', 'Toasts', 'Navigation', 'Dropdowns', 'Tooltips'],
      tokens: ['Color (Semantic & Primitive)', 'Spacing', 'Typography', 'Border Radius', 'Elevation'],
    },
    highFidelity: {
      screens: ['Component Documentation Hub', 'Storybook Integration views', 'Figma Asset Library'],
      description: 'Delivered pixel-perfect components utilizing advanced Figma features like Variables, Auto Layout v5, and Component Properties.',
    },
    prototype: {
      description: 'Created interactive prototypes demonstrating component states (hover, active, focus, disabled) and complex transitions like modal mounting.',
      interactions: ['Dropdown micro-interactions', 'Tooltip delays', 'Focus ring animations for keyboard navigation'],
    },
    usabilityTesting: {
      participants: '10 Internal Product Designers, 8 Front-end Engineers',
      tasks: ['Construct a standard settings form using only the library', 'Find the documentation for the DatePicker component'],
      observations: ['Designers struggled initially with nested component properties.', 'Engineers loved the 1:1 mapping between Figma tokens and CSS variables.'],
      iterations: ['Simplified component properties in Figma to reduce cognitive load.', 'Added quick-copy code snippets to the documentation site.'],
    },
    accessibility: {
      guidelines: ['WCAG 2.1 AA', 'Keyboard Navigability', 'Screen Reader Support (ARIA)'],
      improvements: ['Added visible focus states (2px offset rings) to all interactive elements.', 'Ensured all form inputs have associated programmatic labels.'],
    },
    developerHandoff: {
      description: 'Utilized Figma Dev Mode paired with Zeroheight for documentation. Tokens were exported as JSON for ingestion into the CI/CD pipeline.',
      assets: ['Figma UI Kit', 'Design Token JSON', 'React Component Library', 'Zeroheight Documentation'],
    },
    businessImpact: {
      metrics: ['↑ 40% design velocity for new features', '↓ 30% development time via component reuse', '100% WCAG compliance achieved across core flows'],
      summary: 'The design system successfully bridged the gap between design and engineering, fundamentally changing how the organization shipped software.',
    },
    learnings: {
      challenges: [
        'Overcoming initial resistance from engineering teams attached to their bespoke components.',
        'Ensuring backwards compatibility while introducing modern UI tokens.'
      ],
      futureImprovements: [
        'Automate token distribution directly into the CI/CD pipeline.',
        'Expand the component library to cover native mobile apps (React Native).'
      ],
    },
    finalDesignImage: '/hpe-design-system.jpg',
  },
  
  'grc-dashboard': {
    id: 'proj-2',
    slug: 'grc-dashboard',
    hero: {
      title: 'Governance, Risk & Compliance Dashboard',
      industry: 'Finance / Compliance',
      duration: '9 months',
      role: 'Principal Product Designer',
      teamSize: '3 Designers, 8 Engineers, 2 PMs',
      toolsUsed: ['Figma', 'UserTesting', 'Highcharts', 'Miro'],
      platform: 'Web Application (Desktop Optimized)',
    },
    overview: {
      briefIntro: 'An executive dashboard designed to simplify complex risk management, audit tracking, and compliance reporting for Fortune 500 enterprises.',
      businessBackground: 'Compliance teams were managing risks across global markets using fragmented spreadsheets and legacy software, leading to high error rates and severe regulatory penalties.',
      problemStatement: 'Risk officers lacked a unified, real-time view of their compliance posture. Critical alerts were buried in raw data, and audit reporting took weeks to compile manually.',
      businessObjectives: ['Provide a real-time global risk posture view', 'Automate audit trail generation', 'Reduce time spent on data reconciliation'],
      successMetrics: ['Decrease audit preparation time by 50%', 'Increase daily active usage by risk officers', 'Zero regulatory reporting delays'],
      expectedOutcome: 'A powerful, highly-visual dashboard that bubbles up critical risks and automates compliance workflows.',
    },
    challenge: {
      description: 'Designing for extremely high data density while maintaining clarity. The dashboard needed to serve both C-level executives (needing high-level summaries) and compliance analysts (needing deep-dive data tables).',
      keyIssues: [
        'Data overload leading to decision paralysis',
        'Multiple user roles with entirely different mental models',
        'Strict security and data privacy constraints during research',
        'Complex data visualization requirements'
      ],
    },
    responsibilities: [
      'Domain Research & Stakeholder Workshops',
      'Information Architecture',
      'Complex Data Visualization Design',
      'Prototyping & Usability Validation',
      'Design QA'
    ],
    discovery: {
      kickoff: 'Conducted a 3-day workshop with Chief Risk Officers (CROs) and compliance analysts to map the end-to-end audit lifecycle.',
      competitorAnalysis: 'Evaluated legacy GRC platforms like MetricStream and Archer, identifying opportunities for a more modern, consumer-grade UX.',
      audit: 'Audited the client’s existing 45-page Excel risk matrix.',
      painPoints: [
        'Finding the source of a compliance failure required navigating through 8 different screens.',
        'Data visualizations were misleading or lacked contextual tooltips.',
        'No clear hierarchy between critical regulatory risks and minor internal policy breaches.'
      ],
      opportunities: [
        'Implement a unified "Risk Score" metric.',
        'Use progressive disclosure to handle data density.',
        'Create role-based dashboard views.'
      ],
    },
    research: {
      objectives: ['Understand how CROs prioritize risks daily', 'Map the workflow of an analyst preparing an audit report'],
      methodology: 'Contextual inquiry (observing analysts at work), in-depth interviews with 8 risk officers, and concept testing.',
      insights: [
        'CROs only care about anomalies and trends; analysts care about the raw underlying data.',
        'Heatmaps are the industry standard mental model for risk, but they are often inaccessible to colorblind users.',
        'Exporting to PDF/Excel is a mandatory feature, not a nice-to-have.'
      ],
      summary: 'The interface needed a "hub and spoke" model—a high-level executive dashboard (hub) that seamlessly drills down into detailed investigative views (spokes).',
    },
    personas: [
      {
        name: 'David, Chief Risk Officer',
        role: 'Executive',
        goals: ['Monitor global risk posture', 'Report to the board'],
        painPoints: ['Too much noise in reports', 'Inability to see historical trends easily'],
        behaviors: 'Logs in daily for 10 minutes. Relies on visual indicators.',
        devices: ['Desktop', 'Tablet (iPad Pro)']
      },
      {
        name: 'Elena, Compliance Analyst',
        role: 'Investigator',
        goals: ['Resolve compliance flags', 'Prepare audit evidence'],
        painPoints: ['Cross-referencing data across systems', 'Manual report formatting'],
        behaviors: 'Spends 4-6 hours daily in the app. Heavy keyboard user.',
        devices: ['Desktop (Dual Monitors)']
      }
    ],
    journey: {
      current: 'Alert received via email -> Log into legacy system -> Export CSV -> Analyze in Excel -> Draft report in Word.',
      future: 'In-app smart alert -> Click to investigate context -> Add notes in-system -> Auto-generate compliance report.',
      successMoments: ['Instant identification of a high-severity risk via the Heatmap', 'One-click audit report generation'],
    },
    informationArchitecture: {
      description: 'Structured the platform around four core pillars: Dashboard (Overview), Risk Register (Details), Audits (Workflows), and Reports.',
      hierarchy: ['Executive Overview', 'Risk Heatmap', 'Departmental Breakdown', 'Individual Risk Item Details', 'Audit Trail Logs'],
    },
    userFlow: {
      description: 'Mapped the complex "Risk Mitigation Workflow"—from identification to mitigation, approval, and closure.',
      keyDecisions: ['Required approval chains based on risk severity', 'Handling edge cases where data sources fail to sync'],
    },
    wireframes: {
      description: 'Created low-fidelity wireframes to establish the grid structure. Focused heavily on modular widget placement for the dashboard.',
      iterations: ['Moved from a tabbed layout to a unified scrolling dashboard with sticky filters based on executive feedback.'],
    },
    uiExploration: {
      typography: 'Roboto for dense data tables, ensuring high readability of numerical data (tabular lining).',
      colorPalette: 'Muted dark mode aesthetic to reduce eye strain for analysts, using vibrant, accessible colors (Red/Orange/Green) only for status indicators.',
      accessibility: 'Added texture/patterns to the risk heatmap to ensure it was readable for red-green colorblind users (Deuteranomaly).',
    },
    designSystem: {
      components: ['Data Grids with inline editing', 'Complex Filters', 'Donut Charts', 'Risk Heatmaps', 'Timeline Logs'],
      tokens: ['Status Colors', 'Chart Palettes', 'Elevation layers for dark mode'],
    },
    highFidelity: {
      screens: ['Global Risk Dashboard', 'Risk Heatmap Drill-down', 'Compliance Policy Matrix', 'Audit Report Builder'],
      description: 'Designed a highly premium, dark-themed dashboard that felt akin to a Bloomberg terminal—professional, data-rich, and lightning fast.',
    },
    prototype: {
      description: 'Built a high-fidelity Figma prototype utilizing advanced variables to simulate real-time filtering and data drilling.',
      interactions: ['Chart hover tooltips', 'Smooth modal transitions for risk mitigation workflows', 'Skeleton loading states'],
    },
    usabilityTesting: {
      participants: '5 Executives, 7 Compliance Analysts',
      tasks: ['Identify the region with the highest operational risk', 'Assign a mitigation task to a department head'],
      observations: ['Executives found the heatmap highly intuitive but wanted a way to export the exact view for board meetings.', 'Analysts struggled initially with the advanced filter syntax.'],
      iterations: ['Added a global "Export View" utility.', 'Redesigned the advanced filter into a more intuitive visual query builder.'],
    },
    accessibility: {
      guidelines: ['WCAG 2.1 AA', 'Color Contrast Compliance'],
      improvements: ['Implemented pattern-based data visualization.', 'Ensured data tables were fully navigable via keyboard with ARIA grid roles.'],
    },
    developerHandoff: {
      description: 'Detailed handoff using Figma Dev Mode, paired with specific documentation on Highcharts.js implementation for the visualizations.',
      assets: ['Figma Specs', 'SVG Chart Assets', 'Interaction flow diagrams in FigJam'],
    },
    businessImpact: {
      metrics: ['↓ 50% reduction in audit preparation time', '↑ 35% productivity increase for analysts', '0 missed audits in the first quarter post-launch'],
      summary: 'The dashboard transformed a chaotic, spreadsheet-driven process into a sleek, centralized command center for enterprise risk.',
    },
    learnings: {
      challenges: ['Balancing the need for detailed data with executive summary views.', 'Navigating strict enterprise data security constraints during user research.'],
      futureImprovements: ['Incorporate predictive AI to forecast risk trends based on historical data.', 'Develop a companion mobile app for on-the-go executives.'],
    },
    finalDesignImage: '/grc1.jpg',
  },
  
  'saas-analytics-dashboard': {
    id: 'proj-3',
    slug: 'saas-analytics-dashboard',
    hero: {
      title: 'SaaS Analytics Dashboard',
      industry: 'Business Intelligence',
      duration: '6 months',
      role: 'UX Director',
      teamSize: '2 Designers, 6 Engineers',
      toolsUsed: ['Figma', 'Principle', 'Mixpanel', 'Linear'],
      platform: 'Web Application',
    },
    overview: {
      briefIntro: 'A modern, customizable business intelligence platform for SaaS founders and growth teams to track real-time KPIs.',
      businessBackground: 'The client wanted to disrupt the BI market by offering a tool that was as powerful as Tableau but as easy to use as Google Analytics.',
      problemStatement: 'Existing BI tools were too complex for non-technical users, requiring SQL knowledge to generate basic reports, leading to low adoption across marketing and sales teams.',
      businessObjectives: ['Democratize data access for non-technical users', 'Enable 1-click dashboard customization', 'Provide actionable insights, not just raw data'],
      successMetrics: ['↑ 60% user adoption across non-technical roles', '↓ 40% reduction in data-related support tickets', '95% CSAT score'],
      expectedOutcome: 'An intuitive, drag-and-drop analytics dashboard with beautiful default visualizations and smart insights.',
    },
    challenge: {
      description: 'Translating complex data querying into a simple, visual drag-and-drop interface without losing the power required by power users.',
      keyIssues: [
        'Steep learning curve in data visualization',
        'Customization vs. Consistency (allowing users to edit dashboards without breaking the layout)',
        'Performance issues rendering large datasets in the browser'
      ],
    },
    responsibilities: [
      'Product Strategy',
      'UX Research & Conceptualization',
      'Widget & Layout Engine Design',
      'High-Fidelity UI Design',
      'Micro-interaction Design'
    ],
    discovery: {
      kickoff: 'Aligned with the product team on the core "North Star" metrics that SaaS companies care about (MRR, Churn, LTV, CAC).',
      competitorAnalysis: 'Analyzed Amplitude, Mixpanel, and Metabase. Identified a white space for a beautifully designed, opinionated analytics tool.',
      audit: 'Reviewed the MVP prototype which suffered from cluttered UI and lack of visual hierarchy.',
      painPoints: [
        'Users didn\'t know how to build a chart from scratch.',
        'Filtering data across multiple widgets was tedious.',
        'Dashboards looked ugly when users resized widgets poorly.'
      ],
      opportunities: [
        'Provide pre-built "Templates" for common SaaS metrics.',
        'Implement a smart auto-aligning grid system for the dashboard.',
        'Use natural language processing (NLP) for querying (e.g., "Show me revenue by month").'
      ],
    },
    research: {
      objectives: ['Identify the most critical metrics for SaaS operators', 'Understand the barriers to using current BI tools'],
      methodology: 'Interviews with 15 SaaS founders, marketers, and product managers.',
      insights: [
        'Users want answers, not charts. (e.g., "Why did churn spike yesterday?")',
        'Sharing data via Slack/Email is just as important as viewing it in the app.',
        'Visual aesthetics matter—founders want dashboards they can screenshot for investors.'
      ],
      summary: 'The product needed to shift from being a "data exploration tool" to an "insight generation engine."',
    },
    personas: [
      {
        name: 'Michael, SaaS Founder',
        role: 'Decision Maker',
        goals: ['Track MRR growth', 'Prepare investor updates'],
        painPoints: ['Doesn\'t have time to write SQL', 'Data in Stripe doesn\'t match data in the CRM'],
        behaviors: 'Wants high-level overviews with the ability to drill down if a metric looks off.',
        devices: ['Desktop', 'Mobile']
      },
      {
        name: 'Sarah, Growth Marketer',
        role: 'Operator',
        goals: ['Track campaign ROI', 'Analyze conversion funnels'],
        painPoints: ['Waiting on data analysts to build reports'],
        behaviors: 'Explores data deeply, heavily utilizes segmentation and cohort analysis.',
        devices: ['Desktop']
      }
    ],
    journey: {
      current: 'Ask Data Team for report -> Wait 3 days -> Receive static CSV -> Build chart in Excel.',
      future: 'Select "Marketing Template" -> Connect data source -> Instant beautiful dashboard -> Share via Slack.',
      successMoments: ['Connecting a data source successfully', 'Generating a complex cohort analysis in 3 clicks'],
    },
    informationArchitecture: {
      description: 'Simplified into: Dashboards (Views), Metrics (Library), and Integrations (Data Sources).',
      hierarchy: ['Workspace', 'Dashboards', 'Widgets', 'Chart Configuration', 'Data Sets'],
    },
    userFlow: {
      description: 'Designed the "Widget Creation Flow" using a step-by-step visual builder rather than a blank canvas.',
      keyDecisions: ['Separating Data Selection from Visualization Configuration to reduce cognitive load.'],
    },
    wireframes: {
      description: 'Created extensive wireframes for the drag-and-drop grid system.',
      iterations: ['Moved from a free-form canvas to a strict 12-column masonry grid to ensure user dashboards always looked professional.'],
    },
    uiExploration: {
      typography: 'Inter for clean, modern readability. Large, bold typography for key metrics (Big Number widgets).',
      colorPalette: 'Glassmorphism aesthetic with subtle gradients, deep dark mode backgrounds, and neon accents for chart lines to make data pop.',
      accessibility: 'Ensured chart tooltips were accessible via keyboard navigation.',
    },
    designSystem: {
      components: ['Dashboard Grid Engine', 'Chart Library (Line, Bar, Cohort, Funnel)', 'Date Range Pickers', 'Data Source Connectors'],
      tokens: ['Chart Colors', 'Grid Spacing', 'Glassmorphism effects'],
    },
    highFidelity: {
      screens: ['Main Dashboard', 'Widget Builder Modal', 'Integration Hub', 'Funnel Analysis View'],
      description: 'A visually stunning interface that feels premium, fast, and highly responsive. Utilized subtle background blurs and sleek chart animations.',
    },
    prototype: {
      description: 'Built a highly interactive Principle prototype to demonstrate the drag-and-drop reordering logic and chart drawing animations.',
      interactions: ['Drag and drop snap-to-grid', 'Chart line drawing on load', 'Hover state data crosshairs'],
    },
    usabilityTesting: {
      participants: '8 Non-technical users (Marketers, Founders)',
      tasks: ['Create a new dashboard showing Monthly Recurring Revenue', 'Filter the dashboard to only show Enterprise customers'],
      observations: ['Users loved the pre-built templates.', 'The Global Date filter was initially missed because it blended into the header.'],
      iterations: ['Made the Global Date filter more prominent with a distinct container style.'],
    },
    accessibility: {
      guidelines: ['WCAG AA', 'Keyboard Support'],
      improvements: ['Added tabular data views as an alternative to all charts for screen reader compatibility.'],
    },
    developerHandoff: {
      description: 'Collaborated closely with front-end engineers to ensure the CSS Grid implementation matched the Figma designs perfectly.',
      assets: ['Figma files', 'Animation specs (easing curves, durations)', 'Responsive breakpoints'],
    },
    businessImpact: {
      metrics: ['↑ 60% increase in user adoption across non-technical teams', '↓ 40% reduction in support tickets related to report building', 'Achieved a 95% CSAT score'],
      summary: 'The redesigned analytics platform successfully empowered non-technical users to harness their data, becoming the central operating system for their growth teams.',
    },
    learnings: {
      challenges: ['Designing a robust charting library that works in both light and dark modes.', 'Handling empty states elegantly when data sources are still syncing.'],
      futureImprovements: ['Introduce collaborative features like inline commenting on specific data points.', 'Build an AI query assistant.'],
    },
    finalDesignImage: '/SaaS_dashboard.png',
  },
  
  'hpe-storage-platform': {
    id: 'proj-4',
    slug: 'hpe-storage-platform',
    hero: {
      title: 'HPE Storage Platform',
      industry: 'Cloud & Infrastructure',
      duration: '14 months',
      role: 'Senior UI/UX Designer',
      teamSize: '5 Designers, 20+ Engineers',
      toolsUsed: ['Figma', 'HPE Design System', 'Usability Hub'],
      platform: 'Web Application',
    },
    overview: {
      briefIntro: 'Enterprise storage management software for server administration, cloud provisioning, and real-time performance monitoring.',
      businessBackground: 'HPE needed to modernize its legacy infrastructure management tools to compete with cloud-native offerings from AWS and Azure.',
      problemStatement: 'IT administrators faced steep learning curves, fragmented workflows for cloud provisioning, and difficult-to-parse performance metrics.',
      businessObjectives: ['Modernize the legacy UI to align with the new HPE GreenLake brand', 'Simplify the storage provisioning workflow', 'Improve observability of system health'],
      successMetrics: ['↑ 20% user adoption of new platform features', '↓ 30% time spent on onboarding new administrators', '↓ 40% reduction in configuration errors'],
      expectedOutcome: 'A unified, intuitive control plane for managing hybrid cloud storage infrastructure.',
    },
    challenge: {
      description: 'Balancing the deep technical requirements of infrastructure engineers with the need for a simplified, modern user experience.',
      keyIssues: [
        'Extremely complex domain knowledge required to understand user tasks',
        'Strict adherence to the overarching HPE design system while inventing new patterns for storage',
        'Visualizing petabytes of data usage intuitively'
      ],
    },
    responsibilities: [
      'Workflow Analysis & Simplification',
      'Wireframing Complex Technical Flows',
      'Adhering to & Extending the HPE Design System',
      'High-Fidelity UI Design',
      'Collaboration with Global Engineering Teams'
    ],
    discovery: {
      kickoff: 'Embedded with the storage engineering team to understand the technical constraints of SAN, NAS, and Object storage provisioning.',
      competitorAnalysis: 'Evaluated AWS S3 console, Pure Storage, and NetApp ONTAP.',
      audit: 'Audited the legacy HPE 3PAR and Nimble storage management consoles.',
      painPoints: [
        'Provisioning a new storage volume took 15 steps across 4 different screens.',
        'Performance bottlenecks were difficult to diagnose due to poor charting.',
        'Terminology was inconsistent across different storage product lines.'
      ],
      opportunities: [
        'Implement a wizard-based approach for complex provisioning tasks.',
        'Standardize terminology across the hybrid cloud portfolio.',
        'Use machine learning insights to predict storage capacity exhaustion.'
      ],
    },
    research: {
      objectives: ['Map the end-to-end workflow of a Storage Administrator', 'Identify common errors made during configuration'],
      methodology: 'Remote contextual inquiry and task analysis with 12 IT administrators.',
      insights: [
        'Admins rely heavily on topology maps to understand physical vs. logical storage.',
        'Error messages in the legacy system were unhelpful (e.g., "Error 504") rather than actionable.',
        'Capacity planning is a major anxiety point for admins.'
      ],
      summary: 'The redesign needed to focus heavily on observability (making system states clear) and guided workflows for destructive or complex actions.',
    },
    personas: [
      {
        name: 'Robert, Storage Administrator',
        role: 'IT Pro',
        goals: ['Ensure 99.999% uptime', 'Provision storage quickly for dev teams'],
        painPoints: ['Click-heavy interfaces', 'Lack of visibility into IOPS performance'],
        behaviors: 'Highly technical, prefers CLI but uses GUI for high-level monitoring.',
        devices: ['Desktop (Linux/Windows)']
      }
    ],
    journey: {
      current: 'Receive Jira ticket -> Open CLI or legacy GUI -> Navigate through 5 tabs -> Execute command -> Manually verify.',
      future: 'Receive Jira ticket -> Open new portal -> Use 3-step provisioning wizard -> System auto-verifies.',
      successMoments: ['Successfully provisioning a volume in under 2 minutes', 'Instantly locating a failing hard drive in the topology view'],
    },
    informationArchitecture: {
      description: 'Flattened a deep hierarchy into a more manageable structure focusing on Infrastructure, Data Services, and Analytics.',
      hierarchy: ['Dashboard', 'Hardware Topology', 'Volumes & File Shares', 'Data Protection', 'Performance Analytics'],
    },
    userFlow: {
      description: 'Redesigned the "Volume Provisioning Flow".',
      keyDecisions: ['Using progressive disclosure to hide advanced configuration options (like RAID levels) behind an "Advanced Settings" toggle.'],
    },
    wireframes: {
      description: 'Extensive wireframing of the Hardware Topology view to map physical servers to logical data stores.',
      iterations: ['Iterated on the topology map to handle scale (e.g., viewing 1000+ drives without the UI freezing).'],
    },
    uiExploration: {
      typography: 'Metric (HPE Brand Font) for all UI elements.',
      colorPalette: 'HPE GreenLake palette (Dark mode optimized with distinctive Green/Teal branding).',
      accessibility: 'Ensured all status icons (Healthy, Warning, Critical) had distinct shapes, not just colors.',
    },
    designSystem: {
      components: ['Wizard Flows', 'Topology Nodes', 'Resource Capacity Bars', 'Data Grids'],
      tokens: ['HPE Global Tokens'],
    },
    highFidelity: {
      screens: ['Storage Dashboard', 'Volume Provisioning Wizard', 'Hardware Topology Map', 'Capacity Forecasting'],
      description: 'A deeply technical yet visually refined interface that instills confidence in the user.',
    },
    prototype: {
      description: 'Created clickable prototypes for user testing the new wizard flow.',
      interactions: ['Multi-step form validation', 'Topology node expansion'],
    },
    usabilityTesting: {
      participants: '10 IT Administrators',
      tasks: ['Provision a 5TB volume for a new SQL server', 'Identify which physical drive is causing a performance bottleneck'],
      observations: ['Users completed the provisioning task 40% faster.', 'The topology map was highly praised but required better zoom controls.'],
      iterations: ['Added minimap navigation to the topology view for better spatial awareness.'],
    },
    accessibility: {
      guidelines: ['WCAG 2.1 AA'],
      improvements: ['Shape-coded status indicators', 'Full keyboard navigability for the data grids'],
    },
    developerHandoff: {
      description: 'Handed off designs using Figma, closely collaborating with the UI engineering team to ensure the topology SVGs rendered performantly.',
      assets: ['Figma Specs', 'SVG Iconography', 'Component states'],
    },
    businessImpact: {
      metrics: ['↑ 20% user adoption', '↓ 30% onboarding time', '↓ 40% user errors during provisioning'],
      summary: 'The new platform modernized HPE’s storage management, making it competitive with cloud-native UX standards and significantly improving IT admin productivity.',
    },
    learnings: {
      challenges: ['Learning complex storage networking concepts quickly to design effectively.', 'Designing for edge cases where hardware fails catastrophically.'],
      futureImprovements: ['Integrate generative AI to suggest optimal storage tiering based on usage patterns.'],
    },
    finalDesignImage: '/HPE.png',
  },
  
  'ap104-grievance-dashboard': {
    id: 'proj-5',
    slug: 'ap104-grievance-dashboard',
    hero: {
      title: 'AP 104 Grievance Dashboard',
      industry: 'Government Tech / Citizen Services',
      duration: '8 months',
      role: 'Lead UX Consultant',
      teamSize: '2 Designers, 10 Engineers',
      toolsUsed: ['Adobe XD', 'Balsamiq', 'Zeplin'],
      platform: 'Web Application & Mobile Dashboard',
    },
    overview: {
      briefIntro: 'A state-wide complaint tracking and SLA management dashboard for the Government of Andhra Pradesh.',
      businessBackground: 'The "104" helpline receives thousands of health and civic grievances daily. The existing manual tracking system was failing, resulting in unresolved complaints and lack of accountability.',
      problemStatement: 'Government officials lacked visibility into departmental performance. Grievances were falling through the cracks due to a lack of automated SLA tracking and escalation matrices.',
      businessObjectives: ['Digitize the entire grievance lifecycle', 'Enforce Service Level Agreements (SLAs)', 'Provide transparency to higher officials via a unified dashboard'],
      successMetrics: ['↑ 80% SLA compliance', '↓ 60% average resolution time', 'Successfully manage 1M+ citizens’ grievances'],
      expectedOutcome: 'An robust, multi-tiered dashboard that allows officials at district, mandal, and state levels to track, escalate, and resolve citizen issues.',
    },
    challenge: {
      description: 'Designing a system that accommodates varying levels of tech-literacy among government employees while handling massive volumes of data securely.',
      keyIssues: [
        'Low digital literacy among ground-level officers',
        'Complex hierarchical escalation matrices (Village -> Mandal -> District -> State)',
        'Need for multilingual support (Telugu & English)'
      ],
    },
    responsibilities: [
      'Requirements Gathering with Government Officials',
      'Information Architecture & Escalation Mapping',
      'Wireframing & UI Design',
      'Multilingual UI Considerations',
      'Handoff via Zeplin'
    ],
    discovery: {
      kickoff: 'Held workshops with District Collectors and Call Center Operators to map the lifecycle of a complaint.',
      competitorAnalysis: 'Analyzed other state grievance portals (e.g., MahaOnline, CPGRAMS) for best practices in civic tech.',
      audit: 'Reviewed the existing paper and legacy-portal workflows.',
      painPoints: [
        'No visual indication when a complaint breached its SLA.',
        'Data was siloed; a District Collector couldn\'t easily see which Mandal was underperforming.',
        'The interface was cluttered with bureaucratic jargon.'
      ],
      opportunities: [
        'Use color-coded SLA indicators (Green, Yellow, Red) for instant status recognition.',
        'Implement map-based geographical data visualization.',
        'Simplify the UI for data-entry operators.'
      ],
    },
    research: {
      objectives: ['Understand the daily routine of a grievance redressal officer', 'Identify bottlenecks in the resolution process'],
      methodology: 'Field visits to call centers and district offices. Interviews with 10 officers across different hierarchy levels.',
      insights: [
        'Officers prioritize work strictly based on the "escalation risk" (e.g., complaints approaching the Red zone).',
        'Mobile access is critical for field officers verifying complaints on the ground.',
        'Reports need to be easily printable for physical filing.'
      ],
      summary: 'The dashboard needed to be action-oriented, immediately highlighting what needs attention rather than just showing historical data.',
    },
    personas: [
      {
        name: 'Rao, District Collector',
        role: 'Monitor / Executive',
        goals: ['Ensure district-wide SLA compliance', 'Identify underperforming departments'],
        painPoints: ['Cannot easily digest tabular reports', 'Needs high-level summaries'],
        behaviors: 'Reviews dashboard every morning. Prefers charts and maps over tables.',
        devices: ['Desktop', 'Tablet']
      },
      {
        name: 'Lakshmi, Call Center Operator',
        role: 'Data Entry',
        goals: ['Log complaints quickly and accurately', 'Route to correct department'],
        painPoints: ['Slow system response', 'Confusing category selection'],
        behaviors: 'High-speed typist, relies on keyboard shortcuts.',
        devices: ['Desktop']
      }
    ],
    journey: {
      current: 'Citizen calls -> Operator writes in ledger -> Types into legacy portal -> Waits days for physical file movement.',
      future: 'Citizen calls -> Operator logs directly into portal -> Auto-routes to officer -> SLA timer starts -> Officer updates via mobile -> SMS sent to citizen.',
      successMoments: ['Citizen receiving SMS confirmation of resolution', 'Collector identifying a systemic issue via the heat map'],
    },
    informationArchitecture: {
      description: 'Segmented by role: Operators see Data Entry; Officers see Task Lists; Collectors see Analytics Dashboards.',
      hierarchy: ['Overview Dashboard', 'Geospatial Heatmap', 'Department-wise SLA Reports', 'Ticket Action View'],
    },
    userFlow: {
      description: 'Mapped the automated escalation flow.',
      keyDecisions: ['If ticket untouched for 48 hours -> Auto-escalate to next level -> Highlight in Red on dashboard.'],
    },
    wireframes: {
      description: 'Used Balsamiq to quickly validate the complex workflows with government stakeholders before committing to high-fidelity designs.',
      iterations: ['Iterated heavily on the SLA visual indicators to ensure they were prominent without being overwhelming.'],
    },
    uiExploration: {
      typography: 'Open Sans for English, standard system fonts for Telugu rendering to ensure high readability.',
      colorPalette: 'Clean, professional Blue/White theme (Government standard) with strict semantic colors for statuses (Red for breach, Yellow for warning, Green for safe).',
      accessibility: 'High contrast UI to accommodate older monitors used in government offices.',
    },
    designSystem: {
      components: ['SLA Timers', 'Ticket Cards', 'Geospatial Maps', 'Multi-select dropdowns for routing'],
      tokens: ['Status Colors', 'Typography scales for multi-lingual support'],
    },
    highFidelity: {
      screens: ['State-level Analytics Dashboard', 'Officer Task Queue', 'Ticket Details & Audit Trail', 'Call Center Logging Interface'],
      description: 'Designed in Adobe XD, focusing on clarity, minimal cognitive load, and highly visible action items.',
    },
    prototype: {
      description: 'Interactive XD prototype to demonstrate the ticket routing and escalation behavior to stakeholders.',
      interactions: ['Filtering dashboard by district', 'Expanding ticket history'],
    },
    usabilityTesting: {
      participants: '4 Call Center Operators, 3 District Officers',
      tasks: ['Log a new grievance for a water supply issue', 'Find the oldest unresolved ticket in your district'],
      observations: ['Operators found the new dropdown categorization much faster.', 'Officers immediately gravitated to the Red "SLA Breached" column.'],
      iterations: ['Added keyboard shortcuts for operators to save tickets faster.', 'Added a "Print to PDF" button on all analytics views.'],
    },
    accessibility: {
      guidelines: ['WCAG AA', 'High Contrast'],
      improvements: ['Ensured all Telugu text met minimum size requirements for legibility.', 'Clear error messaging on required fields.'],
    },
    developerHandoff: {
      description: 'Exported assets and CSS snippets via Zeplin. Provided a comprehensive UI specification document.',
      assets: ['Zeplin project', 'Iconography', 'Multilingual typography specs'],
    },
    businessImpact: {
      metrics: ['↑ 80% SLA compliance achieved within 6 months', '↓ 60% reduction in average grievance resolution time', 'Over 1 Million citizens served effectively'],
      summary: 'The dashboard brought unprecedented transparency and accountability to state governance, drastically improving citizen trust in the 104 helpline.',
    },
    learnings: {
      challenges: ['Designing for legacy hardware (e.g., 1024x768 resolution monitors in rural offices).', 'Navigating bureaucratic approval processes for UI changes.'],
      futureImprovements: ['Implement an AI chatbot for citizens to register complaints via WhatsApp directly into the dashboard.'],
    },
    finalDesignImage: '/104_dashboard.png',
  },
  
  'wealthgrow-investment-platform': {
    id: 'proj-6',
    slug: 'wealthgrow-investment-platform',
    hero: {
      title: 'WealthGrow Investment Platform',
      industry: 'Financial Services / FinTech',
      duration: '5 months',
      role: 'Lead UI/UX Designer',
      teamSize: '2 Designers, 5 Engineers',
      toolsUsed: ['Figma', 'Protopie', 'Maze'],
      platform: 'iOS & Android App',
    },
    overview: {
      briefIntro: 'A consumer-facing investment platform for portfolio management, financial analytics, goal tracking, and seamless transactions.',
      businessBackground: 'Retail investing saw a massive boom, but most legacy brokerages offered apps that were intimidating and cluttered, deterring younger, first-time investors.',
      problemStatement: 'Novice investors felt overwhelmed by financial jargon and complex charts, leading to high drop-off rates during onboarding and low active engagement post-funding.',
      businessObjectives: ['Simplify the investment discovery process', 'Increase monthly active users (MAU)', 'Drive growth in Assets Under Management (AUM)'],
      successMetrics: ['↑ 45% MAU', '↑ 25% AUM growth in Q1', 'Achieve 4.5+ App Store Rating'],
      expectedOutcome: 'A sleek, approachable mobile app that educates users while providing powerful portfolio tracking tools.',
    },
    challenge: {
      description: 'Balancing the need for regulatory compliance (KYC, Risk Disclosures) with a frictionless, consumer-grade onboarding experience.',
      keyIssues: [
        'Mandatory multi-step KYC (Know Your Customer) process causing fatigue',
        'Complex financial data needing to be presented simply on small screens',
        'Building trust through UI (security vs. ease of use)'
      ],
    },
    responsibilities: [
      'End-to-End Mobile App Design (iOS & Android)',
      'KYC Onboarding Optimization',
      'Micro-interaction & Motion Design',
      'Usability Testing with Novice Investors'
    ],
    discovery: {
      kickoff: 'Analyzed the drop-off metrics of the existing MVP. 60% of users were abandoning the app at the identity verification stage.',
      competitorAnalysis: 'Audited Robinhood, Acorns, and Zerodha Coin to understand how competitors handle data visualization and onboarding friction.',
      audit: 'Identified that the MVP used technical terms like "EBITDA" and "Expense Ratio" without tooltips or explanations.',
      painPoints: [
        'Users didn\'t understand how their portfolio was performing overall (time-weighted vs money-weighted returns).',
        'Searching for specific stocks or mutual funds was cumbersome.',
        'The app felt "cold" and transactional.'
      ],
      opportunities: [
        'Gamify the savings and goal-setting process.',
        'Use conversational UI for the KYC flow instead of standard web forms.',
        'Implement "Smart Insights" (e.g., "Your portfolio is up 5% this week due to Tech stocks").'
      ],
    },
    research: {
      objectives: ['Understand the emotional state of a first-time investor', 'Test comprehension of basic financial charts'],
      methodology: 'In-person usability testing with 15 millennials (aged 22-35) who had never invested before.',
      insights: [
        'Red numbers cause immediate panic; users prefer context (e.g., "The market is down today, but you are up 12% this year").',
        'Users preferred "Goal-based" investing (e.g., "Buy a house") over "Asset-based" investing (e.g., "Buy an S&P 500 ETF").',
        'Biometric login (FaceID) significantly increased trust.'
      ],
      summary: 'The design needed to shift from a "Trading Terminal" to a "Financial Wellness Coach."',
    },
    personas: [
      {
        name: 'Arjun, First-time Investor',
        role: 'Consumer',
        goals: ['Start investing safely', 'Understand where his money is going'],
        painPoints: ['Scared of losing money', 'Confused by financial jargon'],
        behaviors: 'Checks social media for financial advice. Prefers automated investing (SIPs).',
        devices: ['Mobile (iPhone 13)']
      }
    ],
    journey: {
      current: 'Download app -> Face 20-field form -> Abandon -> Leave 1-star review.',
      future: 'Download app -> 3-step conversational KYC -> Fund account via UPI -> Set "Vacation Goal" -> Invest in recommended portfolio.',
      successMoments: ['First successful deposit', 'Seeing the confetti animation upon reaching a financial milestone'],
    },
    informationArchitecture: {
      description: 'Simplified bottom navigation to the absolute essentials.',
      hierarchy: ['Home (Portfolio)', 'Discover (Explore Assets)', 'Goals', 'Profile & Settings'],
    },
    userFlow: {
      description: 'Redesigned the KYC flow into bite-sized, one-question-per-screen interactions.',
      keyDecisions: ['Using OCR to scan ID cards automatically rather than manual data entry.'],
    },
    wireframes: {
      description: 'Created low-fidelity sketches focusing on chart interactions and swipe gestures.',
      iterations: ['Replaced complex candlestick charts with smooth line charts for the default view, hiding advanced charts behind a toggle.'],
    },
    uiExploration: {
      typography: 'Outfit for headings (modern, geometric) and Inter for numerical data.',
      colorPalette: 'Deep Indigo primary brand color with vibrant Mint Green for positive gains and Coral Red for losses.',
      accessibility: 'Ensured touch targets for buy/sell buttons were at least 48x48dp.',
    },
    designSystem: {
      components: ['Asset Cards', 'Interactive Line Charts', 'Numpad for transactions', 'Bottom Sheets'],
      tokens: ['Semantic feedback colors', 'Haptic feedback triggers'],
    },
    highFidelity: {
      screens: ['Portfolio Overview', 'Asset Details (Stock/Mutual Fund)', 'Conversational KYC', 'Goal Tracker'],
      description: 'A premium, glossy mobile UI featuring glassmorphism elements and smooth gradients to make finance feel modern and approachable.',
    },
    prototype: {
      description: 'Built a high-fidelity Protopie prototype to test the complex gestures (swipe to buy, long-press to scrub charts).',
      interactions: ['Confetti bursts on goal completion', 'Smooth chart scrubbing with haptic feedback', 'Skeleton loaders for API calls'],
    },
    usabilityTesting: {
      participants: '10 Novice Investors',
      tasks: ['Complete account setup', 'Invest $100 into the "Tech Giants" portfolio'],
      observations: ['The "Swipe to Buy" gesture was highly praised for preventing accidental taps.', 'Users loved the plain-English tooltips.'],
      iterations: ['Added a confirmation bottom sheet after the swipe to provide a clear digital receipt.'],
    },
    accessibility: {
      guidelines: ['iOS Human Interface Guidelines', 'Material Design 3', 'Dynamic Type Support'],
      improvements: ['Supported OS-level text scaling so numbers remained readable for visually impaired users.'],
    },
    developerHandoff: {
      description: 'Provided Figma files with detailed motion specs (spring animations) and exact iOS/Android shadow values.',
      assets: ['Figma Specs', 'Lottie Animations for success states', 'Icon assets'],
    },
    businessImpact: {
      metrics: ['↑ 45% Monthly Active Users (MAU)', '↑ 25% growth in Assets Under Management in Q1', 'Achieved a 4.8 App Store Rating'],
      summary: 'WealthGrow successfully transformed a daunting financial task into an engaging, habit-forming experience, capturing significant market share among millennials.',
    },
    learnings: {
      challenges: ['Navigating the strict compliance requirements of SEBI/SEC regarding how returns can be visualized.'],
      futureImprovements: ['Introduce social features allowing users to follow top-performing public portfolios.'],
    },
    finalDesignImage: '/WealthGrow.png',
  },

  'novatutor': {
    id: 'proj-7',
    slug: 'novatutor',
    hero: {
      title: 'NovaTutor',
      industry: 'EdTech / Marketplace',
      duration: '4 months',
      role: 'Product Designer',
      teamSize: '1 Designer, 4 Engineers',
      toolsUsed: ['Figma', 'Notion', 'UserTesting'],
      platform: 'Web Application & Progressive Web App (PWA)',
    },
    overview: {
      briefIntro: 'An integrated learning dashboard and marketplace connecting students with expert tutors globally.',
      businessBackground: 'The tutoring market was highly fragmented. NovaTutor wanted to build a centralized platform where students could discover tutors, schedule sessions, and conduct video lessons all in one place.',
      problemStatement: 'High friction in the discovery and booking process led to significant drop-offs. Tutors were leaving the platform due to poor calendar management tools.',
      businessObjectives: ['Streamline the tutor booking flow', 'Improve tutor retention by offering better management tools', 'Increase repeat bookings'],
      successMetrics: ['↑ 150% increase in completed bookings', '↓ 20% bounce rate on search pages', '↑ 40% user retention month-over-month'],
      expectedOutcome: 'A seamless two-sided marketplace that handles discovery, scheduling, payments, and live video.',
    },
    challenge: {
      description: 'Designing for two distinct user groups (Students and Tutors) with conflicting needs regarding scheduling and flexibility.',
      keyIssues: [
        'Timezone confusion during scheduling',
        'Complex filtering requirements (subject, price, rating, availability)',
        'Building trust between strangers before a paid session'
      ],
    },
    responsibilities: [
      'Two-sided Marketplace Design',
      'Search & Filtering UX',
      'Calendar & Scheduling Interface',
      'Video Call UI layout'
    ],
    discovery: {
      kickoff: 'Mapped the core loop: Search -> Review Profile -> Message/Book -> Session -> Review.',
      competitorAnalysis: 'Looked at Preply, Cambly, and Wyzant. Identified that most platforms had terrible integrated video experiences.',
      audit: 'The existing MVP required students to message tutors back-and-forth just to find a suitable time.',
      painPoints: [
        'Scheduling across timezones was causing a 15% missed-session rate.',
        'Tutor profiles lacked personality; students couldn\'t gauge teaching style.',
        'The checkout process was disjointed from the booking process.'
      ],
      opportunities: [
        'Auto-convert all times to the user\'s local timezone.',
        'Introduce short introduction videos on tutor profiles.',
        'Implement a 1-click booking flow with saved payment methods.'
      ],
    },
    research: {
      objectives: ['Understand how students choose a tutor', 'Identify the biggest pain points for tutors managing their business'],
      methodology: 'Surveys sent to 500 existing users, followed by 10 deep-dive interviews (5 students, 5 tutors).',
      insights: [
        'Students care more about a tutor\'s accent/communication style than their formal degrees.',
        'Tutors hate the admin work of managing schedules and chasing payments.',
        'Cancellations are the biggest source of friction.'
      ],
      summary: 'The platform needed to automate the administrative overhead for tutors while providing rich, video-first profiles for students.',
    },
    personas: [
      {
        name: 'Leo, High School Student',
        role: 'Learner',
        goals: ['Pass AP Calculus', 'Find a tutor who explains things simply'],
        painPoints: ['Anxious about talking to strangers', 'Limited budget'],
        behaviors: 'Prefers booking 30-minute trial sessions before committing.',
        devices: ['Tablet', 'Mobile']
      },
      {
        name: 'Maria, Math Tutor',
        role: 'Educator',
        goals: ['Earn a full-time income', 'Minimize no-shows'],
        painPoints: ['Managing timezones', 'Students canceling last minute'],
        behaviors: 'Uses a laptop for teaching. Wants a dashboard to track earnings.',
        devices: ['Desktop']
      }
    ],
    journey: {
      current: 'Search -> Message 5 tutors -> Wait for replies -> Negotiate time -> Pay via 3rd party -> Meet on Zoom.',
      future: 'Search -> Watch intro video -> View live availability in local time -> Click Book -> Auto-pay -> Meet in-app.',
      successMoments: ['Student finding the perfect tutor match', 'Tutor seeing their monthly earnings graph go up'],
    },
    informationArchitecture: {
      description: 'Separate dashboards for Students (Learning Hub) and Tutors (Teaching Hub).',
      hierarchy: ['Marketplace Search', 'Tutor Profile', 'Booking Flow', 'Video Classroom', 'Messages'],
    },
    userFlow: {
      description: 'Optimized the Search-to-Booking funnel.',
      keyDecisions: ['Integrating the calendar directly onto the search results card so students don\'t have to click into a profile just to see availability.'],
    },
    wireframes: {
      description: 'Wireframed the complex calendar syncing interface for tutors.',
      iterations: ['Moved from a list-based availability picker to a visual weekly calendar grid for easier cognitive processing.'],
    },
    uiExploration: {
      typography: 'Nunito (rounded, friendly) to reduce the anxiety associated with learning and tutoring.',
      colorPalette: 'Vibrant Purple and Yellow to feel energetic and modern, breaking away from traditional boring "academic" blues.',
      accessibility: 'Ensured video UI controls had high contrast and were large enough for touch targets on tablets.',
    },
    designSystem: {
      components: ['Tutor Cards', 'Availability Grid', 'Video Player UI', 'Review Stars', 'Messaging Bubbles'],
      tokens: ['Border radiuses (highly rounded for a friendly feel)'],
    },
    highFidelity: {
      screens: ['Search & Filter', 'Tutor Profile with Video', 'Checkout & Scheduling Modal', 'In-app Video Classroom'],
      description: 'A friendly, highly engaging UI that feels more like a modern consumer app (like Airbnb) rather than a rigid educational tool.',
    },
    prototype: {
      description: 'Prototyped the booking flow in Figma to test the timezone conversion logic visually.',
      interactions: ['Hovering over a tutor card plays their intro video silently', 'Smooth modal transitions for booking'],
    },
    usabilityTesting: {
      participants: '6 Students, 4 Tutors',
      tasks: ['Find a Spanish tutor available on Tuesday evenings', 'Set your availability for next week (Tutor)'],
      observations: ['The timezone auto-conversion completely eliminated scheduling errors during testing.', 'Tutors wanted an easier way to block off entire days.'],
      iterations: ['Added a "Block whole day" toggle to the tutor calendar management tool.'],
    },
    accessibility: {
      guidelines: ['WCAG AA'],
      improvements: ['Added closed captioning support UI for the video classroom. Ensure focus states for keyboard navigation through search results.'],
    },
    developerHandoff: {
      description: 'Handoff via Figma. Provided specific logic documentation for how the timezone conversion should behave on the frontend.',
      assets: ['Figma designs', 'Custom Iconography', 'Empty state illustrations'],
    },
    businessImpact: {
      metrics: ['↑ 150% increase in tutor bookings', '↓ 20% bounce rate on the search page', '↑ 40% retention of tutors month-over-month'],
      summary: 'NovaTutor successfully removed the friction from online tutoring, creating a marketplace where educators can thrive and students can learn seamlessly.',
    },
    learnings: {
      challenges: ['Handling the edge cases of calendar syncing (e.g., Daylight Savings Time changes across different hemispheres).'],
      futureImprovements: ['Implement an interactive whiteboard within the video classroom feature.'],
    },
    finalDesignImage: '/NovaTutor1.png',
  },

  'budgetbridge': {
    id: 'proj-8',
    slug: 'budgetbridge',
    hero: {
      title: 'BudgetBridge',
      industry: 'Personal Finance / FinTech',
      duration: '5 months',
      role: 'Senior UI/UX Designer',
      teamSize: '2 Designers, 3 Engineers',
      toolsUsed: ['Sketch', 'InVision', 'Lottie'],
      platform: 'iOS & Android App',
    },
    overview: {
      briefIntro: 'A smart personal finance app focusing on automated expense tracking, flexible budgeting, and behavioral savings goals.',
      businessBackground: 'Most budgeting apps on the market felt like glorified spreadsheets. BudgetBridge aimed to capture the Gen Z / Millennial market by focusing on behavioral psychology rather than rigid accounting.',
      problemStatement: 'Users found existing budgeting apps too rigid. If they overspent in one category, the app would show "Red" failing states, causing guilt and a 70% abandonment rate within the first month.',
      businessObjectives: ['Increase user retention past day 30', 'Simplify bank connection onboarding', 'Gamify the savings experience'],
      successMetrics: ['↓ 50% onboarding drop-off', '↑ 30% daily active users (DAU)', '↑ 40% completion rate for short-term savings goals'],
      expectedOutcome: 'An empathetic, guilt-free budgeting app that adapts to the user\'s lifestyle.',
    },
    challenge: {
      description: 'Removing the guilt associated with budgeting while still providing accurate financial tracking.',
      keyIssues: [
        'Security concerns regarding Plaid/Bank connections',
        'Categorization of transactions is notoriously inaccurate',
        'Designing for financial anxiety'
      ],
    },
    responsibilities: [
      'Behavioral UX Strategy',
      'Onboarding Flow Optimization',
      'Data Visualization Design',
      'Animation & Gamification'
    ],
    discovery: {
      kickoff: 'Conducted a competitive audit of YNAB, Mint, and Cleo to understand their approaches to budgeting methodologies (Zero-based vs. Cash-flow).',
      competitorAnalysis: 'Identified that Mint was too passive and YNAB was too punitive/complex. A hybrid "flexible" approach was needed.',
      audit: 'Reviewed the current onboarding flow, which asked users to manually input 20 different budget categories before seeing any value.',
      painPoints: [
        'Manual transaction entry is tedious.',
        'Users feel defeated when a single unexpected expense "ruins" their monthly budget.',
        'Connecting a bank account feels risky without proper context.'
      ],
      opportunities: [
        'Implement "Flexible Budgets" that auto-rebalance if you overspend in one category.',
        'Use Lottie animations to celebrate small wins (e.g., staying under budget for coffee).',
        'Streamline onboarding to ask for only 3 primary categories to start.'
      ],
    },
    research: {
      objectives: ['Understand the emotional triggers surrounding money management', 'Test the "Flexible Budget" concept'],
      methodology: 'Diary studies over 2 weeks with 10 target users, plus in-depth emotional interviews.',
      insights: [
        'Users experience extreme guilt when seeing red negative numbers.',
        'Most users budget mentally by "what\'s left to spend" rather than "what I have spent".',
        'Automated categorization is only accurate 70% of the time, causing frustration.'
      ],
      summary: 'The UI must avoid punitive colors (Red) for overspending and instead focus on "Rebalancing" (e.g., "You overspent on Dining, let\'s move $20 from Entertainment").',
    },
    personas: [
      {
        name: 'Jessica, 24, Graphic Designer',
        role: 'Young Professional',
        goals: ['Save for a trip to Japan', 'Stop living paycheck to paycheck'],
        painPoints: ['Impulse shopping', 'Finds spreadsheets terrifying'],
        behaviors: 'Checks bank balance only when anxious. Responds well to positive reinforcement.',
        devices: ['Mobile (iPhone)']
      }
    ],
    journey: {
      current: 'Overspend -> Open App -> See Red Negative Numbers -> Feel Guilt -> Delete App.',
      future: 'Overspend -> Open App -> See "Rebalance" prompt -> Move funds from another category -> Feel in control -> Continue tracking.',
      successMoments: ['Successfully rebalancing a budget without guilt', 'Hitting a 7-day tracking streak'],
    },
    informationArchitecture: {
      description: 'Focus on action rather than just reporting.',
      hierarchy: ['Home (Safe to Spend)', 'Transactions (Review & Swipe)', 'Budgets (Rebalance)', 'Goals'],
    },
    userFlow: {
      description: 'Designed a Tinder-style swipe interface for transaction categorization review.',
      keyDecisions: ['Swipe right to confirm auto-category, swipe left to recategorize. This turned a chore into a micro-game.'],
    },
    wireframes: {
      description: 'Sketched the "Safe to Spend" dial, the core UI element of the home screen.',
      iterations: ['Iterated the dial to clearly show upcoming recurring bills vs. truly disposable income.'],
    },
    uiExploration: {
      typography: 'Circular Std for a friendly, approachable, and highly readable look.',
      colorPalette: 'Moved away from traditional Red/Green. Used a vibrant, calming palette of Teal, Peach, and Soft Yellow. Overspending triggers a neutral Grey/Orange state instead of Red.',
      accessibility: 'Ensured high contrast for financial figures and large, thumb-friendly touch targets.',
    },
    designSystem: {
      components: ['Spend Dials', 'Transaction Swipe Cards', 'Confetti Animations', 'Progress Bars'],
      tokens: ['Semantic colors (Safe, Warning, Rebalance)'],
    },
    highFidelity: {
      screens: ['Home (Safe to spend)', 'Swipe Categorization', 'Budget Rebalancer', 'Goal Celebration'],
      description: 'An inviting, modern mobile interface that feels more like a wellness app than a banking app.',
    },
    prototype: {
      description: 'Created a high-fidelity InVision prototype to test the "Rebalance" interaction.',
      interactions: ['Swipe to categorize', 'Slider to move funds between budgets', 'Lottie animation on goal milestone'],
    },
    usabilityTesting: {
      participants: '12 Target Users (Millennials/Gen Z)',
      tasks: ['Connect your bank account', 'Fix an overspent "Dining" budget'],
      observations: ['The swipe-to-categorize feature was an instant hit; users categorized 50 transactions in under a minute.', 'The "Rebalance" feature successfully eliminated the guilt feeling.'],
      iterations: ['Added more explanatory copy to the Bank Connection screen to reduce security drop-offs.'],
    },
    accessibility: {
      guidelines: ['iOS Accessibility Guidelines'],
      improvements: ['VoiceOver support reading out "Safe to spend is $150" clearly.', 'Reduced motion toggle for Lottie animations.'],
    },
    developerHandoff: {
      description: 'Exported Lottie JSON files and provided detailed spacing specs via Zeplin.',
      assets: ['Sketch Files', 'Zeplin link', 'Lottie JSONs'],
    },
    businessImpact: {
      metrics: ['↓ 50% drop-off during onboarding', '↑ 30% Daily Active Users', '↑ 40% completion rate for user-set savings goals'],
      summary: 'BudgetBridge successfully gamified personal finance, turning a high-anxiety task into an engaging, guilt-free daily habit.',
    },
    learnings: {
      challenges: ['Designing around the limitations and latency of third-party banking APIs (Plaid).'],
      futureImprovements: ['Add shared budgets for couples.'],
    },
    finalDesignImage: '/budgetbridge.png',
  },

  'yancey-rental': {
    id: 'proj-9',
    slug: 'yancey-rental',
    hero: {
      title: 'Yancey Rental',
      industry: 'B2B E-Commerce / Equipment Rental',
      duration: '6 months',
      role: 'Lead UX Designer',
      teamSize: '2 Designers, 8 Engineers',
      toolsUsed: ['Figma', 'Hotjar', 'Google Analytics'],
      platform: 'Responsive Web Application',
    },
    overview: {
      briefIntro: 'A robust B2B e-commerce platform streamlining heavy equipment rental, inventory management, and automated checkout.',
      businessBackground: 'Yancey Bros. (a Caterpillar dealer) managed equipment rentals via phone calls and legacy ERP systems. They needed a modern digital storefront to allow contractors to rent equipment 24/7.',
      problemStatement: 'The existing website was an informational brochure. Contractors couldn\'t see real-time pricing, availability, or manage their active rentals, resulting in heavy reliance on customer service reps.',
      businessObjectives: ['Digitize the rental booking process', 'Reduce call center volume', 'Increase rental utilization rates'],
      successMetrics: ['↑ 30% online conversion rate', '↓ 20% bounce rate', 'Shift 40% of rental volume to the digital platform'],
      expectedOutcome: 'A seamless B2B e-commerce experience tailored to the complex needs of construction contractors.',
    },
    challenge: {
      description: 'B2B e-commerce is vastly different from B2C. Rentals involve complex logic (daily/weekly/monthly rates), delivery logistics, and corporate account management.',
      keyIssues: [
        'Real-time inventory syncing with the legacy ERP',
        'Complex pricing structures based on customer account tiers',
        'Handling delivery logistics for heavy machinery'
      ],
    },
    responsibilities: [
      'B2B E-commerce UX Strategy',
      'Search & Filtering Design',
      'Complex Checkout Flow Optimization',
      'Customer Portal Design (Managing active rentals)'
    ],
    discovery: {
      kickoff: 'Conducted a deep dive into the Caterpillar ecosystem and the daily life of a construction project manager.',
      competitorAnalysis: 'Analyzed United Rentals and Sunbelt Rentals. Found that most competitors struggled with clear delivery scheduling UX.',
      audit: 'Reviewed Google Analytics of the old site; 80% of users dropped off at the "Request a Quote" form because they wanted instant pricing.',
      painPoints: [
        'Contractors need equipment ASAP (often next morning); opaque pricing and availability delayed decisions.',
        'Users didn\'t know which specific machine model they needed, only the task they needed to do (e.g., "dig a 10ft trench").',
        'Managing off-renting (returning equipment) via phone led to billing disputes.'
      ],
      opportunities: [
        'Implement faceted search by "Application/Job" rather than just machine specifications.',
        'Provide instant, transparent pricing based on the logged-in user\'s corporate tier.',
        'Create a "My Garage" portal to 1-click off-rent equipment.'
      ],
    },
    research: {
      objectives: ['Understand how contractors select equipment', 'Map the checkout and delivery logistics flow'],
      methodology: 'Interviews with 8 construction project managers and 4 internal sales reps.',
      insights: [
        'Specs matter immensely (reach, lifting capacity, weight).',
        'Delivery coordination is often harder than the rental itself (needs exact site contacts, gate codes).',
        'A large portion of browsing happens on mobile devices while users are physically on the job site.'
      ],
      summary: 'The platform must prioritize robust technical specifications on the product page and a highly detailed, mobile-friendly checkout logistics flow.',
    },
    personas: [
      {
        name: 'Mike, Project Manager',
        role: 'Contractor',
        goals: ['Get equipment to the site by 6 AM tomorrow', 'Keep projects under budget'],
        painPoints: ['Hidden delivery fees', 'Machines breaking down on site'],
        behaviors: 'Browses on mobile from his truck. Wants fast, no-nonsense UX.',
        devices: ['Mobile (Rugged Smartphone)', 'Tablet']
      }
    ],
    journey: {
      current: 'Need excavator -> Call rep -> Wait for quote -> Approve via email -> Call again to return it.',
      future: 'Need excavator -> Search on mobile -> See instant price/availability -> Checkout with delivery details -> Click "Off-Rent" in app when done.',
      successMoments: ['Seeing immediate availability', '1-click off-renting to stop billing instantly'],
    },
    informationArchitecture: {
      description: 'Structured the catalog logically for B2B.',
      hierarchy: ['Equipment Categories', 'Product Details (Specs & Rates)', 'Cart & Logistics Checkout', 'Customer Portal (Active Rentals, Invoices)'],
    },
    userFlow: {
      description: 'Designed a multi-step accordion checkout to handle the heavy logistics.',
      keyDecisions: ['Separating "Site Contact" from "Billing Contact", as the person receiving the tractor is rarely the person paying for it.'],
    },
    wireframes: {
      description: 'Focused on the mobile view first, as field workers rely heavily on their phones.',
      iterations: ['Moved the daily/weekly/monthly rate table to be a sticky element on the product page so it\'s always visible while scrolling specs.'],
    },
    uiExploration: {
      typography: 'Roboto for a utilitarian, industrial feel.',
      colorPalette: 'Caterpillar Yellow and Black to align with brand identity, using stark white backgrounds for high contrast in outdoor sunlight.',
      accessibility: 'High contrast ratios required for visibility on screens under bright outdoor sunlight on construction sites.',
    },
    designSystem: {
      components: ['Product Cards with Spec tables', 'Logistics Forms', 'Pricing Tables', 'Date/Time Pickers for delivery'],
      tokens: ['Brand Yellow', 'High-contrast typography'],
    },
    highFidelity: {
      screens: ['Search & Faceted Filters', 'Product Detail Page', 'Logistics Checkout', 'Active Rentals Dashboard'],
      description: 'A rugged, clean, and highly functional B2B e-commerce interface optimized for speed and clarity.',
    },
    prototype: {
      description: 'Created a Figma prototype testing the complex faceted filtering on mobile.',
      interactions: ['Sticky rate cards', 'Filter drawer slide-outs', 'Accordion checkout progression'],
    },
    usabilityTesting: {
      participants: '6 Construction Project Managers',
      tasks: ['Rent a 50ft Boom Lift for next Tuesday', 'Request to return (off-rent) an active rental'],
      observations: ['Users appreciated the clear breakdown of environmental fees and delivery charges.', 'The date picker needed specific constraints (e.g., cannot select Sundays for delivery).'],
      iterations: ['Updated the date picker logic to visually disable non-delivery days and grey out past times.'],
    },
    accessibility: {
      guidelines: ['WCAG AA'],
      improvements: ['Ensured all form fields had persistent visible labels (not just placeholders) for context retention.'],
    },
    developerHandoff: {
      description: 'Detailed handoff focusing heavily on the responsive behavior of complex data tables (specs and pricing).',
      assets: ['Figma Specs', 'Responsive Grid rules'],
    },
    businessImpact: {
      metrics: ['↑ 30% increase in online conversion rate', '↓ 20% bounce rate on catalog pages', 'Successfully shifted 40% of rental volume to the digital platform'],
      summary: 'The platform revolutionized how Yancey Bros did business, significantly reducing call center overhead and providing contractors with the 24/7 self-service tools they demanded.',
    },
    learnings: {
      challenges: ['Integrating modern e-commerce UX with a legacy AS400 ERP backend.'],
      futureImprovements: ['Implement predictive maintenance alerts within the customer portal.'],
    },
    finalDesignImage: '/yancey_rentals.png',
  },

  'hackathon-portal': {
    id: 'proj-10',
    slug: 'hackathon-portal',
    hero: {
      title: 'Hackathon Portal',
      industry: 'Events & Community / Innovation',
      duration: '3 months',
      role: 'UI/UX Designer',
      teamSize: '1 Designer, 3 Engineers',
      toolsUsed: ['Adobe XD', 'Illustrator', 'Trello'],
      platform: 'Web Application',
    },
    overview: {
      briefIntro: 'An end-to-end event management platform tailored specifically for hosting large-scale hackathons and innovation challenges.',
      businessBackground: 'The client, a major tech community organizer, was running 50+ hackathons a year using a chaotic mix of Google Forms, Slack, and Excel, leading to administrative nightmares and poor participant experiences.',
      problemStatement: 'Managing team formations, project submissions, and live judging for 5,000+ participants manually was prone to errors, bias, and delays.',
      businessObjectives: ['Automate the team formation and submission process', 'Digitize the judging and scoring rubric', 'Provide a central hub for all event communications'],
      successMetrics: ['↓ 80% reduction in administrative workload', 'Host 5,000+ participants smoothly', 'Achieve 100% automated judging flow'],
      expectedOutcome: 'A sleek, engaging platform that excites developers to participate while providing organizers with robust management tools.',
    },
    challenge: {
      description: 'Designing a dual-sided platform that needs to be "hype" and engaging for developers, while being rigidly structured and data-heavy for organizers and judges.',
      keyIssues: [
        'Team formation logic (finding teammates with complementary skills)',
        'Handling massive spikes in traffic during the final submission hour',
        'Creating an unbiased, rapid-fire judging interface'
      ],
    },
    responsibilities: [
      'Platform Architecture',
      'Participant Dashboard UX',
      'Judging & Scoring Interface Design',
      'Visual Identity & Branding integration'
    ],
    discovery: {
      kickoff: 'Interviewed previous hackathon organizers and past participants to map the 48-hour event lifecycle.',
      competitorAnalysis: 'Analyzed Devpost and HackerEarth. Identified that while Devpost is great for submissions, it lacks good live-event management features (like team matching).',
      audit: 'Reviewed the client\'s previous workflow, identifying the "Friday Night Team Building" phase as the highest friction point.',
      painPoints: [
        'Solo developers struggled to find teams.',
        'Participants frequently missed announcements lost in noisy Slack channels.',
        'Judges were overwhelmed by spreadsheets, leading to rushed or biased scoring.'
      ],
      opportunities: [
        'Create a "Tinder for Developers" team matching interface.',
        'Implement a centralized announcement timeline.',
        'Design a streamlined, rubric-based digital scorecard for judges.'
      ],
    },
    research: {
      objectives: ['Understand what motivates developers to join hackathons', 'Optimize the judging workflow for speed and fairness'],
      methodology: 'Surveys to 200 past participants. Prototype testing with 5 potential judges.',
      insights: [
        'Developers care deeply about showcasing their tech stack and GitHub profiles.',
        'Judges usually have less than 5 minutes to review a project; the UI must present the video/repo immediately alongside the scorecard.',
        'Gamification (leaderboards, badges) drives engagement.'
      ],
      summary: 'The platform needed three distinct modes: Participant (discovery/creation), Organizer (management), and Judge (evaluation).',
    },
    personas: [
      {
        name: 'Sam, Frontend Developer',
        role: 'Participant',
        goals: ['Find a backend dev to team up with', 'Win the UI/UX prize'],
        painPoints: ['Dealing with complex submission forms at 3 AM'],
        behaviors: 'Highly competitive, values aesthetics and smooth UI.',
        devices: ['Desktop (MacBook)']
      },
      {
        name: 'Dr. Chen, Engineering VP',
        role: 'Judge',
        goals: ['Evaluate 30 projects fairly in 2 hours', 'Identify recruitment targets'],
        painPoints: ['Scoring rubrics are often ambiguous', 'Jumping between different links (GitHub, YouTube)'],
        behaviors: 'Time-poor. Needs everything on a single screen.',
        devices: ['Tablet', 'Desktop']
      }
    ],
    journey: {
      current: 'Register via Form -> Find team on Slack -> Submit via email -> Judge uses Excel -> Wait hours for results.',
      future: 'Register in app -> Match with team via UI -> Submit via portal -> Judge scores in-app -> Instant live leaderboard.',
      successMoments: ['Successfully matching with a team', 'Seeing the project appear on the live leaderboard'],
    },
    informationArchitecture: {
      description: 'Role-based dashboards.',
      hierarchy: ['Event Landing', 'Participant Dashboard (Team, Submission, Timeline)', 'Organizer Admin Panel', 'Judge Scorecard'],
    },
    userFlow: {
      description: 'Streamlined the "Project Submission Flow".',
      keyDecisions: ['Enforcing strict URL validation (GitHub/Video) early in the form to prevent broken links during judging.'],
    },
    wireframes: {
      description: 'Wireframed the Judge Scorecard interface meticulously to minimize scrolling.',
      iterations: ['Embedded the YouTube video player directly next to the scoring rubric sliders so judges don\'t have to switch tabs.'],
    },
    uiExploration: {
      typography: 'Space Grotesk for a "tech/hacker" aesthetic combined with Inter for readability.',
      colorPalette: 'Dark Mode by default. Neon Cyan and Magenta accents to emulate a cyberpunk/hacker vibe, appealing to the target demographic.',
      accessibility: 'Ensured all neon text met contrast requirements against the dark background.',
    },
    designSystem: {
      components: ['Countdown Timers', 'Tech Stack Pills', 'Team Formation Cards', 'Scoring Sliders'],
      tokens: ['Neon glow effects', 'Dark mode elevation layers'],
    },
    highFidelity: {
      screens: ['Event Homepage', 'Team Matchmaker', 'Project Submission Portal', 'Live Judging Dashboard'],
      description: 'A visually striking, dark-themed platform that feels energetic and deeply rooted in developer culture.',
    },
    prototype: {
      description: 'Created an Adobe XD prototype to validate the submission flow and the judging interface.',
      interactions: ['Countdown timer ticking', 'Slider interactions for scoring', 'Hover states on team cards'],
    },
    usabilityTesting: {
      participants: '8 Developers, 3 Event Judges',
      tasks: ['Create a team looking for a backend developer', 'Score a mock project using the rubric'],
      observations: ['Developers loved the tech-stack pills UI.', 'Judges found the embedded video player drastically improved their workflow.'],
      iterations: ['Added an auto-save feature to the submission form to prevent data loss if a developer\'s browser crashed at the last minute.'],
    },
    accessibility: {
      guidelines: ['WCAG AA'],
      improvements: ['Keyboard navigability for the judging sliders to speed up data entry.'],
    },
    developerHandoff: {
      description: 'Handoff via Adobe XD. Focused on explaining the complex conditional logic of team formation (e.g., max 4 members).',
      assets: ['XD Specs', 'SVG Assets', 'Empty state illustrations'],
    },
    businessImpact: {
      metrics: ['↓ 80% reduction in administrative workload for organizers', 'Successfully hosted an event with 5,000+ concurrent participants', '100% automated judging flow resulting in zero calculation errors'],
      summary: 'The portal completely modernized the client\'s event operations, creating a scalable product that could be white-labeled for other organizations.',
    },
    learnings: {
      challenges: ['Designing a submission form that is completely idiot-proof for developers who have been awake for 48 hours.'],
      futureImprovements: ['Integrate GitHub API to automatically pull commit activity as a metric for judging.'],
    },
    finalDesignImage: '/Hackathon.png',
  }
};
