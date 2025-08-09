import React, { createContext, useContext, ReactNode } from 'react';
import translations from '../data/translations';

interface I18nContextProps {
  locale: string;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextProps>({
  locale: 'en',
  t: (key) => key,
});

/**
 * Provides translation functions and locale context.
 * Wraps the application so that child components can access locale-specific strings.
 */
export function I18nProvider({ children, locale }: { children: ReactNode; locale?: string }) {
  const currentLocale = locale && ['en', 'es'].includes(locale) ? locale : 'en';

  /**
   * Returns the value for a given translation key.
   * Supports nested keys using dot notation (e.g., "hero.headline").
   */
  const t = (key: string): any => {
    const segments = key.split('.');
    let result: any = (translations as any)[currentLocale];
    segments.forEach((segment) => {
      result = result?.[segment];
    });
    return result ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale: currentLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Hook to access translation utilities in components.
 */
export function useTranslation() {
  return useContext(I18nContext);
}