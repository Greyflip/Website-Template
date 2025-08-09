import { portfolioItems } from '../data/portfolio';
import { useTranslation } from '../lib/i18n';

/**
 * Portfolio displays recent work examples using a simple grid of images.
 * Each image includes a small hover effect to add visual interest. You
 * should replace the placeholder images in /public/images with real
 * before-and-after shots from your own projects.
 */
export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('portfolio.title')}</h2>
        <p className="text-gray-600 mb-8">{t('portfolio.description')}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}