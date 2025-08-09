import { useTranslation } from '../lib/i18n';

/**
 * CTA prompts visitors to take the next step. You can link the button to a
 * contact form, scheduling tool, or email address. Text comes from
 * translations to support multiple languages.
 */
export default function CTA() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="mb-8">{t('cta.description')}</p>
        {/* Replace the mailto link below with a URL to your contact page or form */}
        <a
          href="mailto:info@greenscape.co"
          className="bg-white text-primary py-3 px-6 rounded-full font-semibold hover:bg-gray-200"
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
}