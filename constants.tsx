
import React from 'react';
import type { Feature, Testimonial } from './types';

const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.648l.259 1.035L18 22.75l-.844-.259a3.375 3.375 0 00-2.455-2.456L13.75 19.5l.259-.844a3.375 3.375 0 002.456-2.455L17.25 15l.844.259a3.375 3.375 0 002.455 2.456l1.036.259L21 18.75l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const FEATURES: Feature[] = [
  {
    icon: <ZapIcon className="h-8 w-8 text-brand-accent-indigo" />,
    title: 'Blazing Fast Performance',
    description: 'Experience unparalleled speed and responsiveness. Starlight is built on a next-gen architecture for zero-latency interaction.'
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-brand-accent-pink" />,
    title: 'Intuitive Magical UI',
    description: 'A beautifully crafted user interface that is both powerful and a joy to use. Animations and micro-interactions make work feel like play.'
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-green-400" />,
    title: 'Ironclad Security',
    description: 'Your data is your own. With end-to-end encryption and enterprise-grade security, your privacy is our highest priority.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Starlight has completely revolutionized our workflow. The speed and design are simply unmatched. It feels like using software from the future.',
    author: 'Alex Rivera',
    title: 'CEO, QuantumLeap Inc.',
    avatar: 'https://picsum.photos/id/1005/100/100'
  },
  {
    quote: 'I was skeptical at first, but the seamless integration and intuitive UI won me over. Our team\'s productivity has skyrocketed. Highly recommended!',
    author: 'Samantha Chen',
    title: 'Head of Product, Nebula Corp.',
    avatar: 'https://picsum.photos/id/1011/100/100'
  },
  {
    quote: 'The attention to detail in Starlight is astounding. From security to the smallest animation, everything is polished and purposeful.',
    author: 'David Grant',
    title: 'Lead Engineer, Orbita Solutions',
    avatar: 'https://picsum.photos/id/1027/100/100'
  }
];
