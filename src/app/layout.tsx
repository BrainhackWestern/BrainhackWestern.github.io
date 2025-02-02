import { ScreenSizeProvider } from '../services/screen-size';
import { ScrollPositionProvider } from '../services/scroll-position';
import '../styles/globals.scss'
import '../styles/globals.css'
import { fira_mono, montserrat, quicksand } from '../styles/fonts';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${quicksand.variable} ${fira_mono.variable}`} lang="en">
      <body className={montserrat.variable}>
        <ScrollPositionProvider>
           <ScreenSizeProvider>
            {children}
           </ScreenSizeProvider>
        </ScrollPositionProvider>
      </body>
    </html>
  );
}
