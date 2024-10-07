import { StaticImageData } from "next/image";
export type FoundProject = {
    id: number;
    title: string;
    description: string;
	image: string | StaticImageData; 
    technologies: string[];
} 

export type Post = {
    id: string;
    author: string;
    authorimage: string;
    date: string;
    title: string;
    description: string;
    content: string;
  };