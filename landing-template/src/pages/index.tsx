import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import React, { createContext, useContext } from 'react';

// Theme configuration - can be moved to external config file later
const defaultThemeConfig = {
  business: {
    name: 'GreenScape Design Co.',
    description: 'Transform your outdoors with expert landscaping services',
    logo: '/images/logo.png',
    heroImage: '/images/hero.png',
    colors: {
      primary: '#2D5016',
      secondary: '#8FBC8F',
      accent: '#F0F8E8'
    },
    contact: {
      email: 'hello@greenscape.com',
      phone: '(555) 123-4567'
    }
  },
  features: {
    enableThemeSwitching: true,
    customization: {
      showPortfolio: true,
      showTestimonials: true,
      enableCTA: true
    }
  }
};

// Theme Context for passing config throughout component tree
const ThemeContext = createContext(defaultThemeConfig);

// Custom hook to use theme config in components
export const useThemeConfig = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeConfig must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider component to wrap the app
const ThemeProvider = ({ children, config = defaultThemeConfig }) => {
  return (
    <ThemeContext.Provider value={config}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * The main landing page composes all the individual sections into a single
 * cohesive layout. It also defines basic SEO metadata to help search
 * engines understand the page content. This page is fully responsive and
 * ready for customization.
 * 
 * Enhanced with theme switching capabilities and config support:
 * - Supports external theme config import (falls back to in-file config)
 * - Provides ThemeContext for component-wide theme access
 * - Enables business theme switching through config object
 * - Maintains backward compatibility with existing components
 */
export default function Home({ themeConfig = null }) {
  // Use passed config or fall back to default
  const activeConfig = themeConfig || defaultThemeConfig;
  const { business } = activeConfig;
  
  return (
    <ThemeProvider config={activeConfig}>
      <>
        <Head>
          <title>{business.name}</title>
          <meta
            name="description"
            content={business.description}
          />
          <meta property="og:title" content={business.name} />
          <meta
            property="og:description"
            content={business.description}
          />
          <meta property="og:image" content={business.heroImage} />
        </Head>
        <Header />
        <main>
          <Hero />
          <Features />
          <Services />
          {activeConfig.features.customization.showPortfolio && <Portfolio />}
          {activeConfig.features.customization.showTestimonials && <Testimonials />}
          {activeConfig.features.customization.enableCTA && <CTA />}
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
}

// Export theme utilities for external use
export { ThemeProvider, defaultThemeConfig };
