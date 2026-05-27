export interface StitchMCPConfig {
  apiKey: string;
  baseUrl: string;
  timeout: number;
}

export interface StitchUIRequest {
  componentType: 'hero' | 'features' | 'stats' | 'testimonials' | 'cta' | 'platformLogos';
  designSystem: DesignSystemConfig;
  content: ContentConfig;
}

export interface DesignSystemConfig {
  colors: {
    primary: { light: string; main: string; dark: string };
    secondary: { light: string; main: string; dark: string };
    accent: { light: string; main: string; dark: string };
  };
  gradients: {
    primary: string;
    hero: string;
    secondary: string;
  };
  typography: {
    hero: string;
    heading: string;
    body: string;
  };
  animations: {
    fadeUp: string;
    slideIn: string;
    scale: string;
  };
}

export interface ContentConfig {
  headline?: string;
  subheadline?: string;
  features?: string[];
  stats?: Array<{ label: string; value: string; description?: string }>;
  testimonials?: Array<{ name: string; quote: string; role: string; avatar?: string }>;
  cta?: { text: string; link: string };
  platforms?: string[];
}

export interface StitchUIResponse {
  components: React.ReactNode[];
  styles: Record<string, string>;
  animations: AnimationConfig[];
  success: boolean;
  error?: string;
}

export interface AnimationConfig {
  type: 'fade' | 'slide' | 'scale' | 'bounce';
  duration: number;
  delay: number;
  easing: string;
}

export interface StitchScreenCode {
  screenId: string;
  projectId: string;
  html: string;
  css: string;
  screenshot?: string;
}

export interface StitchBuildSiteRequest {
  projectId: string;
  routes: Array<{
    screenId: string;
    route: string;
  }>;
}