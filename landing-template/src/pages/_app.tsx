import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { I18nProvider } from '../lib/i18n';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <I18nProvider locale={locale}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}