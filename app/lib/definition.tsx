import { StaticImageData } from "next/image";

export type FoundProject = {
    id: number;
    title: string;
    description: string;
	image: string | StaticImageData; 
    technologies: string[];
} 