import type { StitchMCPConfig, StitchUIResponse, StitchUIRequest, StitchScreenCode, StitchBuildSiteRequest } from '../types/stitch';

export class StitchMCPService {
  private config: StitchMCPConfig;

  constructor(apiKey: string, baseUrl: string = 'https://stitch.googleapis.com/mcp') {
    this.config = {
      apiKey,
      baseUrl,
      timeout: 30000,
    };
  }

  async generateScreen(prompt: string, deviceType?: 'MOBILE' | 'DESKTOP' | 'TABLET' | 'AGNOSTIC'): Promise<string> {
    try {
      const response = await fetch(`${this.config.baseUrl}/generate_screen`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.config.apiKey,
        },
        body: JSON.stringify({
          prompt,
          deviceType: deviceType || 'AGNOSTIC',
        }),
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`Stitch API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.screenId || '';
    } catch (error) {
      console.error('Stitch generateScreen error:', error);
      throw error;
    }
  }

  async getScreenCode(screenId: string): Promise<StitchScreenCode> {
    try {
      const response = await fetch(`${this.config.baseUrl}/get_screen_code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.config.apiKey,
        },
        body: JSON.stringify({ screenId }),
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`Stitch API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return {
        screenId,
        projectId: data.projectId || '',
        html: data.html || '',
        css: data.css || '',
        screenshot: data.screenshot,
      };
    } catch (error) {
      console.error('Stitch getScreenCode error:', error);
      throw error;
    }
  }

  async getScreenImage(screenId: string): Promise<string> {
    try {
      const response = await fetch(`${this.config.baseUrl}/get_screen_image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.config.apiKey,
        },
        body: JSON.stringify({ screenId }),
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`Stitch API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.screenshot || '';
    } catch (error) {
      console.error('Stitch getScreenImage error:', error);
      throw error;
    }
  }

  async buildSite(request: StitchBuildSiteRequest): Promise<Record<string, string>> {
    try {
      const response = await fetch(`${this.config.baseUrl}/build_site`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.config.apiKey,
        },
        body: JSON.stringify(request),
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`Stitch API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.pages || {};
    } catch (error) {
      console.error('Stitch buildSite error:', error);
      throw error;
    }
  }

  async generateUIComponent(request: StitchUIRequest): Promise<StitchUIResponse> {
    try {
      const prompt = this.buildPromptFromRequest(request);

      const screenId = await this.generateScreen(prompt, 'DESKTOP');

      const screenCode = await this.getScreenCode(screenId);

      return {
        components: [this.parseHTMLToComponents(screenCode.html)],
        styles: { css: screenCode.css },
        animations: [],
        success: true,
      };
    } catch (error) {
      console.error('Stitch generateUIComponent error:', error);
      return {
        components: [],
        styles: {},
        animations: [],
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  private buildPromptFromRequest(request: StitchUIRequest): string {
    const { componentType, designSystem, content } = request;

    let prompt = `Create a ${componentType} section for a financial tracking platform with the following specifications:\n\n`;

    prompt += `Design System:\n`;
    prompt += `- Primary colors: ${designSystem.colors.primary.main}\n`;
    prompt += `- Secondary colors: ${designSystem.colors.secondary.main}\n`;
    prompt += `- Accent colors: ${designSystem.colors.accent.main}\n`;
    prompt += `- Hero gradient: ${designSystem.gradients.hero}\n`;

    if (content.headline) {
      prompt += `- Headline: ${content.headline}\n`;
    }

    if (content.subheadline) {
      prompt += `- Subheadline: ${content.subheadline}\n`;
    }

    if (content.features && content.features.length > 0) {
      prompt += `- Features: ${content.features.join(', ')}\n`;
    }

    prompt += `\nRequirements:\n`;
    prompt += `- Modern, clean design with Tailwind CSS\n`;
    prompt += `- Responsive layout\n`;
    prompt += `- Smooth animations and transitions\n`;
    prompt += `- High contrast for accessibility\n`;
    prompt += `- Professional financial theme\n`;

    return prompt;
  }

  private parseHTMLToComponents(html: string): React.ReactNode {
    // This would parse the generated HTML into React components
    // For now, return null as we'll implement this in the UI generator service
    return null;
  }
}

// Singleton instance
let stitchServiceInstance: StitchMCPService | null = null;

export const getStitchService = (): StitchMCPService => {
  if (!stitchServiceInstance) {
    const apiKey = import.meta.env.VITE_STITCH_API_KEY;
    if (!apiKey) {
      throw new Error('VITE_STITCH_API_KEY is not configured');
    }

    const baseUrl = import.meta.env.VITE_STITCH_BASE_URL || 'https://stitch.googleapis.com/mcp';
    stitchServiceInstance = new StitchMCPService(apiKey, baseUrl);
  }

  return stitchServiceInstance;
};