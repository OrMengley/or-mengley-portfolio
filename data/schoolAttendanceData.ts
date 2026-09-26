export interface DomainHighlight {
  title: string;
  description: string;
}

export interface RoleAccessItem {
  roleName: string;
  badge: string;
  scope: string;
  description: string;
  responsibilities: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface FeatureGroupItem {
  groupName: string;
  description: string;
  items: string[];
}

export interface ApiIntegrationPoint {
  title: string;
  description: string;
  iconName: string;
}

export interface GallerySlot {
  id: string;
  title: string;
  category: string;
  description: string;
  src?: string;
  images?: string[];
}

export interface ComplexityFactor {
  title: string;
  description: string;
}

export interface TakeawayItem {
  title: string;
  description: string;
}

export const SCHOOL_ATTENDANCE_DATA = {
  id: 'school-attendance',
  title: 'School Attendance Management System',
  subtitle: 'School Management / Attendance Management Web Application',
  role: 'Frontend Developer',
  frontendTech: ['Vite', 'React', 'TypeScript'],
  backendTech: ['Golang REST API', 'MongoDB', 'JWT Auth'],
  myResponsibility:
    'I worked on the frontend application using React and TypeScript, connecting the user interface to the Golang REST API and implementing role-aware application workflows.',

  overview:
    'A school attendance and management system designed to manage schools, students, teachers, classrooms, academic terms, enrollment, and attendance workflows. The system connects a React frontend to a Golang REST API, utilizing role-based access for Super Admin, Admin, Teacher, and Parent users.',

  domainHighlights: [
    {
      title: 'School & Academic Hierarchy',
      description:
        'Structured administrative control across schools, departments, grade levels, academic terms, and individual classrooms.',
    },
    {
      title: 'Student & Teacher Management',
      description:
        'Comprehensive records, profiles, and enrollment workflows connecting students and teachers to academic classrooms.',
    },
    {
      title: 'Attendance Workflows',
      description:
        'Dedicated teacher check-in and check-out tracking with real-time logging and historical attendance reporting.',
    },
    {
      title: 'Role-Based Access Control',
      description:
        'Enforces tailored user experiences and protected views for Super Admin, Admin, Teacher, and Parent personas.',
    },
  ] as DomainHighlight[],

  frontendResponsibilities: [
    'Building responsive, accessible interfaces using React, TypeScript, and Vite',
    'Developing intuitive form workflows with client-side validation',
    'Designing data tables, filtering tools, and administrative management views',
    'Integrating RESTful API endpoints and managing asynchronous network requests',
    'Handling JWT authentication state, secure token storage, and session lifecycles',
    'Implementing role-based UI behavior and protected route authorization guards',
    'Constructing dedicated teacher attendance check-in and check-out workflows',
    'Structuring student enrollment and academic hierarchy management interfaces',
    'Managing resilient UI error boundaries, loading skeletons, and feedback toasts',
  ],

  technicalStack: {
    frontend: [
      { name: 'React', purpose: 'Component-based UI architecture' },
      { name: 'TypeScript', purpose: 'Static type safety and data modeling' },
      { name: 'Vite', purpose: 'Fast build tooling and development environment' },
    ],
    backendIntegration: [
      { name: 'Golang REST API', purpose: 'Backend service developed by backend engineering team' },
    ],
    database: [
      { name: 'MongoDB', purpose: 'Document database utilized by backend services' },
    ],
    authentication: [
      { name: 'JWT Authentication', purpose: 'Token-based session management across API requests' },
    ],
  },

  roleAccess: [
    {
      roleName: 'Super Admin',
      badge: 'System Level',
      scope: 'Global System Administration',
      description: 'Highest authority level overseeing system-wide configurations and multi-school governance.',
      responsibilities: [
        'System-level administration and configuration',
        'Global school creation and management',
        'High-level administrative oversight',
      ],
    },
    {
      roleName: 'Admin',
      badge: 'School Level',
      scope: 'School-Level Administrative Management',
      description: 'Campus administrators managing academic structures, terms, departments, and enrollment rosters.',
      responsibilities: [
        'School information and profile administration',
        'Department, grade, term, and classroom setup',
        'Student and teacher enrollment management',
      ],
    },
    {
      roleName: 'Teacher',
      badge: 'Classroom Level',
      scope: 'Teaching & Attendance Workflows',
      description: 'Classroom educators conducting daily attendance, tracking check-ins, and managing assigned classrooms.',
      responsibilities: [
        'Assigned classroom and student roster access',
        'Daily student check-in and check-out tracking',
        'Attendance records review and management',
      ],
    },
    {
      roleName: 'Parent',
      badge: 'Student Level',
      scope: 'Student Information & Attendance Access',
      description: 'Guardians monitoring enrolled student attendance history, classroom assignment, and school status.',
      responsibilities: [
        'Parent account authentication and profile view',
        'Access to linked student academic information',
        'Viewing student attendance records and logs',
      ],
    },
  ] as RoleAccessItem[],

  workflowSteps: [
    {
      step: '01',
      title: 'Authentication',
      description: 'User signs in via JWT auth; role-based permissions dynamically configure the interface.',
    },
    {
      step: '02',
      title: 'School Configuration',
      description: 'System sets up school profiles, administrative settings, and departmental units.',
    },
    {
      step: '03',
      title: 'Academic Structure',
      description: 'Grades and academic terms are created to define the institutional calendar structure.',
    },
    {
      step: '04',
      title: 'Classroom Setup',
      description: 'Classrooms are instantiated and mapped to specific grades, departments, and terms.',
    },
    {
      step: '05',
      title: 'Student Enrollment',
      description: 'Student profiles are created and enrolled into designated academic classrooms.',
    },
    {
      step: '06',
      title: 'Teacher Assignment',
      description: 'Teachers are assigned to respective classrooms and granted attendance management rights.',
    },
    {
      step: '07',
      title: 'Daily Attendance',
      description: 'Teachers execute check-in and check-out workflows during daily classroom sessions.',
    },
    {
      step: '08',
      title: 'Attendance Records',
      description: 'Logs are stored, aggregated, and made viewable to administrators, teachers, and parents.',
    },
  ] as WorkflowStep[],

  featureGroups: [
    {
      groupName: 'Authentication & Access',
      description: 'Secure session handling and role-aware navigation.',
      items: [
        'User login with credential validation',
        'JWT token authentication & persistence',
        'Role-based permission gating',
        'Protected application routes',
      ],
    },
    {
      groupName: 'School & Academic Management',
      description: 'Hierarchical configuration of institutional entities.',
      items: [
        'School information management',
        'Department administration',
        'Grade level setup',
        'Academic term scheduling',
        'Classroom configuration',
      ],
    },
    {
      groupName: 'Student Management',
      description: 'Student record lifecycle and academic placement.',
      items: [
        'Student profile & information records',
        'Student enrollment into classrooms',
        'Classroom roster listing & filtering',
        'Academic relationship tracking',
      ],
    },
    {
      groupName: 'Teacher Management',
      description: 'Educator profiles, classroom assignments, and access.',
      items: [
        'Teacher profile management',
        'Teacher classroom enrollment',
        'Teaching schedule & class access',
        'Attendance workflow permissions',
      ],
    },
    {
      groupName: 'Attendance Workflows',
      description: 'Daily tracking and historical verification.',
      items: [
        'Classroom student attendance logging',
        'Student check-in recording',
        'Student check-out recording',
        'Historical attendance records & views',
      ],
    },
    {
      groupName: 'Parent Access',
      description: 'Guardian visibility into student attendance status.',
      items: [
        'Parent account authentication',
        'Linked student overview',
        'Student attendance records review',
        'Academic information access',
      ],
    },
  ] as FeatureGroupItem[],

  apiIntegrationPoints: [
    {
      title: 'API Requests & HTTP Client',
      description:
        'Structured REST calls configured with Axios/fetch, standardized payload typing, and query parameters for filtering.',
      iconName: 'Network',
    },
    {
      title: 'Loading & Skeleton States',
      description:
        'Responsive loading skeletons and subtle progress indicators to provide immediate feedback during asynchronous fetches.',
      iconName: 'Loader2',
    },
    {
      title: 'Error Handling & Resilience',
      description:
        'Centralized HTTP error interceptors, graceful fallback UI, and actionable toast alerts for failed operations.',
      iconName: 'AlertTriangle',
    },
    {
      title: 'JWT Authentication Flow',
      description:
        'Secure authorization token injection via request headers and automated redirection on expired session tokens.',
      iconName: 'Lock',
    },
    {
      title: 'Protected Routes & Navigation',
      description:
        'Client-side router guards preventing unauthorized access based on authenticated user role (Super Admin, Admin, Teacher, Parent).',
      iconName: 'Shield',
    },
    {
      title: 'Form Submission & Validation',
      description:
        'Robust form state management with pre-submission validation before sending multipart or JSON payloads to Go endpoints.',
      iconName: 'FileEdit',
    },
    {
      title: 'Data Rendering & Pagination',
      description:
        'Dynamic table rendering with server-side pagination, sorting, and search filtering for large student/attendance lists.',
      iconName: 'Table',
    },
    {
      title: 'Role-Aware UI Behavior',
      description:
        'Conditional rendering of action buttons, administrative forms, and navigation tabs tailored strictly to user permissions.',
      iconName: 'Users',
    },
  ] as ApiIntegrationPoint[],

  gallerySlots: [
    {
      id: 'login-auth',
      title: 'Login / Authentication Interface',
      category: 'Authentication',
      description:
        'Role-aware login portal featuring JWT token issuance, session storage, and immediate redirection to authorized workspaces.',
      src: '/attendance/login.png',
      images: ['/attendance/login.png'],
    },
    {
      id: 'dashboard-overview',
      title: 'Administrative Dashboard',
      category: 'Overview & Metrics',
      description:
        'Centralized executive overview displaying school metrics, active term status, attendance summaries, and quick action links.',
      src: '/attendance/dashboard.png',
      images: ['/attendance/dashboard.png'],
    },
    {
      id: 'student-mgmt',
      title: 'Student Management & Enrollment',
      category: 'Student Management',
      description:
        'Data table view for searching, filtering, and enrolling students into corresponding grade levels and classrooms.',
      src: '/attendance/students.png',
      images: ['/attendance/students.png', '/attendance/stenrollment.png'],
    },
    {
      id: 'classroom-academic',
      title: 'Classroom & Academic Hierarchy',
      category: 'Academic Management',
      description:
        'Administrative interface for managing departments, terms, grades, and classroom structures with assigned teachers.',
      src: '/attendance/classroom.png',
      images: ['/attendance/classroom.png', '/attendance/classroomdetail.png', '/attendance/classroomst.png'],
    },
    {
      id: 'teacher-attendance',
      title: 'Teacher Attendance Workspace',
      category: 'Attendance Workflows',
      description:
        'Streamlined teacher view for executing daily student check-ins, check-outs, and marking excused/unexcused absences.',
      src: '/attendance/schedual.png',
      images: ['/attendance/schedual.png'],
    },
    {
      id: 'attendance-records',
      title: 'Attendance Records & History',
      category: 'Reports & Logs',
      description:
        'Historical attendance log viewer providing date-range filtering, classroom breakdowns, and student-level summaries.',
      src: '/attendance/dashboard.png',
      images: ['/attendance/dashboard.png'],
    },
  ] as GallerySlot[],

  complexityFactors: [
    {
      title: 'Multiple User Roles & Access Control',
      description:
        'Designing a unified frontend architecture that dynamically adapts its layout, routing, and permitted operations across four distinct user roles (Super Admin, Admin, Teacher, Parent).',
    },
    {
      title: 'Hierarchical Academic Domain Structure',
      description:
        'Modeling interconnected relationships between Schools, Departments, Grades, Terms, Classrooms, Teachers, and Students in clean TypeScript interfaces.',
    },
    {
      title: 'Student & Teacher Enrollment Workflows',
      description:
        'Building multi-step enrollment interfaces with relationship validations to ensure students and teachers are properly assigned to active academic terms.',
    },
    {
      title: 'Teacher Attendance & Real-Time Logging',
      description:
        'Crafting responsive, high-speed attendance forms with immediate visual feedback so teachers can quickly mark classroom check-ins and check-outs without friction.',
    },
    {
      title: 'API-Driven Frontend & Token State',
      description:
        'Coordinating asynchronous data fetching, authorization headers, loading states, and error handling across dozens of REST endpoints served by the Golang backend.',
    },
    {
      title: 'Frontend/Backend Cross-Team Alignment',
      description:
        'Collaborating with backend developers to align on JSON request/response contracts, validation schemas, and role permission structures.',
    },
  ] as ComplexityFactor[],

  takeaways: [
    {
      title: 'React & Vite Application Architecture',
      description: 'Demonstrates expertise in building scalable, component-driven React applications with modern Vite tooling.',
    },
    {
      title: 'Strict TypeScript Modeling',
      description: 'Highlights type-safe frontend practices, comprehensive interface definitions, and resilient state typing.',
    },
    {
      title: 'RESTful API Integration',
      description: 'Proves strong client-side integration capability with external Golang backend services and MongoDB schemas.',
    },
    {
      title: 'Role-Based User Experiences',
      description: 'Showcases the ability to engineer complex, role-gated business workflows tailored to diverse user personas.',
    },
    {
      title: 'Asynchronous State & Feedback',
      description: 'Demonstrates handling of real-world frontend challenges: auth tokens, loading skeletons, and error recovery.',
    },
    {
      title: 'Business Domain Engineering',
      description: 'Shows experience tackling domain-rich business platforms with multi-entity relationships and workflows.',
    },
  ] as TakeawayItem[],
};
