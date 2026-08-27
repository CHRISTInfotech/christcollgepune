import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { pageTransition } from '../motion/variants';
import { standard } from '../motion/transitions';

export default function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-cc-sm focus:bg-cc-primary-deeper focus:px-5 focus:py-3 focus:text-cc-text-light"
      >
        Skip to main content
      </a>

      <Header
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen((open) => !open)}
        onCloseDrawer={() => setIsDrawerOpen(false)}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          className="flex-1"
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={standard}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ScrollToTop isDrawerOpen={isDrawerOpen} />
    </div>
  );
}
