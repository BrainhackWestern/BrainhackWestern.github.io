import { Fira_Mono, Montserrat, Quicksand } from 'next/font/google';

export const quicksand = Quicksand({
  weight: ['300', '400', '700'],
  fallback: ['Segoe UI', 'sans-serif'],
  subsets: ['latin'],
  variable: '--font-quicksand'
});
export const montserrat = Montserrat({
  fallback: ['Segoe UI', 'sans-serif'],
  subsets: ['latin'],
  variable: '--font-montserrat'
});
export const fira_mono = Fira_Mono({
  weight: ['400', '700'],
  fallback: ['monospace'],
  subsets: ['latin-ext', 'latin'],
  variable: '--font-fira-mono'
});
