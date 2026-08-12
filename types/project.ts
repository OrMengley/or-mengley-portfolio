export interface ProjectFeatureGroup {
  groupName: string;
  items: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  role: string;
  team?: string;
  myResponsibility?: string;
  description: string;
  technologies: string[];
  architecture?: string[];
  keyHighlights: string[];
  featureGroups?: ProjectFeatureGroup[];
  allFeatures: string[];
  isFlagship?: boolean;
}
