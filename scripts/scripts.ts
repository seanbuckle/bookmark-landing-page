const setupStickyHeader = () => {
  // Feature detection for css only
  if (window.CSS && CSS.supports('animation-timeline: scroll()'))
    return () => {};

  const header = document.getElementById('scroll-header');
  if (!header) return () => {};

  const handleScroll = () => {
    // Toggle class based on scroll position
    header.classList.toggle('site-header--scrolled', window.scrollY > 0);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
};

export const cleanupStickyHeader = setupStickyHeader();