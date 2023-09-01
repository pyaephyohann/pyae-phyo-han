export interface EmailMessageType {
  show: boolean;
  showContentStatus: string;
}

export interface Tech {
  imageUrl?: string;
  delay?: string;
  name?: string;
  color?: string;
}

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  techs: Tech[];
}
