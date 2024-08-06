import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  firstName: meta.author.firstName,
  lastName: meta.author.lastName,
  name: meta.author.firstName + ' ' + meta.author.lastName,
  label: meta.author.label,
  description:
    'Im a software engineer with a specailization in backend and blockchain development.'
};

export { hero };
