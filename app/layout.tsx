import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Compass — AI Career Guidance after 10th',
  description: 'AI-powered career guidance for Gujarat students after Class 10. Science, Commerce, Arts, Diploma, ITI — in English, Hindi, Gujarati, and Hinglish.',
  keywords: ['career after 10th', 'Gujarat career', 'Science Commerce Arts', 'Diploma ITI', 'AI career counseling'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
