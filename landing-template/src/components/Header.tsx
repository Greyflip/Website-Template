import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from '../lib/i18n';

/**
 * The Header component renders the navigation bar with company branding,
 * navigation links, and a language toggle. The language toggle updates
 * the locale via Next.js routing to switch between English and Spanish.
 */
export default function Header() {
  const router = useRouter();
  const { locale, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-primary">GreenScape</span>
        </Link>
        <nav className="space-x-6 hidden md:block">
          <Link href="#services" className="text-gray-600 hover:text-primary">
            {t('navbar.services')}
          </Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-primary">
            {t('navbar.portfolio')}
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary">
            {t('navbar.testimonials')}
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-primary">
            {t('navbar.contact')}
          </Link>
        </nav>
        <div className="flex items-center space-x-4 text-sm">
          <button
            className={locale === 'en' ? 'font-bold text-primary' : 'text-gray-600 hover:text-primary'}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
            className={locale === 'es' ? 'font-bold text-primary' : 'text-gray-600 hover:text-primary'}
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}