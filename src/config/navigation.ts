type NavigationItem = {
  key: string;
  path: string;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [] as NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
