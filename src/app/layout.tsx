import type { Metadata, Viewport } from 'next';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Jeremy Powell AI Agent';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Jeremy Powell' },
  description: 'Jeremy Powell is a DeFi AI Agent designed to optimize stablecoin incentives for the MAHA protocol',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://jeremyai.maha.xyz/',
    title: 'Jeremy Powell AI Agent',
    description: 'Jeremy Powell is a DeFi AI Agent designed to optimize stablecoin incentives for the MAHA protocol',
    images: {
      url: 'https://jeremyai.maha.xyz/og.png',
      alt: 'Jeremy Powell AI Agent',
    },
  },
  twitter: {
    creator: '@jeremypowellai',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
