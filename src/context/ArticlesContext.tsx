import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Article } from '../types';
import { mockArticles } from '../data/mockArticles';

interface ArticlesContextValue {
  articles: Article[];
  addArticle: (article: Omit<Article, 'id' | 'slug' | 'views' | 'publishedAt' | 'readTime'>) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  getArticleById: (id: string) => Article | undefined;
  getArticleBySlug: (slug: string) => Article | undefined;
}

const ArticlesContext = createContext<ArticlesContextValue | undefined>(undefined);

const STORAGE_KEY = 'fintrace_articles';

// Helper to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper to generate ID
const generateId = (): string => {
  return `article-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Helper to calculate read time
const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

interface ArticlesProviderProps {
  children: ReactNode;
}

export function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<Article[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setArticles(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse articles from localStorage:', error);
        setArticles(mockArticles);
      }
    } else {
      setArticles(mockArticles);
    }
  }, []);

  // Save to localStorage whenever articles change
  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    }
  }, [articles]);

  const addArticle = (articleData: Omit<Article, 'id' | 'slug' | 'views' | 'publishedAt' | 'readTime'>) => {
    const newArticle: Article = {
      id: generateId(),
      slug: generateSlug(articleData.title),
      views: 0,
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(articleData.content),
      ...articleData,
    };
    setArticles((prev) => [newArticle, ...prev]);
  };

  const updateArticle = (id: string, updates: Partial<Article>) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id
          ? {
              ...article,
              ...updates,
              // Update slug if title changed
              ...(updates.title && { slug: generateSlug(updates.title) }),
              // Update read time if content changed
              ...(updates.content && { readTime: calculateReadTime(updates.content) }),
            }
          : article
      )
    );
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  const getArticleById = (id: string) => {
    return articles.find((article) => article.id === id);
  };

  const getArticleBySlug = (slug: string) => {
    return articles.find((article) => article.slug === slug);
  };

  const value: ArticlesContextValue = {
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    getArticleBySlug,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
}

export function useArticlesContext(): ArticlesContextValue {
  const context = useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error('useArticlesContext must be used within an ArticlesProvider');
  }
  return context;
}
