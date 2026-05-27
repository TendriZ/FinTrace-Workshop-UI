import { useState, useEffect, useCallback } from 'react';
import type { ContentConfig } from '../types/stitch';
import { getUIGenerator } from '../services/stitchUIGenerator';

export interface UseStitchComponentsOptions {
  enableCache?: boolean;
  fallbackToStatic?: boolean;
}

export interface UseStitchComponentsReturn {
  hero: React.ReactNode | null;
  stats: React.ReactNode | null;
  features: React.ReactNode | null;
  testimonials: React.ReactNode | null;
  cta: React.ReactNode | null;
  platformLogos: React.ReactNode | null;
  isLoading: boolean;
  error: string | null;
  regenerate: (section: 'hero' | 'stats' | 'features' | 'testimonials' | 'cta' | 'platformLogos') => Promise<void>;
}

export function useStitchComponents(
  content?: ContentConfig,
  options: UseStitchComponentsOptions = {}
): UseStitchComponentsReturn {
  const [hero, setHero] = useState<React.ReactNode | null>(null);
  const [stats, setStats] = useState<React.ReactNode | null>(null);
  const [features, setFeatures] = useState<React.ReactNode | null>(null);
  const [testimonials, setTestimonials] = useState<React.ReactNode | null>(null);
  const [cta, setCta] = useState<React.ReactNode | null>(null);
  const [platformLogos, setPlatformLogos] = useState<React.ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uiGenerator = getUIGenerator();

  const generateAllComponents = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [heroComponent, statsComponent, featuresComponent, testimonialsComponent, ctaComponent, logosComponent] =
        await Promise.all([
          uiGenerator.generateHero(content || {}),
          uiGenerator.generateStats(content || {}),
          uiGenerator.generateFeatures(content || {}),
          uiGenerator.generateTestimonials(content || {}),
          uiGenerator.generateCTA(content || {}),
          uiGenerator.generatePlatformLogos(content || {}),
        ]);

      setHero(heroComponent);
      setStats(statsComponent);
      setFeatures(featuresComponent);
      setTestimonials(testimonialsComponent);
      setCta(ctaComponent);
      setPlatformLogos(logosComponent);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate components';
      setError(errorMessage);
      console.error('Error generating Stitch components:', err);
    } finally {
      setIsLoading(false);
    }
  }, [content, uiGenerator]);

  const regenerate = useCallback(async (section: keyof UseStitchComponentsReturn) => {
    setIsLoading(true);
    setError(null);

    try {
      let component;
      switch (section) {
        case 'hero':
          component = await uiGenerator.generateHero(content || {});
          setHero(component);
          break;
        case 'stats':
          component = await uiGenerator.generateStats(content || {});
          setStats(component);
          break;
        case 'features':
          component = await uiGenerator.generateFeatures(content || {});
          setFeatures(component);
          break;
        case 'testimonials':
          component = await uiGenerator.generateTestimonials(content || {});
          setTestimonials(component);
          break;
        case 'cta':
          component = await uiGenerator.generateCTA(content || {});
          setCta(component);
          break;
        case 'platformLogos':
          component = await uiGenerator.generatePlatformLogos(content || {});
          setPlatformLogos(component);
          break;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to regenerate ${section}`;
      setError(errorMessage);
      console.error(`Error regenerating ${section}:`, err);
    } finally {
      setIsLoading(false);
    }
  }, [content, uiGenerator]);

  useEffect(() => {
    generateAllComponents();
  }, [generateAllComponents]);

  return {
    hero,
    stats,
    features,
    testimonials,
    cta,
    platformLogos,
    isLoading,
    error,
    regenerate,
  };
}

export function useStitchAnimations() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAnimationsEnabled(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return animationsEnabled;
}