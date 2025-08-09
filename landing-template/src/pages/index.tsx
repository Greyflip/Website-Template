import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

/**
 * The main landing page composes all the individual sections into a single
 * cohesive layout. It also defines basic SEO metadata to help search
 * engines understand the page content. This page is fully responsive and
 * ready for customization.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>GreenScape Design Co.</title>
        <meta
          name="description"
          content="Transform your outdoors with expert landscaping services"
        />
        <meta property="og:title" content="GreenScape Design Co." />
        <meta
          property="og:description"
          content="Transform your outdoors with expert landscaping services"
        />
        <meta property="og:image" content="/images/hero.png" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}