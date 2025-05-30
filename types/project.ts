export interface Project {
  id: number;
  title: string;
  slug: string;
  image?: string;
  promo_video?: string;
  github: string;
  demo_video?: string;
  live?: string;
  store?: string;
  description: string;
  features: string[];
  technologies: string[];
  images: ({ src: string; aspect: string } | string)[];
}
