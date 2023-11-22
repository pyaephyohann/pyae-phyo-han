export interface Tech {
  imageUrl?: string;
  delay?: string;
  name?: string;
  color?: string;
}

export interface Project {
  name: string;
  href: string;
  description: string;
  imageUrl: string;
  techs: Tech[];
}
