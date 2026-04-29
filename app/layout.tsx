import type { Metadata } from 'next';
import { Fraunces, Inter_Tight } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
        subsets: ['latin'],
        variable: '--font-fraunces',
        display: 'swap',
});

const interTight = Inter_Tight({
        subsets: ['latin'],
        variable: '--font-inter-tight',
        display: 'swap',
});

export const metadata: Metadata = {
        title: {
            default: 'Mariposa 250 — America\'s 250th Birthday Celebration',
                    template: '%s | Mariposa 250',
        },
        description:
                    'Join Mariposa County on July 4, 2026 for America 250 — a day of music, parades, community, and a 200-drone light show over downtown Mariposa.',
        metadataBase: new URL('https://www.mariposa250.org'),
        openGraph: {
                    title: 'Mariposa 250 — America\'s 250th Birthday Celebration',
                    description:
                                    'July 4, 2026 in downtown Mariposa. Music, parade, 200-drone show. A community celebration of America\'s 250th.',
                    url: 'https://www.mariposa250.org',
                    siteName: 'Mariposa 250',
                    locale: 'en_US',
                    type: 'website',
                    images: [
                        {
                                            url: '/og-image.png',
                                            width: 1200,
                                            height: 630,
                                            alt: 'Mariposa 250 — America\'s 250th Birthday Celebration, July 4, 2026',
                        },
                                ],
        },
        twitter: {
                    card: 'summary_large_image',
                    title: 'Mariposa 250 — America\'s 250th Birthday Celebration',
                    description: 'July 4, 2026 in downtown Mariposa.',
                    images: ['/og-image.png'],
        },
        robots: {
                    index: true,
                    follow: true,
        },
};

export default function RootLayout({
        children,
}: Readonly<{ children: React.ReactNode }>) {
        return (
                    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
                                    <body className="bg-cream text-ink font-sans antialiased">
                                                    <Header />
                                                    <main className="min-h-[calc(100vh-12rem)]">{children}</main>
                                                    <Footer />
                                    </body>
                    </html>
                );
}
