'use client';
import { Inter } from 'next/font/google';
import { PageHeader } from '@/components/header/pageHeader';
import { HEADER_LINKS } from '@/utils/headerLinks';
import { MantineProvider } from '@mantine/core';
import { BLUE_COLORS, GRAY_COLORS } from '@/utils/colors';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { MainLayout } from '@/components/mainLayout/mainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store()}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colors: {
                gray: [
                  GRAY_COLORS.WHITE,
                  GRAY_COLORS.GREY100,
                  GRAY_COLORS.GREY200,
                  GRAY_COLORS.GREY300,
                  GRAY_COLORS.GREY500,
                  GRAY_COLORS.GREY600,
                  GRAY_COLORS.BLACK,
                ],
                blue: [
                  BLUE_COLORS.BLUE100,
                  BLUE_COLORS.BLUE200,
                  BLUE_COLORS.BLUE300,
                  BLUE_COLORS.BLUE400,
                  BLUE_COLORS.BLUE500,
                  BLUE_COLORS.BLUE600,
                ],
              },
              components: {
                Container: {
                  defaultProps: {
                    sizes: {
                      xs: 540,
                      sm: 720,
                      md: 960,
                      lg: 1140,
                      xl: 1320,
                    },
                  },
                },
              },
            }}
          >
            <PageHeader links={HEADER_LINKS} />
            <MainLayout>{children}</MainLayout>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
