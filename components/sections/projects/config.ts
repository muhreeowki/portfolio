import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'LP-NFT Generative Liquidity NFTs',
    slug: 'lpnft',
    description:
      'An NFT project that mints unique NFTs based on liquidity pool positions for decentralized exchanges like Uniswap.',
    thumbnail: '/images/projects/lpnft/cover.png'
  },
  {
    name: 'Didomi Decentralized Crowdfunding',
    slug: 'didomi',
    description:
      'A decentralized crowdfunding platform that enables users to create and contribute to fundraising campaigns.',
    thumbnail: '/images/projects/didomi/cover.png'
  },
  {
    name: 'Muve Playlist Converter',
    slug: 'muve',
    description:
      'A web application that converts playlists between music streaming services like Spotify, Apple Music, and YouTube.',
    thumbnail: '/images/projects/muve/cover.png'
  },
  {
    name: "Eve's Tracker",
    slug: 'evestracker',
    description:
      'A midwifery application that helps midwives track and manage their clients and appointments.',
    thumbnail: '/images/projects/didomi/cover.png'
  }
];

export { projects };
