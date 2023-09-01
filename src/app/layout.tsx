import ScreenSizeProvider from '../services/screen-size/provider';
import ScrollPositionProvider from '../services/scroll-position/provider';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollPositionProvider>
           <ScreenSizeProvider>
            {children}
           </ScreenSizeProvider> 
        </ScrollPositionProvider>
      </body>
    </html>
  );
}
