/** @format */

import { Course } from "./Course";

export type User = {
  id: number;
  fname: string;
  lname: string;
  age: number;
  email: string;
  password: string;
  progress: Progress[];
};
export type Progress = {
  course: Course;
  level: number;
  finished: number;
  startDate: number;
  plan: number;
};
