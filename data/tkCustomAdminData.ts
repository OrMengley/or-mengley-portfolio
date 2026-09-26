export interface FeatureGroupItem {
  groupName: string;
  description: string;
  items: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src?: string; // Optional real screenshot path (thumbnail)
  images?: string[]; // Array of image paths for the detail modal
}

export const TK_CUSTOM_ADMIN_DATA = {
  id: 'tk-custom-admin',
  title: 'TK Custom Admin',
  subtitle: 'Computer Shop Management / POS / Inventory Management System',
  role: 'Frontend Developer',
  teamSummary: '4 developers total (2 Frontend Developers, 2 Backend Developers)',
  frontendTech: ['Vue 3', 'REST API Integration'],
  backendTech: ['Go Server API'],
  myResponsibility:
    'Responsible for frontend application development using Vue 3 and integration with backend REST APIs.',
  overview:
    'TK Custom Admin is a comprehensive business management system built specifically for a computer retail shop. Beyond basic POS features, it handles end-to-end sales, purchase operations, multi-warehouse stock management, financial and profit/loss reporting, supplier relations, and granular role permissions across multiple companies and branches.',

  capabilities: [
    {
      title: 'Multi-Company & Branch Administration',
      description: 'Configure and manage multiple companies and branch locations with role-based user permissions.',
    },
    {
      title: 'Multi-Warehouse Inventory & Transfers',
      description: 'Track inventory across multiple warehouses with stock transfer, adjustment, and archival workflows.',
    },
    {
      title: 'Barcode & Serial Number Tracking',
      description: 'Track purchases and sales by product barcode or individual unit serial number for high-value hardware items.',
    },
    {
      title: 'Purchase & Sales Management',
      description: 'Manage sales transactions and purchase orders with searchable serial numbers, product lookup, and public invoice views.',
    },
    {
      title: 'Accounting & P&L Reporting',
      description: 'Chart of accounts, income/expense tracking, payment reports, unpaid balance tracking, and profit & loss statements.',
    },
    {
      title: 'Catalog & Promotions',
      description: 'Nested brand/sub-brand and category/sub-category structures, supplier management, and promotional pricing rules.',
    },
  ],

  workflowSteps: [
    {
      step: '01',
      title: 'Supplier & Catalog Setup',
      description: 'Manage suppliers, brands, categories, products, serial numbers, and purchase orders.',
    },
    {
      step: '02',
      title: 'Purchase Receiving',
      description: 'Record incoming hardware, assign serial numbers, and assign stock to specific warehouses.',
    },
    {
      step: '03',
      title: 'Warehouse & Inventory Control',
      description: 'Perform multi-warehouse stock transfers, inventory adjustments, and physical inventory counts.',
    },
    {
      step: '04',
      title: 'Sales & POS Dispatch',
      description: 'Process customer sales via barcode scan or serial number selection with instant public invoice generation.',
    },
    {
      step: '05',
      title: 'Accounting & Analytics',
      description: 'Generate daily/monthly sales reports, financial statements, and P&L analytics for management decision-making.',
    },
  ],

  teamStructure: {
    frontendCount: 2,
    backendCount: 2,
    totalCount: 4,
    myRole: 'Frontend Developer (Vue 3 UI & REST API Integration)',
    backendRole: 'Backend Developers (Go Server API & Database)',
    collaborationDesc:
      'Worked closely with backend developers to design API payloads, manage authentication states, handle error states, and integrate complex business logic endpoints into the Vue 3 frontend application.',
  },

  featureGroups: [
    {
      groupName: 'Dashboard',
      description: 'Central command center providing operational overview.',
      items: ['Main overview dashboard', 'Key business activity indicators'],
    },
    {
      groupName: 'Inventory & Stock Management',
      description: 'Complete stock control across physical and archived locations.',
      items: [
        'Inventory list & status',
        'Inventory adjustment',
        'Stock transfer between warehouses',
        'Warehouse archived data tracking',
      ],
    },
    {
      groupName: 'Purchase Management',
      description: 'Procurement workflows and supplier order tracking.',
      items: [
        'Purchase transaction list',
        'Create & edit purchase orders',
        'Find purchase by serial number',
        'Find purchase by product',
        'Public purchase order view link',
      ],
    },
    {
      groupName: 'Sales Management',
      description: 'Point-of-sale dispatches and customer invoice generation.',
      items: [
        'Sales transaction list',
        'Create sale & checkout',
        'Find sale by serial number',
        'Find sale by product',
        'Public customer invoice view link',
      ],
    },
    {
      groupName: 'Accounting & Finance',
      description: 'Financial ledger and balance management.',
      items: [
        'Chart of accounts',
        'Income management & logging',
        'Expense management & categorization',
      ],
    },
    {
      groupName: 'Promotions',
      description: 'Dynamic discount and promotional campaign pricing.',
      items: [
        'Promotion prices configuration',
        'Promotional pricing & seasonal discounts',
      ],
    },
    {
      groupName: 'Reports & Analytics',
      description: 'Comprehensive business intelligence and financial reporting.',
      items: [
        'Sales reports (Daily, Monthly, By product, Inventory movement)',
        'Purchase reports (Purchase list & detailed breakdown)',
        'Product reports (Top products, Product gift reports)',
        'Financial reports (Payment, Unpaid balance, Revenue, Expense, P&L)',
        'Loss reports (Promotion loss, Supplier loss, Company loss)',
        'Operational reports (Supplier, Adjustment, Sample reports)',
      ],
    },
    {
      groupName: 'Settings & Catalog Configuration',
      description: 'System administration and multi-company setup.',
      items: [
        'User, permission & group management',
        'Company & branch configuration',
        'Multi-warehouse management',
        'Product management',
        'Brand & sub-brand hierarchy',
        'Category & sub-category hierarchy',
        'Bound product settings & product sorting',
        'Supplier management',
      ],
    },
    {
      groupName: 'Academic Module',
      description: 'Specialized institutional or academic partner module.',
      items: ['Academic module management & tracking'],
    },
    {
      groupName: 'Authentication & Account',
      description: 'User access security and session handling.',
      items: [
        'Secure user login & registration',
        'User profile & account management',
      ],
    },
  ],

  galleryPlaceholders: [
    {
      id: 'dash-overview',
      title: 'Main Executive Dashboard',
      category: 'Dashboard & Overview',
      src: '/tkcustom/dashobard.png',
      images: ['/tkcustom/dashobard.png'],
      description:
        'Central administrative dashboard rendering sales activity, purchase order trends, and quick access navigation.',
    },
    {
      id: 'inventory-management',
      title: 'Inventory & Stock Management Interface',
      category: 'Inventory Management',
      src: '/tkcustom/inventory.png',
      images: ['/tkcustom/inventory.png'],
      description:
        'Comprehensive inventory catalog with stock levels, categorization filters, and stock adjustment workflows.',
    },
    {
      id: 'stock-transfer',
      title: 'Multi-Warehouse Stock Transfer',
      category: 'Warehouse Operations',
      src: '/tkcustom/stock transfer.png',
      images: ['/tkcustom/stock transfer.png'],
      description:
        'Multi-warehouse stock transfer workflow for dispatching, tracking, and receiving hardware components across store locations.',
    },
    {
      id: 'sales-serial',
      title: 'Sales Management & Serial Lookup',
      category: 'Sales & POS',
      src: '/tkcustom/saleui.png',
      images: [
        '/tkcustom/saleui.png',
        '/tkcustom/findsalebysn.png',
      ],
      description:
        'Sales order management with barcode-based product lookup and individual component serial number tracking.',
    },
  ] as GalleryItem[],
};
