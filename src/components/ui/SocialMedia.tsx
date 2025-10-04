'use client';

import React from 'react';
import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';

interface SocialMediaProps {
  variant?: 'horizontal' | 'vertical' | 'grid';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

const socialMediaLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/vitalglowwellness',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/vitalglowwellness',
    color: 'hover:bg-pink-600'
  },
  {
    name: 'X',
    icon: X,
    url: 'https://x.com/vitalglowwellness',
    color: 'hover:bg-black'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/vitalglowwellness',
    color: 'hover:bg-blue-700'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/vitalglowwellness',
    color: 'hover:bg-red-600'
  }
];

const SocialMedia: React.FC<SocialMediaProps> = ({ 
  variant = 'horizontal', 
  size = 'md', 
  showLabels = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const layoutClasses = {
    horizontal: 'flex space-x-4',
    vertical: 'flex flex-col space-y-4',
    grid: 'grid grid-cols-3 md:grid-cols-6 gap-4'
  };

  const buttonClasses = `
    ${sizeClasses[size]} 
    bg-leica-black 
    text-white 
    rounded-full 
    flex items-center 
    justify-center 
    transition-all duration-300 
    transform hover:scale-110 
    hover:shadow-lg
  `;

  return (
    <div className={`${layoutClasses[variant]} ${className}`}>
      {socialMediaLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses} ${social.color} group`}
            aria-label={`Follow Vital Glow on ${social.name}`}
          >
            <Icon size={iconSizes[size]} className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}
      
      {showLabels && (
        <div className={`${layoutClasses[variant]} mt-2`}>
          {socialMediaLinks.map((social) => (
            <span key={social.name} className="text-xs text-leica-gray-dark text-center">
              {social.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialMedia;