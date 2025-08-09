import translations from '../data/translations';
import { useTranslation } from '../lib/i18n';

/**
 * Services highlights the core offerings of the business. It uses a grid
 * layout to neatly present each service and its description. Data comes
 * from the translation files to enable easy customization and localization.
 */
export default function Services() {
  const { locale, t } = useTranslation();
  const services = (translations as any)[locale].services.items;
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('services.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item: any, idx: number) => (
            <div
              key={idx}
              className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition-shadow"
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