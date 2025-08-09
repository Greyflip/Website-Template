import { useTranslation } from '../lib/i18n';

/**
 * The Footer component displays company contact information and legal text. All
 * values are pulled from the translation files to make it easy to localize
 * the details or update them from a single source.
 */
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{t('footer.companyName')}</h3>
        <p className="mb-1">{t('footer.address')}</p>
        <p className="mb-1">{t('footer.phone')}</p>
        <p className="mb-1">{t('footer.email')}</p>
        <p className="text-sm text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} {t('footer.companyName')}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}