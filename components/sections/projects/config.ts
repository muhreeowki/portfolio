import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Didomi Decentralized Crowdfunding',
    slug: 'study_group',
    description:
      'A platform where students can form virtual study groups, schedule sessions, and share resources in real-time.',
    thumbnail: '/images/projects/study_group/cover.jpg'
  },
  {
    name: 'Muve Playlist Converter',
    slug: 'fitness_tracker',
    description:
      'A mobile app that helps users track their fitness activities, set goals, and monitor progress with motivational tools.',
    thumbnail: '/images/projects/fitness_tracker/cover.jpg'
  },
  {
    name: 'LP-NFT Generative Liquidity NFTs',
    slug: 'lpnft',
    description:
      'An e-commerce platform dedicated to eco-friendly products where users can buy, sell, and learn about sustainable living.',
    thumbnail: '/images/projects/eco_marketplace/cover.jpg'
  },
  {
    name: 'Evesmama',
    slug: 'evesmama',
    description:
      'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg'
  }
];

export { projects };
