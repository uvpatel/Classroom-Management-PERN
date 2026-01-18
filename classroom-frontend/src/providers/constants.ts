import { Subjects } from "@/types";

export const API_URL = "https://api.fake-rest.refine.dev";


// types/index.ts


// providers/constants.ts
export const mockSubjects: Subjects[] = [
  {
    id: "1",
    code: "CSC101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "This course introduces students to the basics of computer science, including programming, algorithms, and data structures.",
  },
  {
    id: "2",
    code: "MATH201",
    name: "Calculus I",
    department: "Mathematics",
    description: "This course covers the basics of calculus, including limits, derivatives, and integrals.",
  },
  {
    id: "3",
    code: "PHYS301",
    name: "Physics III",
    department: "Physics",
    description: "This course covers the basics of electromagnetism and optics, including electric fields, magnetic fields, and light waves.",
  },
];