import { useTranslation } from '../lib/i18n';

/**
 * The Hero component draws visitors in with a bold headline, subheading,
 * and a prominent call-to-action button. The background image sets the
 * mood and immediately conveys the landscaping theme. Use your own photo
 * in /public/images/hero.png to customize the look.
 */
export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {t('hero.headline')}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          {t('hero.subhead')}
        </p>
        <a
          href="#contact"
          className="bg-primary text-white py-3 px-6 rounded-full text-lg hover:bg-primary-dark"
        >
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}