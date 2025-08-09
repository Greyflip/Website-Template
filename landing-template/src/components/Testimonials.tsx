import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { useTranslation } from '../lib/i18n';

/**
 * Testimonials rotates through client quotes to provide social proof. A simple
 * carousel is implemented with next/previous buttons. Replace the sample
 * testimonials in src/data/testimonials.ts with genuine reviews from your
 * clients to build trust.
 */
export default function Testimonials() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);
  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('testimonials.title')}</h2>
        <div className="relative">
          <p className="text-xl italic mb-4">&ldquo;{testimonial.feedback}&rdquo;</p>
          <p className="font-semibold">{testimonial.name}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark"
            >
              &lt;
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}