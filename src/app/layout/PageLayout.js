'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import { usePathname } from 'next/navigation';

export default function PageLayout({ 
  children, 
  pageTitle = '', 
  highlightText = '' 
}) {
  const pathname = usePathname();
  
  // Determine title based on route
  const getPageTitle = () => {
    if (pageTitle) return pageTitle;
    
    if (pathname.includes('/about')) return 'About Us';
    if (pathname.includes('/departments')) return 'Departments';
    if (pathname.includes('/events')) return 'Events';
    if (pathname.includes('/media')) return 'Media';
    
    return 'Household of God Church';
  };
  
  const getHighlightText = () => {
    if (highlightText) return highlightText;
    
    if (pathname.includes('/about')) return 'ABOUT';
    if (pathname.includes('/departments')) return 'DEPARTMENT';
    if (pathname.includes('/events')) return 'EVENTS';
    if (pathname.includes('/media')) return 'MEDIA';
    
    return '';
  };

  return (
    <>
      <Header />
      <Banner 
        title={getPageTitle()} 
        highlight={getHighlightText()}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}