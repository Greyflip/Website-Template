import translations from '../data/translations';
import { useTranslation } from '../lib/i18n';

/**
 * Features showcases the key reasons to choose your landscaping business. Pulls
 * title and items from the translation files so they can be easily localized.
 */
export default function Features() {
  const { locale, t } = useTranslation();
  // Extract feature items directly from the translations object.
  const features = (translations as any)[locale].features.items;
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('features.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item: any, idx: number) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}