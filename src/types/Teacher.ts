import { Course } from "./Course";

export type Teacher = {
  id: number;
  name: string;
  email: string;
  courses: Course[];
};
