import { Link } from '@/types/link';

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: 'home.jpg'
  },
  {
    title: 'Projects',
    href: '#projects',
    thumbnail: 'projects.jpg'
  },
  /*
  {
    title: 'Skills',
    href: '#skills',
    thumbnail: 'skills.jpg'
  },
  {
    title: 'Experience',
    href: '#Experience',
    thumbnail: 'experience.jpg'
  },
  */
  {
    title: 'Resume',
    href: 'resume.pdf',
    thumbnail: 'blog.jpg',
    target: '_blank'
  },
  {
    title: 'About',
    href: '#about',
    thumbnail: 'about.jpg'
  },
  {
    title: 'Contact',
    href: '#contact',
    thumbnail: 'contact.jpg'
  }
];

export { links };
