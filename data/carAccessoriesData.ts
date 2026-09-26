export interface DomainHighlight {
  title: string;
  description: string;
}

export interface ArchitectureBlock {
  title: string;
  service: string;
  role: string;
  description: string;
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

export interface CloudIntegrationPoint {
  title: string;
  service: string;
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

export const CAR_ACCESSORIES_DATA = {
  id: 'car-accessories-pos',
  title: 'Car Accessories POS',
  subtitle: 'Point of Sale / Stock Management Web Application',
  role: 'Frontend Developer',
  businessContext: 'Internal web application for a car accessories business owner and small sales team',
  frontendTech: ['Next.js'],
  cloudTech: ['Firebase Firestore', 'Firebase Authentication', 'Cloudinary'],
  myResponsibility:
    'I worked on the frontend application using Next.js, integrating Firestore for business data, Firebase Authentication for user access, and Cloudinary for product image storage.',

  overview:
    'Car Accessories POS is a web application designed to support day-to-day product sales and stock management for a car accessories business. The system focuses on practical internal business workflows including product catalog administration, sales transactions, stock updates, user access control, and hosted product image management for the business owner and sales team.',

  domainHighlights: [
    {
      title: 'Product Catalog Management',
      description:
        'Structured catalog views for organizing automotive accessories, product specifications, pricing, and stock-related information.',
    },
    {
      title: 'POS & Sales Operations',
      description:
        'Streamlined sales workflow for searching and selecting products, recording sales transactions, and reviewing historical sales logs.',
    },
    {
      title: 'Stock & Inventory Updates',
      description:
        'Current stock visibility and inventory updates ensuring accurate product availability during daily sales operations.',
    },
    {
      title: 'User Access & Media Hosting',
      description:
        'Protected application access powered by Firebase Authentication and dedicated Cloudinary product image uploads.',
    },
  ] as DomainHighlight[],

  frontendResponsibilities: [
    'Building responsive, modular user interfaces with Next.js',
    'Developing product management and catalog administration views',
    'Constructing streamlined sales and POS checkout workflows',
    'Building stock monitoring and inventory views',
    'Directly integrating Firebase Firestore for application data',
    'Implementing Firebase Authentication for user login and session access',
    'Integrating Cloudinary for product image uploads, cloud hosting, and delivery',
    'Designing robust forms with client-side data validation',
    'Implementing loading states and graceful error handling for network operations',
  ],

  technicalStack: {
    frontend: [
      { name: 'Next.js', purpose: 'Modern React framework for page rendering and component architecture' },
    ],
    dataService: [
      { name: 'Firebase Firestore', purpose: 'Cloud document database storing products, stock, and sales records' },
    ],
    authentication: [
      { name: 'Firebase Authentication', purpose: 'User identity management and session access' },
    ],
    mediaStorage: [
      { name: 'Cloudinary', purpose: 'Cloud media storage and delivery for product imagery' },
    ],
    architectureType: [
      { name: 'Serverless / Cloud Services', purpose: 'Direct cloud-service integration without a custom REST API backend' },
    ],
  },

  architectureHighlights: [
    {
      title: 'Data & Auth Pipeline',
      service: 'Firebase Suite',
      role: 'Authentication & Firestore Data',
      description:
        'Next.js application communicates directly with Firebase SDK. Firebase Authentication verifies user sessions, while Firestore manages reads and writes for products, stock, and sales data.',
    },
    {
      title: 'Hosted Media Pipeline',
      service: 'Cloudinary',
      role: 'Product Image Storage & Delivery',
      description:
        'Product images are uploaded directly to Cloudinary from the Next.js frontend, offloading media storage and providing hosted asset delivery.',
    },
  ] as ArchitectureBlock[],

  cloudIntegrationPoints: [
    {
      title: 'Direct Firestore Data Management',
      service: 'Firebase Firestore',
      description:
        'The Next.js frontend performs queries and updates directly against Firestore collections for products, inventory levels, and sales logs.',
      iconName: 'Database',
    },
    {
      title: 'Firebase User Authentication',
      service: 'Firebase Authentication',
      description:
        'Handles internal user login states and protects operational views so only authorized team members access POS and inventory controls.',
      iconName: 'Lock',
    },
    {
      title: 'Cloudinary Media Storage & Delivery',
      service: 'Cloudinary',
      description:
        'Decouples binary image storage from the database by hosting product photos on Cloudinary and referencing returned hosted image URLs in Firestore.',
      iconName: 'Image',
    },
    {
      title: 'Serverless Integration Approach',
      service: 'Direct Cloud Service Access',
      description:
        'Operates without a custom backend server or custom REST API, relying on managed cloud services to handle data persistence and authentication.',
      iconName: 'Cloud',
    },
  ] as CloudIntegrationPoint[],

  workflowSteps: [
    {
      step: '01',
      title: 'Authentication',
      description: 'Authorized team members log in via Firebase Authentication to access internal POS and inventory views.',
    },
    {
      step: '02',
      title: 'Product Management',
      description: 'Products are cataloged with names, pricing, details, availability status, and Cloudinary-hosted photos.',
    },
    {
      step: '03',
      title: 'Stock Control',
      description: 'Inventory levels are maintained, updated, and monitored across catalog items.',
    },
    {
      step: '04',
      title: 'POS / Sale',
      description: 'Sales staff select products, calculate subtotals, and process sales in the POS interface.',
    },
    {
      step: '05',
      title: 'Sales Records',
      description: 'Completed transactions are saved into Firestore for sales history tracking and record keeping.',
    },
  ] as WorkflowStep[],

  featureGroups: [
    {
      groupName: '1. Product Management',
      description: 'Catalog controls, product records, and specification details.',
      items: [
        'Product records & catalog listing',
        'Product information & specifications',
        'Product images linked to Cloudinary URLs',
        'Product availability & stock-related information',
      ],
    },
    {
      groupName: '2. POS / Sales',
      description: 'Sales transaction workflow and order records.',
      items: [
        'Product selection & item lookup',
        'Sale workflow & checkout calculation',
        'Sales records & transaction history',
      ],
    },
    {
      groupName: '3. Stock Management',
      description: 'Inventory monitoring and stock-level updates.',
      items: [
        'Stock information & quantity tracking',
        'Stock updates & inventory views',
        'Inventory-related views & availability indicators',
      ],
    },
    {
      groupName: '4. User Access',
      description: 'Internal access control and authentication management.',
      items: [
        'Firebase Authentication login workflow',
        'User access to the application views',
        'User information stored and managed through the application',
      ],
    },
    {
      groupName: '5. Media Management',
      description: 'Dedicated cloud image uploads and delivery.',
      items: [
        'Product image uploads from the frontend',
        'Cloudinary cloud image storage',
        'Cloudinary image hosting and delivery',
      ],
    },
  ] as FeatureGroupItem[],

  complexityFactors: [
    {
      title: 'Managing Related Product, Stock, and Sales Data',
      description:
        'Structuring and coordinating interconnected product catalog data, stock availability updates, and sales records directly in Firestore document collections.',
    },
    {
      title: 'Connecting Multiple Cloud Services',
      description:
        'Integrating Next.js directly with Firebase Authentication for identity, Firestore for structured data, and Cloudinary for media storage without an intermediary backend server.',
    },
    {
      title: 'Handling Image Uploads Separately from Data',
      description:
        'Separating binary media uploads (handled via Cloudinary) from structured business data (stored in Firestore), ensuring clean media URLs and responsive user feedback.',
    },
    {
      title: 'Building Practical POS Workflows',
      description:
        'Creating an intuitive, efficient point-of-sale interface that allows sales staff to quickly find products, verify stock status, and complete transactions.',
    },
    {
      title: 'Managing User Access',
      description:
        'Securing internal business operations with Firebase Authentication, ensuring only authorized team members access POS and inventory controls.',
    },
    {
      title: 'Frontend State Synchronization with Firestore',
      description:
        'Keeping client-side UI state synchronized with Firestore queries to reflect updated inventory levels, new product additions, and recorded sales.',
    },
  ] as ComplexityFactor[],

  takeaways: [
    {
      title: 'Next.js Application Development',
      description: 'Demonstrates experience with building structured, component-driven web applications using modern Next.js.',
    },
    {
      title: 'Firestore Integration',
      description: 'Demonstrates experience with querying, structuring, and updating cloud document data directly from the frontend.',
    },
    {
      title: 'Firebase Authentication Integration',
      description: 'Demonstrates experience with managing authenticated user sessions, auth state lifecycle, and protected views.',
    },
    {
      title: 'Cloudinary Integration',
      description: 'Demonstrates experience with client-side media uploads, cloud asset management, and image delivery.',
    },
    {
      title: 'Business Application UI',
      description: 'Demonstrates experience with designing practical, focused user interfaces for internal retail workflows.',
    },
    {
      title: 'POS & Stock Management Interfaces',
      description: 'Demonstrates experience with creating functional point-of-sale and stock monitoring workflows.',
    },
    {
      title: 'Data-Driven Frontend Development',
      description: 'Demonstrates experience with building dynamic forms, data validation, loading states, and error handling.',
    },
    {
      title: 'Serverless Service Integration',
      description: 'Demonstrates experience with coordinating multiple cloud services in a serverless application architecture.',
    },
  ] as TakeawayItem[],

  gallerySlots: [
    {
      id: 'login-auth',
      title: '1. Login',
      category: 'User Access',
      description:
        'User login interface utilizing Firebase Authentication for internal business access and sessions.',
      src: '/car_accessories/login.png',
      images: ['/car_accessories/login.png'],
    },
    {
      id: 'product-mgmt',
      title: '2. Product Management',
      category: 'Product Catalog',
      description:
        'Product catalog list interface displaying automotive accessories, pricing, stock levels, and Cloudinary preview thumbnails.',
      src: '/car_accessories/product_page.png',
      images: ['/car_accessories/product_page.png', '/car_accessories/product_menu.png'],
    },
    {
      id: 'product-create-edit',
      title: '3. Product Create / Edit',
      category: 'Catalog Administration',
      description:
        'Form interface for adding and updating product information, category details, pricing, and stock details.',
      src: '/car_accessories/edit_product.png',
      images: ['/car_accessories/edit_product.png'],
    },
    {
      id: 'stock-mgmt',
      title: '4. Stock Management',
      category: 'Inventory Control',
      description:
        'Stock monitoring interface providing visibility into current stock quantities and inventory updates.',
      src: '/car_accessories/iventory_page.png',
      images: [
        '/car_accessories/iventory_page.png',
        '/car_accessories/batch_stock_warehouse.png',
        '/car_accessories/stock_movement_tracking.png',
        '/car_accessories/stock_transfer_page.png',
        '/car_accessories/create_transfer_stock.png',
      ],
    },
    {
      id: 'pos-sale-interface',
      title: '5. POS / Sale Interface',
      category: 'POS / Sales',
      description:
        'Point-of-sale sales interface for selecting products, calculating sale subtotals, and completing customer orders.',
      src: '/car_accessories/sale_ui.png',
      images: ['/car_accessories/sale_ui.png'],
    },
    {
      id: 'sales-records',
      title: '6. Sales Records',
      category: 'Sales Logs',
      description:
        'Historical sales transaction log viewer for reviewing completed sales records and transaction details.',
      src: '/car_accessories/sale_transaction.png',
      images: [
        '/car_accessories/sale_transaction.png',
        '/car_accessories/sale_invoice.png',
        '/car_accessories/print_sale_invoice.png',
      ],
    },
    {
      id: 'image-upload',
      title: '7. Product Image Upload',
      category: 'Media Management',
      description:
        'Product image upload flow integrating Cloudinary for asset storage and media delivery.',
      src: '/car_accessories/edit_product.png',
      images: ['/car_accessories/edit_product.png'],
    },
  ] as GallerySlot[],
};
