import React from 'react';
import Link from 'next/link';

interface NavigationLinksProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ mobile = false, onItemClick }) => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const linkClasses = mobile
    ? "block py-3 text-leica-black hover:text-vital-green transition-colors duration-200 text-lg"
    : "nav-link";

  return (
    <nav className={mobile ? "flex flex-col space-y-2" : "flex items-center space-x-8"}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={linkClasses}
          onClick={onItemClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLinks;